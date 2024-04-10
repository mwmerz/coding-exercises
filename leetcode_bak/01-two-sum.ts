import { performance } from "perf_hooks";
/**
 * https://leetcode.com/problems/two-sum/
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 */

function twoSum(nums: number[], target: number): number[] {
  let result: [number, number] = [0, 0];

  // create a map to hold results.
  let resultMap: Map<number, number> = new Map();

  // loop through numbers.
  nums.every((x, i) => {
    // search the map for the current number
    let lookupNumber = resultMap.get(x);
    if (lookupNumber === undefined) {
      // if there is no result
      // subtract the current number from the target.
      // store the result in the map with the index of this number
      resultMap.set(target - x, i);
      return true;
    } else {
      // if there is a result,
      // return the map location and current number
      result = [i, lookupNumber];
      return false;
    }
  });

  return result;
}

export default function runSet() {
  const testCases = new Map();
  testCases.set(0, [[2, 7, 11, 15], 9]);
  testCases.set(1, [[3, 2, 4], 6]);
  testCases.set(2, [[3, 3], 6]);

  testCases.forEach((v, k) => {
    console.log(`Case #${k} [${v[0]}]`);
    const start = performance.now();
    console.log("result", twoSum(v[0], v[1]));
    console.log("run time", (performance.now() - start).toFixed(3) + "ms");
  });
}
