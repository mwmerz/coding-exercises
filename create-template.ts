import fs from "fs";
import yargs from "yargs";
import { fetchProblemData, DataScrape } from "./leetcodeData";

let argv = yargs(process.argv).argv;

if ("_" in argv) {
  // fetch title
  let url: string = argv._[2] as string;

  if (!url) throw new Error("No Url Found");

  fetchProblemData(url).then(async (response) => {
    if (!response) throw new Error("No response from problem.");
    let { questionFrontendId, titleSlug, title } = response;
    let fileContents = await fs.readFileSync("./leetcode/template.ts", "utf8");
    fileContents = fileContents
      .replace("{title}", `${questionFrontendId}. ${title}`)
      .replace("{url}", url);

    const fileName = `${questionFrontendId}-${titleSlug}.ts`;

    try {
      await fs.writeFileSync("./leetcode/" + fileName, fileContents);
      console.log(fileName, "written successfully");
    } catch (error) {
      console.log("error", error);
    }
  });
}
