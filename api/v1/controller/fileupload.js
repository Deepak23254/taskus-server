var express = require('express');
var router = express.Router();
const multer = require("multer");
// const upload = multer({ dest: "uploads" });
const maxSize = 2 * 1024 * 1024;
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, Date.now() + '-' + file.originalname);
  },
});
let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).any();

router.post('/',uploadFile,function(req, res, next) {
  console.log(req.files);

  res.json({ message: "Successfully uploaded files",uploadPath: req.files[0]});
});

module.exports = router;