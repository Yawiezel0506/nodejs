import fs from "fs";

const countObj = {};

const getFileText = async (src) => {
  try {
    return fs.promises.readFile(src, "utf-8");
  } catch (error) {
    throw new Error(error);
  }
};

(async () => {
  const data = await getFileText("./text.txt");
  const dataArr = data.split(/\s+/);
  dataArr.forEach((word) => {
    if (countObj[word] == null) {
      countObj[word] = 0;
    } else {
        console.log("im here");
      countObj[word] += 1;
    }
  });
  console.log(countObj);
})();
