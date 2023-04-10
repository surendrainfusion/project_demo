import mongoose from "mongoose";

//User Schema
const userSchema = new mongoose.Schema({
  date: {type: String },
  name: { type: String, required: true },
  mobileNo: { type: String, required: true },
  email: { type: String, required: true, lowercase: true, unique: true },
  password: { type: String, required: true },
  profile: { type: String },
  updateDate: {type: String },
});

//Post Schema
const postSchema = new mongoose.Schema({
  userId : {type: String },
  date: {type: String },
  title: {type: String },
  description: {type: String },
  like: [],
  comment: [{ comments: String, count: Number }],
  // postedBy: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  // },
});

//export model
export const userModel = mongoose.model("users", userSchema);
export const postModel = mongoose.model("post", postSchema);
