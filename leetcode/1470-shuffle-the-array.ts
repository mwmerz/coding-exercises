import { performance } from "perf_hooks";
/**
 * 1470. Shuffle the Array
 * https://leetcode.com/problems/shuffle-the-array/
 *
 * Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
 * Return the array in the form [x1,y1,x2,y2,...,xn,yn].
 *
 * intuition
 * the original array should be cycled through, pushing values to a new array.
 * given the binary nature, we can swap with odd/even.
 *
 * approach
 * iterate over original array until
 * add current number, plus current number just beyond offset (n)
 */

function shuffle(nums: number[], n: number): number[] {
  // create store to hold output.
  let output = new Array(2 * n);

  // cycle through array until split (n)
  for (let i = 0; i < n; i++) {
    // push both the current position, as well as current position + offset to output.
    output[2 * i] = nums[i];
    output[2 * i + 1] = nums[i + n];
  }
  return output;
}

export default function runSet() {
  const testCases = new Map();
  testCases.set(0, [[2, 5, 1, 3, 4, 7], 3]);

  testCases.forEach((v, k) => {
    console.log(`Case #${k} [${v}]`);
    const start = performance.now();
    console.log(shuffle(v[0], v[1]));
    console.log("run time", (performance.now() - start).toFixed(3) + "ms");
  });
}
