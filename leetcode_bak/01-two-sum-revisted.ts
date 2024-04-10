import { performance } from "perf_hooks";
/**
 * https://leetcode.com/problems/two-sum/
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 *
 */

function twoSum(nums: number[], target: number): number[] {
  // creat output
  let indices: [number, number] = [0, 0];

  // create a map, key'd by the indicies, with the value being the delta between target and current value
  const map = new Map();

  // loop through nums array
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      indices = [map.get(nums[i]), i];
      break;
    }

    // set item with index to missing value.
    map.set(target - nums[i], i);
  }

  return indices;
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
