import { userModel } from "../model/index.js";
import bcrypt from "bcryptjs";

export const Login = async (body) => {
  let errorResponse = {};
  const result = await userModel.findOne({ email: body.email });
  if (!result) {
    errorResponse.message = "Username does not exits";
    return errorResponse;
  } else {
    const { password } = result;
    const hasPass = await bcrypt.compare(body.password, password);
    // console.log("hasps::", hasPass);
    if (hasPass) {
      return result;
    } else {
      errorResponse.message = "Password does not match";
      return errorResponse;
    }
  }
};

// logout
export const logout = async (session) => {
  return session.destroy();
};
