import fs from "fs/promises";
import path from "path";
import _ from 'lodash';
import HandleFile from "./application.js";

const sourceFilePath =
  "C:/Users/yswie/OneDrive/שולחן העבודה/exersize/15/test.txt";
const targetDirectory =
  "C:/Users/yswie/OneDrive/שולחן העבודה/exersize/15/data/";

const targetFileName = path.basename(sourceFilePath);
const targetFilePath = path.join(targetDirectory, targetFileName);

(async () => {
    try {
      const fileContent = await HandleFile.readContent(sourceFilePath);
      console.log("File Content:", fileContent);
  
      const lengthLodash = await HandleFile.countWordsLodash(sourceFilePath);
      console.log("Word Count:", lengthLodash);

      const length = await HandleFile.countWords(sourceFilePath);
      console.log("Word Count:", length);
  
      const reversedLodash = await HandleFile.readInReverseLodash(sourceFilePath);
      console.log("Reversed Content:", reversedLodash);

      const reversed = await HandleFile.readInReverse(sourceFilePath);
      console.log("Reversed Content:", reversed);

      const uniqLodash = await HandleFile.readInUniqLodash(sourceFilePath);
      console.log(uniqLodash);

      const uniq = await HandleFile.readInUniq(sourceFilePath)
      console.log(uniq);

      const uniqLen = await HandleFile.numOfUniq(sourceFilePath)
      console.log(uniqLen);

      const uniqUpper = await HandleFile.uniqToUpper(sourceFilePath);
      console.log(uniqUpper);
      
      const uniqLong = await HandleFile.uniqLong(sourceFilePath);
      console.log(uniqLong);

      await HandleFile.uniqHaevi(sourceFilePath);
     


    } catch (err) {
      console.error("Error:", err);
    }
  })();
