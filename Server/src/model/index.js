import mongoose from "mongoose";

//User Schema
const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  date: { type: String },
  username: { type: String, required: true },
  mobileNo: { type: String, required: true },
  email: { type: String, required: true, lowercase: true, unique: true },
  password: { type: String, required: true },
  image: { type: String },
  updateDate: { type: String },
});

//Post Schema
const postSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  date: { type: String },
  userId: { type: String },
  title: { type: String },
  description: { type: String },
  photo: { type: String },
  updateDate: { type: String },
});

//Comment Schema
const commentSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userId: { type: String },
  postId: { type: String },
  comment: { type: String },
});

//post like schema
const likeSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userId: { type: String },
  postId: { type: String },
  like: [],
});

//upload image
const fileSchema = new mongoose.Schema({
  name: String,
  path: String,
  size: Number,
  type: String
});

export const File = mongoose.model('Files', fileSchema);
//export model
export const userModel = mongoose.model("users", userSchema);
export const postModel = mongoose.model("posts", postSchema);
export const likeModel = mongoose.model("likes", likeSchema);
export const commentModel = mongoose.model("comments", commentSchema);
