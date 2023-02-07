import { performance } from "perf_hooks";
/**
 * 1071. Greated Common Divisor of Strings
 * https://leetcode.com/problems/greatest-common-divisor-of-strings/
 *
 * For two strings s and t, we say "t divides s" if and only if s = t + ... + t
 * (i.e., t is concatenated with itself one or more times). Given two strings
 * str1 and str2, return the largest string x such that x divides both str1 and str2.
 *
 */

function gcdOfStrin1gs(str1: string, str2: string): string {
  if (str1 + str2 !== str2 + str1) return "";

  const gcd = (n1: number, n2: number): number => {
    if (n1 === 0) return n2;

    return gcd(n2 % n1, n1);
  };

  const k = gcd(str1.length, str2.length);

  return str1.slice(0, k);
}

function gcdOfStrings(str2: string, str1: string): string {
  // str1 must be able to equally prefix or suffix str2.
  if (str1 + str2 !== str2 + str1) return "";

  // finding greatest common divisor helper
  // use the Euclidean algorithm to determine greatest common divisor
  function gcd(a: number, b: number): number {
    if (b === 0) return a;

    return gcd(b, a % b);
  }

  // return the first string sliced from 0 to the greatest common divisor
  return str1.slice(0, gcd(str1.length, str2.length));
}

export default function runSet() {
  const testCases = new Map();
  testCases.set(0, ["ABCABC", "ABC"]);
  testCases.set(1, ["ABABAB", "ABAB"]);
  testCases.set(3, ["ABCDE", "CD"]);

  testCases.forEach((v, k) => {
    console.log(`Case #${k} [${v}]`);
    const start = performance.now();
    console.log(gcdOfStrings(v[0], v[1]));
    console.log("run time", (performance.now() - start).toFixed(3) + "ms");
  });
}
