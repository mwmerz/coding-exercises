import { performance } from "perf_hooks";
/**
 * https://leetcode.com/problems/add-two-numbers/
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order, and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list.
 */

/**
 * Definition for singly-linked list.
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * Helper to convert an array of numbers to a listNode
 */
function arrayToList(arr: number[]): ListNode | null {
  let result = new ListNode();
  let current = result;

  arr.every((x) => {
    current.next = new ListNode(x);
    current = current.next;
    return true;
  });

  return result.next;
}

/**
 * Helper to convert a listNode to an array of numbers
 */
function listToArr(listNode: ListNode | null): number[] {
  let arr: number[] = [];
  while (listNode !== null) {
    arr.push(listNode.val);
    listNode = listNode.next;
  }
  return arr;
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  // create arrays to hold values
  let num1 = [];
  let num2 = [];

  // convert first list to array
  while (l1 !== null) {
    num1.push(l1.val);
    l1 = l1.next;
  }

  // convert second list to array
  while (l2 !== null) {
    num2.push(l2.val);
    l2 = l2.next;
  }

  // convert number arrays to big int
  // add numbers, convert to string, split the string, and reverse it.
  let sumArray = (
    BigInt(num1.reverse().join().replace(/,/g, "")) +
    BigInt(num2.reverse().join().replace(/,/g, ""))
  )
    .toString()
    .split("")
    .reverse();

  // convert array back to list.
  // create first link in list
  // set pointer to next item in list
  let result = new ListNode(0);
  let current = result;

  // for every array item, set the next value to the array value then progress pointer
  sumArray.every((n) => {
    current.next = new ListNode(Number(n));
    current = current.next;
    return true;
  });

  // return list after the placeholder link.
  return result.next;
}

export default function runSet() {
  const testCases = new Map();
  testCases.set(0, [arrayToList([2, 4, 3]), arrayToList([5, 6, 4])]);
  testCases.set(1, [arrayToList([0]), arrayToList([0])]);
  testCases.set(2, [
    arrayToList([9, 9, 9, 9, 9, 9, 9]),
    arrayToList([9, 9, 9, 9]),
  ]);

  testCases.forEach((v, k) => {
    console.log(`Case #${k}`);
    const start = performance.now();
    console.log(addTwoNumbers(v[0], v[1]));
    console.log("run time", (performance.now() - start).toFixed(3) + "ms");
  });
}
