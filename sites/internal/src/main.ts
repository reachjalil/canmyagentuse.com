import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-sans/700.css";
import "./style.css";

import {
  ANNOUNCEMENT_COPY,
  PRESS_BOILERPLATE_COPY,
  QUICK_LINKS,
  type CopyItem,
} from "./copy.ts";
import { SEED_STATE } from "./seed.ts";
import type { TabId, TrackerState, TrackerTask } from "./types.ts";

let state: TrackerState = structuredClone(SEED_STATE);
const openNotes = new Set<string>();

const TABS: readonly TabId[] = ["dashboard", "tracker", "copy", "log"];

function esc(value: string): string {
  return value.replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ] ?? char
  );
}

function panel(tab: TabId): HTMLElement {
  const element = document.querySelector<HTMLElement>(`[data-panel="${tab}"]`);
  if (!element) throw new Error(`missing panel ${tab}`);
  return element;
}

/* ---------- persistence ---------- */

const saveStatus = document.querySelector<HTMLElement>("[data-save-status]");
let saveTimer: number | undefined;
let retryTimer: number | undefined;

function setSaveStatus(text: string, tone: "ok" | "busy" | "bad"): void {
  if (!saveStatus) return;
  saveStatus.textContent = text;
  saveStatus.dataset.tone = tone;
}

async function pushState(): Promise<void> {
  setSaveStatus("saving…", "busy");
  state.updatedAt = new Date().toISOString();
  try {
    const response = await fetch("/api/state", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(state),
    });
    if (!response.ok) throw new Error(String(response.status));
    const at = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    setSaveStatus(`saved ${at}`, "ok");
  } catch {
    setSaveStatus("save failed — retrying", "bad");
    window.clearTimeout(retryTimer);
    retryTimer = window.setTimeout(() => void pushState(), 2500);
  }
}

function save(): void {
  window.clearTimeout(saveTimer);
  saveTimer = window.setTimeout(() => void pushState(), 500);
}

async function loadState(): Promise<void> {
  try {
    const response = await fetch("/api/state");
    if (response.ok) {
      state = (await response.json()) as TrackerState;
      setSaveStatus("loaded", "ok");
      return;
    }
    if (response.status === 404) {
      state = structuredClone(SEED_STATE);
      await pushState();
      return;
    }
    throw new Error(String(response.status));
  } catch {
    state = structuredClone(SEED_STATE);
    setSaveStatus("offline — changes will not persist", "bad");
  }
}

/* ---------- lookups ---------- */

function findTask(taskId: string): TrackerTask | undefined {
  for (const phase of state.phases) {
    const found = phase.tasks.find((entry) => entry.id === taskId);
    if (found) return found;
  }
  return undefined;
}

function taskTotals(): { done: number; total: number } {
  let done = 0;
  let total = 0;
  for (const phase of state.phases) {
    total += phase.tasks.length;
    done += phase.tasks.filter((entry) => entry.done).length;
  }
  return { done, total };
}

/* ---------- renderers ---------- */

function meter(done: number, total: number): string {
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);
  return `<div class="meter" role="img" aria-label="${percent}% complete"><span style="width:${percent}%"></span></div>`;
}

function taskRow(task: TrackerTask, phaseTitle?: string): string {
  const noteOpen = openNotes.has(task.id);
  const noteFlag = task.note.trim() ? " has-note" : "";
  return `
    <li class="task${task.done ? " task--done" : ""}">
      <label class="task__main">
        <input type="checkbox" data-task="${task.id}" ${task.done ? "checked" : ""} />
        <span>
          <span class="task__title">${esc(task.title)}</span>
          ${phaseTitle ? `<span class="task__phase">${esc(phaseTitle)}</span>` : ""}
          ${task.detail ? `<small class="task__detail">${esc(task.detail)}</small>` : ""}
        </span>
      </label>
      <span class="task__tools">
        <button type="button" class="task__note-btn${noteFlag}" data-action="toggle-note" data-id="${task.id}">note</button>
        <button type="button" class="task__delete" data-action="delete-task" data-id="${task.id}" aria-label="Delete task">×</button>
      </span>
      ${
        noteOpen
          ? `<textarea class="task__note" data-note="${task.id}" rows="2" placeholder="Working note…">${esc(task.note)}</textarea>`
          : ""
      }
    </li>`;
}

