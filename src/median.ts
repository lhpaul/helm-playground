/** Fixture pushed to the draft after the workflow fix (step 3 final re-run). */
export function median(values: number[]): number {
  const sorted = [...values].sort();
  const mid = Math.floor(sorted.length / 2);
  return sorted[mid];
}
