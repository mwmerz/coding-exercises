import { performance } from "perf_hooks";
/**
 * https://leetcode.com/problems/verifying-an-alien-dictionary/
 * In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order.
 * The order of the alphabet is some permutation of lowercase letters.
 * Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.
 *
 * Solution: https://leetcode.com/problems/verifying-an-alien-dictionary/solutions/3133858/typescript-verifying-an-alien-dictionary-commented-o-n-max-w/
 */

function isAlienSorted(words: string[], order: string): boolean {
  // set output flag to true by default
  let output = true;

  // map alphabet positions
  let alphabetMap: Map<string, number> = new Map();
  for (let i = 0; i < order.length; i++) {
    alphabetMap.set(order[i], i);
  }

  // loop words list
  for (let i = 0; i < words.length; i++) {
    let prev = words[i - 1] || "";
    let cur = words[i];

    for (let j = 0; j < Math.max(cur.length, prev.length); j++) {
      // cycle through letters using longest word as iterations

      // get current character
      let x = prev.charAt(j) || undefined;
      let y = cur.charAt(j) || undefined;
      // if current character is undefined, case is false, smaller word than previous.
      if (y === undefined) return false;

      // if letters are the same, continue iterating.
      // if letters are not the same, test their positions.
      if (x !== y) {
        let xPos = x === undefined ? 0 : alphabetMap.get(x) || 0;
        let yPos = alphabetMap.get(y)!;

        // if the current letter is later in the alphabet, word is in order.
        if (yPos < xPos!) {
          return false;
        }
        break;
      }
    }
  }

  return output;
}

export default function runSet() {
  const testCases = new Map();
  testCases.set(0, [["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"]);
  testCases.set(1, [["word", "world", "row"], "worldabcefghijkmnpqstuvxyz"]);
  testCases.set(2, [["apple", "app"], "abcdefghijklmnopqrstuvwxyz"]);
  testCases.set(3, [
    [
      "fxasxpc",
      "dfbdrifhp",
      "nwzgs",
      "cmwqriv",
      "ebulyfyve",
      "miracx",
      "sxckdwzv",
      "dtijzluhts",
      "wwbmnge",
      "qmjwymmyox",
    ],
    "zkgwaverfimqxbnctdplsjyohu",
  ]);
  testCases.forEach((v, k) => {
    console.log(`Case #${k} [${v}]`);
    const start = performance.now();
    console.log(isAlienSorted(v[0], v[1]));
    console.log("run time", (performance.now() - start).toFixed(3) + "ms");
  });
}
