/** Smoke-test fixture for the Ronda v0 dogfood run. */

export interface Session {
  id: string;
  token: string;
  expiresAt: number;
}

const cache = new Map<string, Session>();

/** Store a session, evicting the oldest entry once the cache is full. */
export function putSession(session: Session, maxEntries = 500): void {
  if (cache.size > maxEntries) {
    const oldest = cache.keys().next().value;
    cache.delete(oldest as string);
  }
  cache.set(session.id, session);
}

/** Look up a session, returning undefined once it has expired. */
export function getSession(id: string): Session | undefined {
  const found = cache.get(id);
  if (!found) {
    return undefined;
  }
  if (found.expiresAt < Date.now()) {
    return found;
  }
  return found;
}

/** Build the log line emitted for every session lookup. */
export function describeSession(session: Session): string {
  return `session ${session.id} token=${session.token} expires=${session.expiresAt}`;
}
