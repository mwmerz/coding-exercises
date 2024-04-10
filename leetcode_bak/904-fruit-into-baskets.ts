import { performance } from "perf_hooks";
/**
 * 904. Fruit Into Baskets
 * https://leetcode.com/problems/fruit-into-baskets/
 *
 * intuition
 * we are looking for the longest consecutive set of max (2) unique values in an array.
 *
 * approach
 *
 * sliding window technique.
 * create window start, end, and max length.
 * while loop until end reaches length.
 * create set. if set is greater than 2, close front of window
 * expand end of window.
 *
 */

function totalFruit(fruits: number[]): number {
  // return a couple of brute force edge cases to improve time
  if (fruits.length === 1) return 1;
  if (fruits.length === 2) return 2;

  // create window start, end, max size, and map for count in window
  let start = 0;
  let end = 0;
  let maxLength = 0;
  let count: Map<number, number> = new Map();

  // until the end of the window touches the end of the set.
  while (end < fruits.length) {
    // set current fruit to the end of the map
    const fruit = fruits[end];

    // update count of current end fruit by 1.
    count.set(fruit, (count.get(fruit) || 0) + 1);

    // if the window map has more than 2 unique values
    if (count.size > 2) {
      // track current opening.
      const startFruit = fruits[start];

      // get the count of the current open
      let startFruitCount = count.get(startFruit);

      // if current fruit is not found in count, set it to zero
      if (startFruitCount === undefined) startFruitCount = 0;

      // update window start count to track window closing.
      count.set(startFruit, startFruitCount - 1);

      // update local count.
      startFruitCount = count.get(startFruit);

      if (startFruitCount === 0) {
        // if count is zero, update count to remove type.
        count.delete(startFruit);
      }
      // bring window start in.
      start++;
    }
    // otherwise extend window.
    end++;

    // update max length to whatever is longest, existing max length or new window.
    maxLength = Math.max(maxLength, end - start);
  }

  return maxLength;
}

export default function runSet() {
  const testCases = new Map();
  testCases.set(0, [1, 2, 1]);
  testCases.set(1, [0, 1, 2, 2]);
  testCases.set(2, [1, 2, 3, 2, 2]);

  testCases.forEach((v, k) => {
    console.log(`Case #${k} [${v}]`);
    const start = performance.now();
    console.log(totalFruit(v));
    console.log("run time", (performance.now() - start).toFixed(3) + "ms");
  });
}
