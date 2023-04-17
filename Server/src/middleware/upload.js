import multer, { diskStorage } from 'multer';

const storage = diskStorage({
  destination: function (req, file, cb) {
    cb(null, '.public/uploads/');
  },
  filename: function (req, file, cb) {
    console.log("file", file);
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const upload = multer({ storage: storage });

export default upload;