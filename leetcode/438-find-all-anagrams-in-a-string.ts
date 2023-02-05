import { performance } from "perf_hooks";
/**
 * Problem: https://leetcode.com/problems/find-all-anagrams-in-a-string/
 * Given two strings s and p, return an array of all the start indices of p's anagrams in s.
 * You may return the answer in any order.
 *
 * intuition:
 * very similar to finding permutations in a string.
 * serialize (hash) pattern (p)
 * search for pattern in string (s)
 * return indicies of matches.
 *
 * approach:
 * create output array.
 * create arrays of 26 characters and fill with 0's.
 * for the length of the pattern, increment appearances of characters 1.
 * do the same for the string.
 * for the length of string, move window, finding patterns. kick index to output array when found.
 * return the output array
 */

function findAnagrams(s: string, p: string): number[] {
  // speed up time by immediatley returning edge cases, such as the string being empty.
  if (s.length < 1) return [];

  // create arrays to hold hash
  // initialize hashes by setting each 'letter slot' to 0.
  let patternHash: number[] = new Array(26).fill(0);
  let stringHash: number[] = new Array(26).fill(0);

  // create output array
  let output: number[] = [];

  // set pattern hash by incrementing each 'letter slot' found by 1.
  // do the same in the string hash for our first comparison.
  for (let i = 0; i < p.length; i++) {
    patternHash[p.charCodeAt(i) - 97]++;
    stringHash[s.charCodeAt(i) - 97]++;
  }

  // cycle through each 'window' of the string.
  // window length is the size of the pattern
  for (let i = 0; i < s.length - p.length; i++) {
    // if the patterns match, push the index to the output.
    if (patternHash.join("") === stringHash.join("")) {
      output.push(i);
    }

    // progress window by removing the first character and adding the 'next last'.
    stringHash[s.charCodeAt(i) - 97]--;
    stringHash[s.charCodeAt(i + p.length) - 97]++;
  }

  // check if we made a match on the last run of loop.
  if (patternHash.join("") === stringHash.join("")) {
    output.push(s.length - p.length);
  }

  // return the resulting array.
  return output;
}

export default function runSet() {
  const testCases = new Map();
  testCases.set(0, ["cbaebabacd", "abc"]);
  testCases.set(1, ["abab", "ab"]);
  // testCases.set(2, ["", ""]);

  testCases.forEach((v, k) => {
    console.log(`Case #${k} [${v}]`);
    const start = performance.now();
    console.log(findAnagrams(v[0], v[1]));
    console.log("run time", (performance.now() - start).toFixed(3) + "ms");
  });
}
