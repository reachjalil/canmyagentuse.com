import {
  STATE_OF_HARNESSES_REPORT_SLUG,
  buildStateOfHarnessesReport,
  type StateOfHarnessesReport,
} from "@canmyagentuse/catalog";
import { researchSeed } from "./research";

export const stateOfHarnessesReport = buildStateOfHarnessesReport(researchSeed);

export function reportSnapshot(
  slug: string
): StateOfHarnessesReport | undefined {
  if (slug === STATE_OF_HARNESSES_REPORT_SLUG) {
    return stateOfHarnessesReport;
  }
  return undefined;
}
