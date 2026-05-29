import test from "node:test";
import assert from "node:assert/strict";

import { fizzbuzz } from "../src/fizzbuzz.js";

test("returns the first 15 values", () => {
  assert.deepEqual(fizzbuzz(15), [
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz",
  ]);
});

test("returns an empty array for n = 0", () => {
  assert.deepEqual(fizzbuzz(0), []);
});

test("returns an empty array for negative n", () => {
  assert.deepEqual(fizzbuzz(-5), []);
});

test("returns [\"1\"] for n = 1", () => {
  assert.deepEqual(fizzbuzz(1), ["1"]);
});

test("uses Fizz for multiples of 3 that are not multiples of 5", () => {
  assert.equal(fizzbuzz(3).at(-1), "Fizz");
  assert.equal(fizzbuzz(9).at(-1), "Fizz");
});

test("uses Buzz for multiples of 5 that are not multiples of 3", () => {
  assert.equal(fizzbuzz(5).at(-1), "Buzz");
  assert.equal(fizzbuzz(10).at(-1), "Buzz");
});

test("uses FizzBuzz for multiples of 15", () => {
  assert.equal(fizzbuzz(15).at(-1), "FizzBuzz");
  assert.equal(fizzbuzz(30).at(-1), "FizzBuzz");
});
