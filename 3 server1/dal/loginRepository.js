import fs from "fs/promises";

const USERS_FILE_PATH = "./db/users.json";

const readUsersFromFile = async () => {
  const data = await fs.readFile(USERS_FILE_PATH, "utf8");
  return JSON.parse(data);
};

const checkEmailAndPass = async ({email}) => {
  const users = await readUsersFromFile();
  return users.find((user) => user.email == email);
};

export default {
  checkEmailAndPass,
};
