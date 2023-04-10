import multer from "multer";

//storage
const Storage = multer.diskStorage({
    destination:'./src/uploads',
    filename:(req, file, cb)=>{
      cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
    }
  });
  
  export const upload = multer({
    storage: Storage
  }).single('profile')