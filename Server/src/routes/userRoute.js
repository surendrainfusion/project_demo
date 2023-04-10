import express from "express";
import { checkvalidData } from "../middleware/validation.js";
import {
  login,
  addUser,
  updateUser,
  deleteUser,
  getUser,
  userList,
  Logout,
} from "../controller/userController.js";

export const router = express.Router();

//login api
router.post("/login", checkvalidData("login"), login);

//user api
router.post("/user/add", addUser);
router.put("/user/update/:id", updateUser);
router.delete("/user/delete/:id", deleteUser);
router.get("/user/get/:id", getUser);
router.get("/user/list", userList);

//user post api
// router.post('/addPost',addPost)

//logout api
router.get("/logout", Logout);
