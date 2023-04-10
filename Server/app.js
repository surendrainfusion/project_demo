import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
// import fileUpload from "express-fileupload";
import dotenv from 'dotenv';
import path from 'path';
const app = express();

//.env file config
const dname = new URL('.', import.meta.url).pathname;
dotenv.config({ path: path.resolve(dname, '.env') });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.use(cookieParser())
//json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Database connection
import conncetDB from "./src/config/dbconfig.js";
const url = `mongodb+srv://surendrakg:cW2bSx1xAzgJZaYM@cluster0.utz6eem.mongodb.net/infusion_info?retryWrites=true&w=majority`;
conncetDB(url);

//routes
import {router} from "./src/routes/userRoute.js";
app.use("/api", router);

// app.get("/", (req, res) => {
//   res.send({ message: "Welcome to infusion application." });
// });

//server
const port = process.env.PORT || "8000";
app.listen(port, () =>
  console.log(`server is running on http://localhost:${port}`)
);
