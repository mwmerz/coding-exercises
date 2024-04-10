import { performance } from "perf_hooks";
/**
 * 45. Jump Game II
 * https://leetcode.com/problems/jump-game-ii/
 *
 * You are given a 0-indexed array of integers nums of length n. You are initially
 * positioned at nums[0]. Each element nums[i] represents the maximum length of a
 * forward jump from index i. In other words, if you are at nums[i], you can jump
 * to any nums[i + j].
 *
 * Return the minimum number of jumps to reach nums[n - 1]. The test cases are
 * generated such that you can reach nums[n - 1].
 */

function jump(nums: number[]): number {
  // set variable for jump count, movementSpeed, and current position
  let jumps = 0;
  let movementSpeed = 0;
  let curPos = 0;

  // loop through elements except for last.
  for (let i = 0; i < nums.length - 1; i++) {
    // greedy - set jumpable destination to whatever is larger, current
    // destination or current position plus jump
    movementSpeed = Math.max(movementSpeed, i + nums[i]);

    // if we're at the current position, increment jumps
    // the current position is the movementSpeed.
    if (i === curPos) {
      jumps++;
      curPos = movementSpeed;
    }
  }

  // return how many jumps.
  return jumps;
}
export default function runSet() {
  const testCases = new Map();
  testCases.set(0, [2, 3, 1, 1, 4]);
  testCases.set(1, [2, 3, 0, 1, 4]);
  testCases.set(2, [1, 2]);
  testCases.set(3, [1, 3, 2]);
  testCases.set(4, [2, 3, 1]);

  testCases.forEach((v, k) => {
    console.log(`Case #${k} [${v}]`);
    const start = performance.now();
    console.log(jump(v));
    console.log("run time", (performance.now() - start).toFixed(3) + "ms");
  });
}
