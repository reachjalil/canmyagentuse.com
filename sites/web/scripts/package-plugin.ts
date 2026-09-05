import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { zipSync } from "fflate";

const root = new URL("../../../plugins/can-my-agent-use/", import.meta.url);
const files = [
  ".codex-plugin/plugin.json",
  ".mcp.json",
  "skills/compatibility-lookup/SKILL.md",
  "README.md",
  "assets/icon.png",
];
const archive = zipSync(
  Object.fromEntries(
    files.map((path) => [
      path,
      new Uint8Array(readFileSync(new URL(path, root))),
    ])
  ),
  { level: 9 }
);
const output = new URL("../public/plugins/", import.meta.url);
mkdirSync(output, { recursive: true });
writeFileSync(new URL("can-my-agent-use.zip", output), archive);
console.log(
  `Packaged plugin: ${fileURLToPath(new URL("can-my-agent-use.zip", output))}`
);
