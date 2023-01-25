import { performance } from "perf_hooks";
/**
 * exercise description
 */

function exercise(s: string): number {
  return 0;
}

export default function runSet() {
  const testCases = new Map();
  testCases.set(0, "");
  testCases.set(1, "");
  testCases.set(2, "");

  testCases.forEach((v, k) => {
    console.log(`Case #${k} [${v}]`);
    const start = performance.now();
    console.log(exercise(v));
    console.log("run time", (performance.now() - start).toFixed(3) + "ms");
  });
}
