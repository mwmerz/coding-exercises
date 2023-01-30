import { performance } from "perf_hooks";
import developers from "../data/developers.json";
import simpsons from "../data/simpsons.json";

/**
 * Given a set of data, render the data in a tree such that children are below their parents.
 * use the most efficient method.
 */

type ItemNode = {
  id: number;
  name: string;
  parent_id: number | null;
};

function renderData(nodes: ItemNode[]) {
  let output = "";
  // create map from data.
  let hashMap: Map<number, ItemNode[]> = new Map();
  // cycle through nodes, adding them to hash map by parent_id id.
  nodes.every((node: ItemNode) => {
    // if parent_id id is null, set parent_id id to 0 (can't use null for key)
    if (node.parent_id === null) node.parent_id = 0;
    let parentNode = hashMap.get(node.parent_id);
    if (parentNode !== undefined) {
      // if a parent_id exists for the node, push the node to the parent_id
      parentNode.push(node);
    } else {
      // if it does not, add the parent_id id and the node together
      hashMap.set(node.parent_id, [node]);
    }
    return true;
  });

  // create a recursive function to traverse the nodes.
  // we use a recursive function in order to efficienty preserve depth.
  function traverse(nodes: ItemNode[], prefix: string = "") {
    for (const node of nodes) {
      // for each node, log prefix plus ndoe name.
      output += `${prefix}${node.name}\n`;
      const children = hashMap.get(node.id);
      // if the node has children, run the traverse function, progressing the prefix.
      if (children) {
        traverse(children, prefix + "-");
      }
    }
  }

  // finally, bootstrap the recursive function by calling it on the base node.
  traverse(hashMap.get(0)!);
  return output;
}

export default function runSet() {
  const testCases = new Map();
  testCases.set(0, developers);
  testCases.set(1, simpsons);

  testCases.forEach((v, k) => {
    console.log(`Case #${k}`);
    const start = performance.now();
    console.log(renderData(v));
    console.log("run time", (performance.now() - start).toFixed(3) + "ms");
  });
}
