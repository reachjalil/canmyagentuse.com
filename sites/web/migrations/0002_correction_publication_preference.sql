ALTER TABLE corrections
  ADD COLUMN publication_preference TEXT NOT NULL DEFAULT 'internal-only';
