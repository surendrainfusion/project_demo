import { Login } from "../services/userService.js";
import { userModel, postModel } from "../model/index.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import moment from "moment/moment.js";

//current date
let date = moment(new Date()).format("DD/MM/YYYY");

//User Login
export const login = async (req, res) => {
  const body = req.body;
  const data = await Login(body);
  if (data.message) {
    res.status(401).json({
      success: false,
      message: data.message,
    });
  } else if (data && !data.message) {
    const { id, name, email, profile } = data;
    let jwtSecretKey = process.env.jwtSecretKey;
    const token = jwt.sign(
      {
        id,
        name,
        email,
      },
      jwtSecretKey,
      {
        expiresIn: 60 * 60 * 24 * 5,
        algorithm: "HS256",
      }
    );
    res.setHeader("Authorization", "Bearer " + token);

    res.status(200).json({
      success: true,
      message: "Login Successfully",
      id: id,
      name: name,
      email: email,
      profile: profile,
      authorization: token,
    });
  } else {
    res.status(401).json({
      success: false,
      message: "Login failed",
    });
  }
};

//User Register
export const addUser = async (req, res) => {
  const { name, mobileNo, email, password, profile } = req.body;
  const hashedPassword = await bcrypt.hash(password, 7);
  try {
    let userData = new userModel({
      date: `${date}`,
      name: name,
      mobileNo: mobileNo,
      email: email,
      password: hashedPassword,
      profile: profile,
      updateDate: `${date}`,
    });
    const result = await userData.save();
    if (result) {
      res.status(200).json({
        status: "succes",
        message: "User Registration Successfully",
        data: result,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "User Registration Failed",
    });
  }
};

//Update User Record
export const updateUser = async (req, res) => {
  const id = req.params.id;
  const { name, mobileNo, email } = req.body;
  const updateData = {
    name: name,
    mobileNo: mobileNo,
    email: email,
    updateDate: date,
  };
  const result = await userModel.findByIdAndUpdate({ _id: id }, updateData, {
    new: true,
  });
  if (result) {
    res.status(200).json({
      status: "success",
      message: "Record sucessfully updated",
      data: result,
    });
  } else {
    res.status(401).json({
      status: "failed",
      message: "something wrong!",
      error: result.response.error,
    });
  }
};

//Delete User Record
export const deleteUser = async (req, res) => {
  const id = req.params.id;

  const result = await userModel.findByIdAndRemove({ _id: id }, { new: true });
  if (result) {
    res.status(200).json({
      status: "success",
      message: "Record deleted",
    });
  } else {
    res.status(401).json({
      status: "failed",
      message: "something wrong!",
      error: result.response.error,
    });
  }
};

//get single User
export const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    let result = await userModel.find({ _id: id });
    if (result) {
      res.status(200).json({
        status: "success",
        message: "user find successfully",
        data: result,
      });
    }
  } catch (error) {
    res.status(401).json({
      status: "failed",
      message: "user not found",
      error: result.response.error,
    });
  }
};

//get user-list
export const userList = async (req, res) => {
  try {
    let result = await userModel.find();
    res.send(result);
  } catch (error) {
    // console.log(error);
  }
};

//wroking on Add Post
export const addPost = async (req, res) => {
  const { id } = req.user;
  const { title, description, photo} = req.body;
  try {
    console.log("userController Add Post", req.body);
    const postData = new postModel({
      date: `${date}`,
      userId: id,
      title: title,
      description: description,
      photo: photo,
      updateDate: `${date}`,
    });

    let data = await postData.save();
    console.log("data:::", data);
    if (data) {
      res.status(200).json({
        status: true,
        message: "New post created",
        result: data,
      });
      res.send(data);
    }
  } catch (error) {
    res.status(401).josn({
      status: false,
      message: "something wrong! try again",
    });
  }
};

//logout
export const Logout = async (req, res) => {
  await req.session.destroy();
  res.redirect("/");
};
