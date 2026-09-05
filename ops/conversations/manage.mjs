import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  writeFileSync,
} from "node:fs";
import { createRequire } from "node:module";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const base = dirname(fileURLToPath(import.meta.url));
const root = resolve(base, "../..");
const { parse, stringify } = createRequire(
  join(root, "sites/web/package.json")
)("yaml");
const groups = ["records", "batches", "tasks", "replies", "outcomes"];
const states = {
  conversation: [
    "untriaged",
    "shortlisted",
    "research-needed",
    "ready-to-contribute",
    "resolved",
    "skipped",
  ],
  batch: ["collecting", "review-ready", "integrated"],
  task: [
    "queued",
    "in-progress",
    "blocked",
    "review-ready",
    "done",
    "cancelled",
  ],
  "reply-list": ["draft", "review-ready", "approved", "archived"],
  outcome: ["approved", "posted", "response-observed", "skipped", "withdrawn"],
};
const required = {
  conversation: [
    "title",
    "url",
    "root_url",
    "author",
    "handle",
    "posted_at",
    "date_method",
    "observed_at",
    "verification",
    "sources",
    "topics",
    "products",
    "opportunity",
    "our_reply",
    "related_ids",
  ],
  batch: ["owner", "created_at", "conversation_ids"],
  task: [
    "task_type",
    "owner",
    "created_at",
    "updated_at",
    "conversation_ids",
    "depends_on",
    "owned_paths",
    "outputs",
    "account",
    "publish_site",
    "post_social",
  ],
  "reply-list": [
    "owner",
    "created_at",
    "account",
    "conversation_ids",
    "depends_on",
    "variants",
  ],
  outcome: [
    "conversation_id",
    "account",
    "account_handle",
    "occurred_at",
    "reply_list_id",
    "variant_id",
    "posted_url",
    "evidence_url",
  ],
};
const statusUrl =
  /^https:\/\/(?:x|twitter)\.com\/[A-Za-z0-9_]+\/status\/([0-9]+)$/;
const isUrl = (value) =>
  typeof value === "string" &&
  URL.canParse(value) &&
  new URL(value).protocol === "https:";
const md = (value) => String(value ?? "").replace(/[|\r\n]/g, " ");

function readRecords() {
  return groups.flatMap((group) => {
    const dir = join(base, group);
    if (!existsSync(dir)) return [];
    return readdirSync(dir)
      .filter((name) => name.endsWith(".md"))
      .sort()
      .map((name) => {
        const file = join(dir, name);
        const text = readFileSync(file, "utf8");
        const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
        if (!match)
          throw new Error(`${relative(root, file)}: missing frontmatter`);
        const data = parse(match[1], { uniqueKeys: true });
        if (!data || typeof data !== "object" || Array.isArray(data))
          throw new Error(`${name}: metadata must be a mapping`);
        return { file, group, data };
      });
  });
}

