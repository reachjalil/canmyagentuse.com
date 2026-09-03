import { mkdirSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { type Plugin, defineConfig } from "vite";

const appRoot = dirname(fileURLToPath(import.meta.url));
const stateFile = resolve(appRoot, "data/tracker.json");

/**
 * Persists the tracker to data/tracker.json so progress lives in the repo,
 * survives any browser, and travels with git. GET returns 404 until the
 * first save; the client seeds itself and writes back immediately.
 */
function fileStatePlugin(): Plugin {
  return {
    name: "internal-file-state",
    configureServer(server) {
      server.middlewares.use("/api/state", (req, res) => {
        res.setHeader("cache-control", "no-store");
        if (req.method === "GET") {
          try {
            const body = readFileSync(stateFile, "utf8");
            res.setHeader("content-type", "application/json; charset=utf-8");
            res.end(body);
          } catch {
            res.statusCode = 404;
            res.setHeader("content-type", "application/json; charset=utf-8");
            res.end(JSON.stringify({ error: "no saved state yet" }));
          }
          return;
        }
        if (req.method === "PUT") {
          const chunks: Buffer[] = [];
          req.on("data", (chunk: Buffer) => chunks.push(chunk));
          req.on("end", () => {
            try {
              const raw = Buffer.concat(chunks).toString("utf8");
              const parsed = JSON.parse(raw) as { version?: unknown };
              if (parsed.version !== 1)
                throw new Error("unknown state version");
              mkdirSync(dirname(stateFile), { recursive: true });
              const tmp = `${stateFile}.tmp`;
              writeFileSync(
                tmp,
                `${JSON.stringify(parsed, null, 2)}\n`,
                "utf8"
              );
              renameSync(tmp, stateFile);
              res.statusCode = 204;
              res.end();
            } catch (error) {
              res.statusCode = 400;
              res.setHeader("content-type", "application/json; charset=utf-8");
              res.end(JSON.stringify({ error: String(error) }));
            }
          });
          return;
        }
        res.statusCode = 405;
        res.setHeader("allow", "GET, PUT");
        res.end();
      });
    },
  };
}

export default defineConfig({
  plugins: [fileStatePlugin()],
  server: { port: 4400, strictPort: true },
  preview: { port: 4400 },
  build: { target: "es2022" },
});
