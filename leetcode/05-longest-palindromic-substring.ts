import { performance } from "perf_hooks";
/**
 * 5. Longest Palindromic Substring
 * https://leetcode.com/problems/longest-palindromic-substring/
 * Given a string s, return the longest palindromic substring in s.
 *
 */

function longestPalindrome(s: string): string {
  // for speed, return brute force cases.
  // empty, full palindromes to 5 characters.
  if (s.length < 1) return "";
  if (s.length === 1) return s;
  if (s.length === 2 && s[0] === s[1]) return s;
  if (s.length === 3 && s[0] === s[2]) return s;
  if (s.length === 4 && s[0] === s[3] && s[1] === s[2]) return s;
  if (s.length === 5 && s[0] === s[4] && s[1] === s[3]) return s;

  // create start and end markers
  let start = 0;
  let end = 0;

  // define helper function to take a string then expand left and right as long as
  // while 'palindrome' condition is true.

  function expandAroundCenter(s: string, left: number, right: number) {
    // initialize left and right
    let l = left;
    let r = right;

    // l decrements evenly with r incrementing
    // as long as l & r are equal (palindrome condition)
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--;
      r++;
    }

    // the length of the palindrome is derived from
    // subtracting l (left boundary) from r (right boundary)
    // we subtract an additional 1 to account for the expansion of the previous loop.
    return r - l - 1;
  }

  // each character is treated as the center.
  // we check each "center" for a palindrome around it.
  for (let i = 0; i < s.length; i++) {
    // odd palindromes lengths
    let len1 = expandAroundCenter(s, i, i);

    //even palindromes lengths
    let len2 = expandAroundCenter(s, i, i + 1);

    // find longer between the two.
    let len = Math.max(len1, len2);

    // while there is a palindrome, length will be greater
    if (len > end - start) {
      // the beginning of the substring is offset by half of the length to the
      // left of the 'center', i.
      start = i - Math.floor((len - 1) / 2);

      // the end of the substring
      end = i + Math.floor(len / 2);
    }
  }

  return s.substring(start, end + 1);
}

export default function runSet() {
  const testCases = new Map();
  testCases.set(0, "babad");
  testCases.set(1, "cbbd");
  testCases.set(2, "bb");
  testCases.set(3, "ccd");

  testCases.forEach((v, k) => {
    console.log(`Case #${k} [${v}]`);
    const start = performance.now();
    console.log(longestPalindrome(v));
    console.log("run time", (performance.now() - start).toFixed(3) + "ms");
  });
}
