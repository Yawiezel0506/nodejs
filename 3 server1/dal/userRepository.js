import fs from "fs/promises"; // Using promises version of fs
import {v4} from "uuid"

const USERS_FILE_PATH = "./db/users.json";

const readUsersFromFile = async () => {
  const data = await fs.readFile(USERS_FILE_PATH, "utf8");
  return JSON.parse(data);
};

const writeUsersToFile = async (users) => {
  const updatedDataJSON = JSON.stringify(users);
  await fs.writeFile(USERS_FILE_PATH, updatedDataJSON, "utf8");
};

const createUser = async (user) => {
  const users = await readUsersFromFile();
  user.id = v4();
  users.push(user);
  await writeUsersToFile(users);
  return user;
};

const getUser = async (userId) => {
  const users = await readUsersFromFile();
  return users.find((user) => user.id == userId);
};

const getAllUsers = async () => {
  const users = await readUsersFromFile();
  return users;
};

const updateUser = async (userId, updatedUser) => {
  const users = await readUsersFromFile();
  const userIndex = users.findIndex((user) => user.id == userId);

  if (userIndex === -1) {
    return null;
  }

  users[userIndex] = { ...users[userIndex], ...updatedUser };
  await writeUsersToFile(users);

  return users[userIndex];
};

const deleteUser = async (userId) => {
  const users = await readUsersFromFile();
  const userIndex = users.findIndex((user) => user.id == userId);

  if (userIndex === -1) {
    return null;
  }

  const deletedUser = users.splice(userIndex, 1)[0];
  await writeUsersToFile(users);

  return deletedUser;
};

export default {
  createUser,
  getUser,
  getAllUsers,
  updateUser,
  deleteUser
};
