CREATE TABLE IF NOT EXISTS corrections (
  id TEXT PRIMARY KEY,
  received_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  review_state TEXT NOT NULL DEFAULT 'received',
  target_type TEXT NOT NULL,
  feature_slug TEXT NOT NULL DEFAULT '',
  harness_slug TEXT NOT NULL DEFAULT '',
  track TEXT NOT NULL DEFAULT 'current',
  current_snapshot_json TEXT NOT NULL,
  source_snapshot_json TEXT NOT NULL,
  submitted_snapshot_json TEXT NOT NULL,
  catalog_permalink TEXT NOT NULL DEFAULT '',
  proposed_status TEXT NOT NULL,
  explanation TEXT NOT NULL,
  source_urls_json TEXT NOT NULL,
  reproduction_steps TEXT NOT NULL DEFAULT '',
  product_version TEXT NOT NULL DEFAULT '',
  plan TEXT NOT NULL DEFAULT '',
  platform TEXT NOT NULL DEFAULT '',
  surface TEXT NOT NULL DEFAULT '',
  affiliation TEXT NOT NULL DEFAULT 'none',
  affiliation_details TEXT NOT NULL DEFAULT '',
  contact TEXT NOT NULL DEFAULT '',
  permission_to_contact INTEGER NOT NULL DEFAULT 0,
  submitter_hash TEXT NOT NULL,
  submission_hash TEXT NOT NULL,
  spam_score INTEGER NOT NULL DEFAULT 0,
  decision TEXT NOT NULL DEFAULT '',
  decision_rationale TEXT NOT NULL DEFAULT '',
  outcome TEXT NOT NULL DEFAULT '',
  duplicate_of TEXT,
  superseded_by TEXT,
  FOREIGN KEY (duplicate_of) REFERENCES corrections(id),
  FOREIGN KEY (superseded_by) REFERENCES corrections(id)
);

CREATE INDEX IF NOT EXISTS corrections_review_state_updated
  ON corrections(review_state, updated_at DESC);
CREATE INDEX IF NOT EXISTS corrections_submitter_received
  ON corrections(submitter_hash, received_at DESC);
CREATE INDEX IF NOT EXISTS corrections_submission_received
  ON corrections(submission_hash, received_at DESC);

CREATE TABLE IF NOT EXISTS correction_events (
  event_id INTEGER PRIMARY KEY AUTOINCREMENT,
  correction_id TEXT NOT NULL,
  occurred_at TEXT NOT NULL,
  review_state TEXT NOT NULL,
  actor TEXT NOT NULL,
  rationale TEXT NOT NULL DEFAULT '',
  outcome TEXT NOT NULL DEFAULT '',
  FOREIGN KEY (correction_id) REFERENCES corrections(id)
);

CREATE INDEX IF NOT EXISTS correction_events_correction
  ON correction_events(correction_id, event_id ASC);
