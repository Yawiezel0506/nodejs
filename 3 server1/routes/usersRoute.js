import express from "express";
import userController from "../controllers/userControllers.js"
const router = express.Router();

router.get("/", userController.getAllUsers)

router.get("/:id", userController.getUser)

router.post("/users", userController.createUser);

router.put("/:id", userController.updateUser)

router.delete("/:id", userController.deleteUser)

export default router 
