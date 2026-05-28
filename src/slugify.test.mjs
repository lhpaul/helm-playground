import test from 'node:test';
import assert from 'node:assert/strict';

import { slugify } from './slugify.mjs';

// AC1: Basic lowercase + hyphenation between words.
test('AC1: converts a basic phrase to a lowercase, hyphenated slug', () => {
  assert.equal(slugify('Hello World'), 'hello-world');
});

// AC2: Leading/trailing whitespace is removed.
test('AC2: trims leading and trailing whitespace', () => {
  assert.equal(slugify('  Hello World  '), 'hello-world');
});

// AC3: Consecutive whitespace collapses into a single hyphen.
test('AC3: collapses consecutive whitespace into a single hyphen', () => {
  assert.equal(slugify('Hello   World'), 'hello-world');
});

// AC4: Consecutive hyphens collapse into a single hyphen.
test('AC4: collapses consecutive hyphens into a single hyphen', () => {
  assert.equal(slugify('Hello---World'), 'hello-world');
});

// AC5: Punctuation acts as a separator.
test('AC5: treats punctuation as a separator', () => {
  assert.equal(slugify('Hello, World!'), 'hello-world');
});

// AC6: Leading/trailing hyphens (from boundary punctuation) are trimmed.
test('AC6: trims leading and trailing hyphens', () => {
  assert.equal(slugify('---Hello World---'), 'hello-world');
});

// AC7: Uppercase characters are normalised to lowercase.
test('AC7: normalises uppercase characters to lowercase', () => {
  assert.equal(slugify('HELLO WORLD'), 'hello-world');
});

// AC8: Mixed case combined with punctuation.
test('AC8: handles mixed case combined with punctuation', () => {
  assert.equal(slugify('The Quick, Brown Fox!'), 'the-quick-brown-fox');
});

// AC9: Empty string passes through as an empty string.
test('AC9: returns an empty string for empty input', () => {
  assert.equal(slugify(''), '');
});

// AC10: Slugifying an already-valid slug is idempotent.
test('AC10: is idempotent on an already-valid slug', () => {
  assert.equal(slugify('hello-world'), 'hello-world');
});
