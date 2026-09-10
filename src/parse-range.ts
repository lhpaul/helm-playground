/** Second smoke-test fixture: pushed while the PR is still a draft. */
export function parseRange(input: string): [number, number] {
  const [a, b] = input.split("-");
  return [parseInt(a), parseInt(b)];
}
