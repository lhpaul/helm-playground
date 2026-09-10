/** Step 4 fixture: pushed to the ready PR to trigger a second pass. */
export function buildQuery(table: string, userInput: string): string {
  return `SELECT * FROM ${table} WHERE name = '${userInput}'`;
}
