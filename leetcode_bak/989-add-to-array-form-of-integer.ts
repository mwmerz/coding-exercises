import { performance } from "perf_hooks";
/**
 * 989. Add to Array-Form of Integer
 * https://leetcode.com/problems/add-to-array-form-of-integer/
 *
 * The array-form of an integer num is an array representing its digits in left to right order.
 */

function addToArrayForm(num: number[], k: number): number[] {
  // create output array
  const result = [];

  // create a carry digit
  let carry = k;

  // loop over number array from the back
  for (let i = num.length - 1; i >= 0 || carry > 0; i--) {
    if (i >= 0) {
      // while we're not at the beginning of the number array
      // add the current digit to the carry
      carry += num[i];
    }

    // add the 1's column to the array
    result.push(carry % 10);

    // continue the carry
    carry = Math.floor(carry / 10);
  }

  // return the reverse.
  return result.reverse();

  // cheap way.
  return (BigInt(num.join("")) + BigInt(k)).toString().split("").map(Number);
}

export default function runSet() {
  const testCases = new Map();
  testCases.set(0, [[1, 2, 0, 0], 34]);
  testCases.set(1, [[2, 7, 4], 181]);
  testCases.set(2, [[2, 1, 5], 806]);

  testCases.forEach((v, k) => {
    console.log(`Case #${k} [${v}]`);
    const start = performance.now();
    console.log(addToArrayForm(v[0], v[1]));
    console.log("run time", (performance.now() - start).toFixed(3) + "ms");
  });
}
