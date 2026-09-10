/** Third fixture: pushed while the PR is still a draft (step 3 re-run). */
export function clampPercent(value: number): number {
  if (value < 0) return 0;
  if (value > 100) return 100;
  return value;
}
