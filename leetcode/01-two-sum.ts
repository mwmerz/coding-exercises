import { performance } from "perf_hooks";
/**
 * https://leetcode.com/problems/two-sum/
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 */

// create a map to hold results.
// loop through numbers.
// search the map for the current number
// if there is a result,
// return the map location and current number
// if there is no result
// subtract the current number from the target.
// store the result in the map with the index of this number

function twoSum(nums: number[], target: number): number[] {
  let result: [number, number] = [0, 0];

  return result;
}

export default function runSet() {
  const testCases = new Map();
  testCases.set(0, [[2, 7, 11, 15], 9]);
  testCases.set(1, [[3, 2, 4], 6]);
  testCases.set(2, [[3, 3], 6]);

  testCases.forEach((v, k) => {
    console.log(`Case #${k} [${v}]`);
    const start = performance.now();
    console.log("result/expected", twoSum(v[0], v[1]), v[2]);
    console.log("run time", performance.now() - start);
  });
}