function renderDashboard(): void {
  const { done, total } = taskTotals();
  const phasesComplete = state.phases.filter(
    (phase) =>
      phase.tasks.length > 0 && phase.tasks.every((entry) => entry.done)
  ).length;
  const nextUp = state.phases.flatMap((phase) =>
    phase.tasks
      .filter((entry) => !entry.done)
      .map((entry) => ({ task: entry, phase }))
  );

  panel("dashboard").innerHTML = `
    <p class="eyebrow">Where the launch stands</p>
    <h2>Dashboard</h2>
    <dl class="census">
      <div><dt>Tasks done</dt><dd>${done}<small>/ ${total}</small></dd></div>
      <div><dt>Phases complete</dt><dd>${phasesComplete}<small>/ ${state.phases.length}</small></dd></div>
      <div><dt>Open tasks</dt><dd>${total - done}</dd></div>
      <div><dt>Log entries</dt><dd>${state.log.length}</dd></div>
    </dl>
    ${meter(done, total)}

    <div class="dash-grid">
      <section class="card" aria-labelledby="next-title">
        <h3 id="next-title">Next up</h3>
        ${
          nextUp.length === 0
            ? `<p class="empty">Everything is checked off. Add the next round of work in the tracker.</p>`
            : `<ul class="task-list">${nextUp
                .slice(0, 6)
                .map(({ task, phase }) =>
                  taskRow(task, `${phase.num} · ${phase.title}`)
                )
                .join("")}</ul>`
        }
      </section>
      <section class="card" aria-labelledby="links-title">
        <h3 id="links-title">Quick links</h3>
        <ul class="link-list">
          ${QUICK_LINKS.map(
            (link) =>
              `<li><a href="${link.href}" target="_blank" rel="noopener noreferrer">${esc(link.label)}</a><code>${esc(link.href.replace("https://", ""))}</code></li>`
          ).join("")}
        </ul>
      </section>
      <section class="card" aria-labelledby="recent-title">
        <h3 id="recent-title">Latest in the ship log</h3>
        ${
          state.log.length === 0
            ? `<p class="empty">No entries yet.</p>`
            : `<ul class="mini-log">${state.log
                .slice(0, 3)
                .map(
                  (entry) =>
                    `<li><span>${esc(entry.date)}</span><p>${esc(entry.text)}</p></li>`
                )
                .join("")}</ul>`
        }
      </section>
    </div>`;
}

function renderTracker(): void {
  panel("tracker").innerHTML = `
    <p class="eyebrow">The sequence</p>
    <h2>Launch tracker</h2>
    <p class="section-note">Phases fire in order — each one creates the evidence the next one cites. Check things off here; notes stay attached to the task.</p>
    <div class="phases">
      ${state.phases
        .map((phase) => {
          const done = phase.tasks.filter((entry) => entry.done).length;
          return `
          <section class="phase card" aria-label="Phase ${esc(phase.num)}: ${esc(phase.title)}">
            <header class="phase__head">
              <span class="phase__num">${esc(phase.num)}</span>
              <div>
                <h3>${esc(phase.title)}</h3>
                <p class="phase__window">${esc(phase.window)} · ${done}/${phase.tasks.length} done</p>
              </div>
              <div class="phase__meter">${meter(done, phase.tasks.length)}</div>
            </header>
            <p class="phase__summary">${esc(phase.summary)}</p>
            <ul class="task-list">${phase.tasks.map((entry) => taskRow(entry)).join("")}</ul>
            <form class="add-task" data-add-task="${phase.id}">
              <input type="text" name="title" placeholder="Add a task to this phase…" autocomplete="off" required />
              <button type="submit">Add</button>
            </form>
          </section>`;
        })
        .join("")}
    </div>`;
}

function copyBlock(item: CopyItem): string {
  return `
    <section class="card copy-item" aria-label="${esc(item.label)}">
      <header>
        <h3>${esc(item.label)}</h3>
        <button type="button" data-action="copy" data-id="${item.id}">Copy</button>
      </header>
      <small class="copy-item__hint">${esc(item.hint)}</small>
      <pre id="copy-${item.id}">${esc(item.text)}</pre>
      <span class="copy-status" data-copy-status="${item.id}" aria-live="polite"></span>
    </section>`;
}

function renderCopy(): void {
  panel("copy").innerHTML = `
    <p class="eyebrow">Say it the same way everywhere</p>
    <h2>Copy bank</h2>
    <p class="section-note">Announcement drafts in the house voice — no superlatives, no endorsement claims, coverage is never market share. Boilerplate is imported live from <code>@canmyagentuse/catalog</code>, the same module the public press kit renders from.</p>
    <div class="copy-grid">
      ${ANNOUNCEMENT_COPY.map(copyBlock).join("")}
      ${PRESS_BOILERPLATE_COPY.map(copyBlock).join("")}
    </div>`;
}

function renderLog(): void {
  panel("log").innerHTML = `
    <p class="eyebrow">Dated record</p>
    <h2>Ship log</h2>
    <p class="section-note">What actually happened, when. Future you — and future announcements — cite this.</p>
    <form class="card log-form" data-log-form>
      <textarea name="text" rows="2" placeholder="What shipped, landed, or changed today?" required></textarea>
      <button type="submit">Add entry</button>
    </form>
    <ul class="log-list">
      ${state.log
        .map(
          (entry) => `
        <li class="card">
          <span class="log-date">${esc(entry.date)}</span>
          <p>${esc(entry.text)}</p>
          <button type="button" class="task__delete" data-action="delete-log" data-id="${entry.id}" aria-label="Delete entry">×</button>
        </li>`
        )
        .join("")}
    </ul>`;
}

