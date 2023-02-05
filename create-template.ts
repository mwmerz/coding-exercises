import fs from "fs";
import yargs from "yargs";

let argv = yargs(process.argv).argv;

if ("_" in argv) {
  // fetch title
  let title: string = argv._[2] as string;

  // make title file-safe
  let newTitle =
    title.toLowerCase().replace(".", "").split(" ").join("-") + ".ts";
  console.log(newTitle);

  // copy template.ts using title name
  // TODO: put title and url in with command.
  fs.copyFile("./leetcode/template.ts", "./leetcode/" + newTitle, (err) => {
    if (err) throw err;
    console.log("template.ts was copied to ", newTitle);
  });
}
