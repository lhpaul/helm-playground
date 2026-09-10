/** Fourth fixture: pushed to the draft after the permissions fix. */
export function titleCase(input: string): string {
  return input.split(" ").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");
}
