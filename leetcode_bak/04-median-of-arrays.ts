import { performance } from "perf_hooks";
/**
 * https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 * The overall run time complexity should be O(log (m+n)).
 */

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // combine arrays and sort
  let combined = [...nums1, ...nums2].sort((a, b) => a - b);
  // determine if array has even or odd members.

  let length = combined.length;
  let isOdd = length % 2;

  // find middle
  let middle = Math.floor(length / 2);

  if (isOdd) {
    // if odd, return middle value.
    return combined[middle];
  } else {
    // if even, return average of two middle values.
    return (combined[middle - 1] + combined[middle]) / 2;
  }
}

export default function runSet() {
  const testCases = new Map();
  testCases.set(0, [[1, 3], [2]]);
  testCases.set(1, [
    [1, 2],
    [3, 4],
  ]);

  testCases.forEach((v, k) => {
    console.log(`Case #${k} [${v}]`);
    const start = performance.now();
    console.log(findMedianSortedArrays(v[0], v[1]));
    console.log("run time", (performance.now() - start).toFixed(3) + "ms");
  });
}
