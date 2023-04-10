import mongoose from "mongoose";

const conncetDB = async (url) => {
  await mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("db connect successfully"))
    .catch((err) => console.log("Error:" ,err));
};

export default conncetDB;