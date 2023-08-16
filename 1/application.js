import fs from "fs";
import _ from "lodash";

export default class HandleFile {
  static async readContent(file) {
    try {
      const data = await fs.promises.readFile(file, "utf-8");
      return data;
    } catch (err) {
      throw new Error(err);
    }
  }

  static async countWordsLodash(file) {
    try {
      const data = await this.readContent(file);
      const words = _.words(data);
      return words.length;
    } catch (err) {
      throw new Error(err);
    }
  }

  static async countWords(file) {
    try {
      const data = await this.readContent(file);
      const words = data.split(/\s+/).filter((word) => word !== "");
      return words.length;
    } catch (err) {
      throw new Error(err);
    }
  }

  static async readInReverseLodash(file) {
    try {
      const data = await this.readContent(file);
      const reversedData = _.reverse(_.words(data)).join(" ");
      return reversedData;
    } catch (err) {
      throw new Error(err);
    }
  }

  static async readInReverse(file) {
    try {
      const data = await this.readContent(file);
      const reversedData = data.split(/\s+/).reverse().join(" ");
      return reversedData;
    } catch (err) {
      throw new Error(err);
    }
  }

  static async readInUniqLodash(file) {
    try {
      const data = await this.readContent(file);
      const uniqData = _.uniq(_.words(data));
      return uniqData;
    } catch (error) {
      throw new Error(err);
    }
  }

  static async readInUniq(file) {
    try {
      const data = await this.readContent(file);
      const arrData = data.split(/\s+/);
      const uniqData = arrData.filter(
        (word, index) => word !== "" && arrData.indexOf(word) === index
      ); //.join(" ")
      return uniqData;
    } catch (error) {
      throw new Error(err);
    }
  }

  static async numOfUniq(file) {
    try {
      const uniqDataLen = (await this.readInUniq(file)).length;
      return uniqDataLen;
    } catch (error) {
      throw new Error(err);
    }
  }

  static async uniqToUpper(file) {
    try {
      const uniqDataUpper = (await this.readInUniq(file))
        .map((word) => word.toUpperCase())
        .join(" ");
      return uniqDataUpper;
    } catch (error) {
      throw new Error(err);
    }
  }

  static async uniqLong(file) {
    try {
      const uniqBig = (await this.readInUniq(file))
        .filter((word) => word.length > 5)
        .join(" ");
      return uniqBig;
    } catch (error) {
      throw new Error(err);
    }
  }

  static async uniqHaevi(file) {
    try {
      const haevi = "haevi";
      const uniqHaevi = (await this.readInUniq(file)).map((word) => {
        return {
          word,
          vowelCount: word.split("").filter((letter) => {
            if (haevi.includes(letter.toLowerCase())) return letter;
          }).length,
        };
      });
      fs.writeFile(
        "C:/Users/yswie/OneDrive/שולחן העבודה/exersize/15/data/text.js",
        JSON.stringify(uniqHaevi),
        (err) => {
          if (err) throw new Error(err);
          console.log("file was update!");
        }
      );
    } catch (error) {
      throw new Error(error);
    }
  }
}
