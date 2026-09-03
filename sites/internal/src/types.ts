export interface TrackerTask {
  id: string;
  title: string;
  detail?: string;
  done: boolean;
  note: string;
}

export interface TrackerPhase {
  id: string;
  num: string;
  window: string;
  title: string;
  summary: string;
  tasks: TrackerTask[];
}

export interface LogEntry {
  id: string;
  date: string;
  text: string;
}

export interface TrackerState {
  version: 1;
  updatedAt: string;
  phases: TrackerPhase[];
  log: LogEntry[];
}

export type TabId = "dashboard" | "tracker" | "copy" | "log";
