import express from "express";
import { checkvalidData } from "../middleware/validation.js";
import { checkToken } from "../middleware/tokenVerify.js";
import {
  login,
  addUser,
  updateUser,
  deleteUser,
  getUser,
  userList,
  addPost,
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
router.post("/post/add", checkToken, addPost);

//logout api
router.get("/logout", Logout);


//image upload
import { File } from "../model/index.js";
import upload from "../middleware/upload.js";
router.post('/upload', upload.single('file'), (req, res, next) => {
  console.log("request", req.file);
  const file = new File({
    name: req.file.originalname,
    path: req.file.path,
    size: req.file.size,
    type: req.file.mimetype
  });

  file.save((err) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    res.status(201).json({ message: 'File uploaded successfully' });
  });
});