function validate(records) {
  const errors = [];
  const ids = new Map();
  for (const { file, group, data: d } of records) {
    const fail = (message) =>
      errors.push(`${relative(root, file)}: ${message}`);
    if (typeof d.id !== "string" || !d.id) fail("missing id");
    if (ids.has(d.id)) fail(`duplicate id ${d.id}`);
    ids.set(d.id, d);
    if (!states[d.kind]?.includes(d.status)) fail("invalid kind/status");
    const expectedGroup = {
      conversation: "records",
      batch: "batches",
      task: "tasks",
      "reply-list": "replies",
      outcome: "outcomes",
    }[d.kind];
    if (expectedGroup !== group) fail("record is in the wrong folder");
    const filename = relative(join(base, group), file);
    const patterns = {
      batches: /^\d{4}-\d{2}-\d{2}__[a-z0-9-]+__[a-z0-9-]+\.md$/,
      tasks:
        /^\d{4}-\d{2}-\d{2}__(discovery|site|replies)__[a-z0-9-]+__[a-z0-9-]+\.md$/,
      replies:
        /^\d{4}-\d{2}-\d{2}__(jalil|brand|both)__[a-z0-9-]+__[a-z0-9-]+\.md$/,
      outcomes:
        /^\d{4}-\d{2}-\d{2}T\d{6}Z__(jalil|brand)__\d+__[a-z0-9-]+\.md$/,
    };
    if (patterns[group] && !patterns[group].test(filename))
      fail("filename does not follow CONTRACT.md");

    for (const key of required[d.kind] ?? [])
      if (!(key in d)) fail(`missing ${key}`);
    for (const key of [
      "sources",
      "topics",
      "products",
      "related_ids",
      "conversation_ids",
      "depends_on",
      "owned_paths",
      "outputs",
      "variants",
      "site_urls",
    ]) {
      if (key in d && !Array.isArray(d[key])) fail(`${key} must be an array`);
    }
    for (const key of [
      "created_at",
      "updated_at",
      "posted_at",
      "observed_at",
      "occurred_at",
    ]) {
      if (
        key in d &&
        d[key] !== null &&
        (typeof d[key] !== "string" ||
          !/^\d{4}-\d{2}-\d{2}T/.test(d[key]) ||
          !Number.isFinite(Date.parse(d[key])))
      )
        fail(`${key} must be an ISO timestamp or permitted null`);
      if (
        key in d &&
        d[key] === null &&
        !["posted_at", "observed_at"].includes(key)
      )
        fail(`${key} cannot be null`);
    }
    if (d.kind === "conversation") {
      const match = typeof d.url === "string" && d.url.match(statusUrl);
      if (
        !match ||
        d.id !== `conv-x-${match[1]}` ||
        file !== join(base, "records", `x-${match[1]}.md`)
      )
        fail("URL, ID and filename must identify the same status");
      if (!statusUrl.test(d.root_url))
        fail("root_url must identify an exact status");
      if (
        !["direct", "mirror", "snippet", "unverified"].includes(d.verification)
      )
        fail("invalid verification");
      if (!["direct", "snowflake", "source", "unknown"].includes(d.date_method))
        fail("invalid date_method");
      if (!["not-observed", "observed", "unknown"].includes(d.our_reply))
        fail("invalid our_reply");
      if (d.verification !== "unverified" && !d.sources?.length)
        fail("verified record needs evidence URLs");
      for (const url of d.sources ?? [])
        if (!isUrl(url)) fail("source must be HTTPS");
    }
    if (d.kind === "task") {
      if (!["discovery", "site", "replies"].includes(d.task_type))
        fail("invalid task_type");
      if (!["jalil", "brand", "both", "none"].includes(d.account))
        fail("invalid task account");
      if (
        typeof d.publish_site !== "boolean" ||
        typeof d.post_social !== "boolean"
      )
        fail("scope flags must be booleans");
      if (d.status === "done" && !d.outputs?.length)
        fail("done task needs output paths");
      for (const path of [...(d.outputs ?? []), ...(d.owned_paths ?? [])]) {
        if (
          typeof path !== "string" ||
          path.startsWith("/") ||
          path.split("/").includes("..")
        )
          fail("paths must stay repo-relative");
      }
      for (const path of d.outputs ?? [])
        if (!existsSync(resolve(root, path))) fail(`missing output ${path}`);
    }
    if (d.kind === "reply-list") {
      if (!["jalil", "brand", "both"].includes(d.account))
        fail("invalid reply-list account");
      const seen = new Set();
      for (const v of d.variants ?? []) {
        for (const key of [
          "id",
          "conversation_id",
          "account",
          "strategy",
          "text",
          "readiness",
          "site_urls",
          "verified_at",
        ])
          if (!(key in v)) fail(`variant missing ${key}`);
        if (seen.has(v.id)) fail(`duplicate variant ${v.id}`);
        seen.add(v.id);
        if (
          !["jalil", "brand"].includes(v.account) ||
          (d.account !== "both" && v.account !== d.account)
        )
          fail("variant account conflicts with list");
        if (!["draft", "ready", "blocked"].includes(v.readiness))
          fail("invalid variant readiness");
        if (
          !Array.isArray(v.site_urls) ||
          v.site_urls.some((url) => !isUrl(url))
        )
          fail("variant site_urls must be HTTPS array");
        if (!d.conversation_ids?.includes(v.conversation_id))
          fail("variant conversation must be in list");
        if (
          v.readiness === "ready" &&
          v.site_urls?.length &&
          !Number.isFinite(Date.parse(v.verified_at))
        )
          fail("ready linked variant needs verified_at");
      }
    }
    if (d.kind === "outcome") {
      if (!["jalil", "brand"].includes(d.account))
        fail("invalid outcome account");
      if (
        d.status === "posted" &&
        (!statusUrl.test(d.posted_url) ||
          !/^@[A-Za-z0-9_]+$/.test(d.account_handle) ||
          !isUrl(d.evidence_url))
      )
        fail("posted requires exact URL, actual handle and evidence URL");
      if (d.status === "response-observed" && !isUrl(d.evidence_url))
        fail("observed response needs evidence URL");
    }
  }
  for (const { file, data: d } of records) {
    const refs = [
      ...(d.conversation_ids ?? []),
      ...(d.related_ids ?? []),
      ...(d.depends_on ?? []),
      d.conversation_id,
      d.reply_list_id,
      d.batch_id,
    ].filter(Boolean);
    for (const id of refs)
      if (!ids.has(id))
        errors.push(`${relative(root, file)}: unresolved reference ${id}`);
    for (const id of d.depends_on ?? [])
      if (ids.get(id)?.kind !== "task")
        errors.push(`${d.id}: dependency ${id} must be a task`);
    if (
      d.kind === "reply-list" &&
      d.variants?.some((v) => v.readiness === "ready")
    ) {
      for (const id of d.depends_on ?? [])
        if (ids.get(id)?.status !== "done")
          errors.push(`${d.id}: ready variant has unfinished dependency ${id}`);
    }
  }
  if (errors.length) throw new Error(errors.join("\n"));
}

