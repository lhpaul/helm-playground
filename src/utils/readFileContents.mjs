import { readFile } from 'node:fs/promises';

/**
 * Read a file as UTF-8 text.
 *
 * Normalises the error surface: a missing file (`ENOENT`) is re-thrown as a
 * descriptive `Error` that names the requested path. Any other error is
 * re-thrown unchanged.
 *
 * @param {string} path - Path to the file to read.
 * @returns {Promise<string>} The file contents decoded as UTF-8.
 * @throws {Error} `File not found: <path>` when the file does not exist.
 */
export async function readFileContents(path) {
  try {
    return await readFile(path, 'utf-8');
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error(`File not found: ${path}`);
    }
    throw err;
  }
}
