import fs from "fs";

const args = process.argv.slice(2);

console.log(args);

const getFileText = async (src) => {
  try {
    return fs.promises.readFile(src, "utf-8");
  } catch (error) {
    throw new Error(error);
  }
};

const countOccurrences = (mainString, wordToCount) => {
  const wordsArray = mainString.split(/\s+/);
  const occurrences = wordsArray.filter((word) => word === wordToCount).length;
  return occurrences;
};

(async () => {
  const text = await getFileText(args[0]);
  console.log(text);
  const numOfTimes = countOccurrences(text, args[1]);
  console.log(numOfTimes);
})();