function newTask([kind, topic, owner]) {
  if (
    !["discovery", "site", "replies"].includes(kind) ||
    ![topic, owner].every(
      (s) => typeof s === "string" && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(s)
    )
  )
    throw new Error(
      "Usage: new-task <discovery|site|replies> <topic-slug> <owner-slug>"
    );
  const now = new Date().toISOString();
  const date = now.slice(0, 10);
  const name = `${date}__${kind}__${topic}__${owner}.md`;
  const data = {
    id: `task-${date}-${kind}-${topic}-${owner}`,
    kind: "task",
    status: "queued",
    task_type: kind,
    owner,
    created_at: now,
    updated_at: now,
    conversation_ids: [],
    depends_on: [],
    owned_paths: [],
    outputs: [],
    account: kind === "replies" ? "both" : "none",
    publish_site: false,
    post_social: false,
  };
  mkdirSync(join(base, "tasks"), { recursive: true });
  writeFileSync(
    join(base, "tasks", name),
    `---\n${stringify(data)}---\n\n## Objective and scope\n\nFill the objective, inputs, owned paths and actual authorization before dispatch.\n\n## Acceptance and handoff\n\nSpecify the useful output and required evidence.\n\n## Work log\n\n- ${now}: queued for ${owner}.\n`,
    { flag: "wx" }
  );
  console.log(relative(root, join(base, "tasks", name)));
}

try {
  const [command = "check", ...args] = process.argv.slice(2);
  if (command === "new-task") newTask(args);
  else {
    if (!["check", "index"].includes(command))
      throw new Error("Commands: check, index, new-task");
    const records = readRecords();
    validate(records);
    if (command === "index") {
      let text =
        "# Conversation work index\n\nGenerated by `pnpm conversations:index`. Edit the source records, not this file.\n\n";
      for (const group of groups) {
        text += `## ${group}\n\n| Record | Status | Owner / author | Account / verification |\n| --- | --- | --- | --- |\n`;
        for (const { file, data: d } of records.filter(
          (r) => r.group === group
        ))
          text += `| [${md(d.title ?? d.id)}](${relative(base, file)}) | ${md(d.status)} | ${md(d.owner ?? d.handle)} | ${md(d.account ?? d.verification)} |\n`;
        text += "\n";
      }
      writeFileSync(join(base, "INDEX.md"), text);
    }
    console.log(
      `Validated ${records.length} conversation-workflow records${command === "index" ? "; index regenerated" : ""}.`
    );
  }
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