function renderAll(): void {
  renderDashboard();
  renderTracker();
  renderCopy();
  renderLog();
}

/* ---------- tabs ---------- */

function activateTab(tab: TabId): void {
  for (const id of TABS) {
    panel(id).hidden = id !== tab;
  }
  for (const button of document.querySelectorAll<HTMLButtonElement>(
    "[data-tab]"
  )) {
    if (button.dataset.tab === tab) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  }
  if (window.location.hash !== `#${tab}`)
    window.history.replaceState(null, "", `#${tab}`);
}

function tabFromHash(): TabId {
  const hash = window.location.hash.slice(1);
  return (TABS as readonly string[]).includes(hash)
    ? (hash as TabId)
    : "dashboard";
}

/* ---------- events ---------- */

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  const tabButton = target.closest<HTMLElement>("[data-tab]");
  if (tabButton?.dataset.tab) {
    activateTab(tabButton.dataset.tab as TabId);
    return;
  }

  const action = target.closest<HTMLElement>("[data-action]");
  if (!action) return;
  const id = action.dataset.id ?? "";

  if (action.dataset.action === "toggle-note") {
    if (openNotes.has(id)) openNotes.delete(id);
    else openNotes.add(id);
    renderTracker();
    renderDashboard();
    document.querySelector<HTMLTextAreaElement>(`[data-note="${id}"]`)?.focus();
  }

  if (action.dataset.action === "delete-task") {
    const task = findTask(id);
    if (!task) return;
    if (!window.confirm(`Delete task “${task.title}”?`)) return;
    for (const phase of state.phases) {
      phase.tasks = phase.tasks.filter((entry) => entry.id !== id);
    }
    save();
    renderAll();
  }

  if (action.dataset.action === "delete-log") {
    const entry = state.log.find((item) => item.id === id);
    if (!entry) return;
    if (!window.confirm(`Delete the ${entry.date} entry?`)) return;
    state.log = state.log.filter((item) => item.id !== id);
    save();
    renderAll();
  }

  if (action.dataset.action === "copy") {
    const source = document.getElementById(`copy-${id}`);
    const status = document.querySelector<HTMLElement>(
      `[data-copy-status="${id}"]`
    );
    if (!source) return;
    void navigator.clipboard
      .writeText(source.textContent ?? "")
      .then(() => {
        if (status) status.textContent = "Copied.";
      })
      .catch(() => {
        const range = document.createRange();
        range.selectNodeContents(source);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
        if (status)
          status.textContent = "Copy blocked — text selected instead.";
      })
      .finally(() => {
        window.setTimeout(() => {
          if (status) status.textContent = "";
        }, 3500);
      });
  }
});

document.addEventListener("change", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement) || !target.dataset.task) return;
  const task = findTask(target.dataset.task);
  if (!task) return;
  task.done = target.checked;
  save();
  renderDashboard();
  renderTracker();
});

document.addEventListener("input", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLTextAreaElement) || !target.dataset.note) return;
  const task = findTask(target.dataset.note);
  if (!task) return;
  task.note = target.value;
  save();
  const button = document.querySelector<HTMLElement>(
    `[data-action="toggle-note"][data-id="${task.id}"]`
  );
  button?.classList.toggle("has-note", task.note.trim().length > 0);
});

document.addEventListener("submit", (event) => {
  const form = event.target;
  if (!(form instanceof HTMLFormElement)) return;

  if (form.dataset.addTask) {
    event.preventDefault();
    const input = form.elements.namedItem("title");
    if (!(input instanceof HTMLInputElement)) return;
    const title = input.value.trim();
    if (!title) return;
    const phase = state.phases.find(
      (entry) => entry.id === form.dataset.addTask
    );
    if (!phase) return;
    phase.tasks.push({ id: crypto.randomUUID(), title, done: false, note: "" });
    input.value = "";
    save();
    renderDashboard();
    renderTracker();
    form.ownerDocument
      .querySelector<HTMLInputElement>(`[data-add-task="${phase.id}"] input`)
      ?.focus();
  }

  if (form.hasAttribute("data-log-form")) {
    event.preventDefault();
    const textarea = form.elements.namedItem("text");
    if (!(textarea instanceof HTMLTextAreaElement)) return;
    const text = textarea.value.trim();
    if (!text) return;
    state.log.unshift({
      id: crypto.randomUUID(),
      date: new Date().toISOString().slice(0, 10),
      text,
    });
    textarea.value = "";
    save();
    renderDashboard();
    renderLog();
  }
});

window.addEventListener("hashchange", () => activateTab(tabFromHash()));

/* ---------- boot ---------- */

void loadState().then(() => {
  renderAll();
  activateTab(tabFromHash());
});
