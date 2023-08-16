import userRepository from "../dal/userRepository.js";
import { hash } from "bcrypt";
import joi from "joi";

const userSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().min(8).required(),
});

const createUser = async (user) => {
  const { error } = userSchema.validate(user);
  if (error) {
    throw new Error(`Validation error: ${error.details[0].message}`);
  }

  const hashedPassword = await hash(user.password, 10);
  user.password = hashedPassword;

  return userRepository.createUser(user);
};

const getUser = async (userId) => {
  return userRepository.getUser(userId);
};

const getAllUsers = async () => {
  return userRepository.getAllUsers();
};

const updateUser = async (userId, updatedUser) => {
  return userRepository.updateUser(userId, updatedUser);
};

const deleteUser = async (userId) => {
  return userRepository.deleteUser(userId);
};



export default {
  createUser,
  getUser,
  getAllUsers,
  updateUser,
  deleteUser

  
};
