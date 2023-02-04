import { performance } from "perf_hooks";
/**
 * https://leetcode.com/problems/zigzag-conversion/
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
 * (you may want to display this pattern in a fixed font for better legibility)
 *
 * intuition:
 * letters should be cached per row and then rejoined.
 * use an iterator to go through letters, and a pointer to indicate row
 * pointer will bounce between top row and bottom row.
 *
 * plan:
 * create result map, position pointer, and direction flag to hold row strings
 * boundaries are 0 and rows minus 1.
 * cycle through letters, caching letters in result based on row
 * - row is determined by pointer
 * - pointer is determined by direction
 * - direction is determined by if boundary is hit
 * after letters, return array joined
 */

function convert(s: string, numRows: number): string {
  // set variables
  let result: Map<number, string> = new Map();
  let pointer: number = 0;
  let direction: number = 1;

  // iterate over string
  for (let i = 0; i < s.length; i++) {
    // if current row is undefined, initialize it
    if (result.get(pointer) === undefined) {
      result.set(pointer, "");
    }

    // add current letter to row
    result.set(pointer, result.get(pointer) + s[i]);

    // handle direction
    if (pointer === 0) {
      // if we're at the top, direction ascends
      direction = 1;
    } else if (pointer === numRows - 1) {
      // if we're at the bottom, direction descends
      direction = -1;
    }
    // move pointer based on direction.
    pointer += direction;
  }
  console.log(result);
  return [...result.values()].join("");
}

export default function runSet() {
  const testCases = new Map();
  testCases.set(0, ["PAYPALISHIRING", 3]);
  testCases.set(1, ["PAYPALISHIRING", 4]);
  testCases.set(2, ["A", 1]);

  testCases.forEach((v, k) => {
    console.log(`Case #${k} [${v}]`);
    const start = performance.now();
    console.log(convert(v[0], v[1]));
    console.log("run time", (performance.now() - start).toFixed(3) + "ms");
  });
}
