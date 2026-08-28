import type { APIRoute } from "astro";
import {
  CONTRADICTIONS,
  OPEN_GOVERNANCE_QUESTIONS,
} from "@canmyagentuse/catalog";
import { jsonResponse } from "../../../lib/security";

export const GET: APIRoute = async () =>
  jsonResponse({
    items: CONTRADICTIONS,
    openQuestions: OPEN_GOVERNANCE_QUESTIONS,
  });
