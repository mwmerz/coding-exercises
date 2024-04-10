import { performance } from "perf_hooks";
/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Given a string s, find the length of the longest substring without repeating characters.
 */

function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  let maxLength: number = 0;
  let charsArray: string[] = s.split("");
  let tracker: string[] = [];
  // step through string, caching letters used.
  charsArray.every((c, i) => {
    // find a used character
    let usedChar = tracker.indexOf(c);

    // if used character is found, remove string up until and including char
    if (usedChar !== -1) {
      tracker.splice(0, usedChar + 1);
    }

    // add char to array
    tracker.push(c);

    // set max length to what is larger, existing maxLength or tracker size.
    maxLength = Math.max(tracker.length, maxLength);
    return true;
  });
  return maxLength;
}

export default function runSet() {
  const testCases = new Map();
  testCases.set(0, ["abcabcbb", 3]);
  testCases.set(1, ["bbbbb", 1]);
  testCases.set(2, ["pwwkew", 3]);
  testCases.set(3, [" ", 1]);
  testCases.set(4, ["", 0]);
  testCases.set(5, ["dvdf", 3]);
  testCases.set(6, ["gaaqfeqlqky", 4]);
  testCases.set(7, ["tmmzuxt", 5]);
  testCases.set(8, ["bpfbhmipx", 7]);

  testCases.forEach((v, k) => {
    console.log(`Case #${k} [${v[0]}]`);
    const start = performance.now();
    console.log("result/expected", lengthOfLongestSubstring(v[0]), v[1]);
    console.log("run time", (performance.now() - start).toFixed(3) + "ms");
  });
}
