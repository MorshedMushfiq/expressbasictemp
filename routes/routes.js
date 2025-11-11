const express = require("express");

const multer = require("multer");
// router call
const router = express.Router();

// multer configs
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{ 
        cb(null, Path2D.join(__dirname, "../public/uploads/users"));
    },
    filename: (req, file, cb)=> {
        cb(null, Date.now() + file.originalname);
    }
});

// create middleware
const userPhotoMiddleware = multer({
    storage: storage
}).single("img tag name attr");

// post route
// router.post('/add/new', userPhotoMiddleware, 'controller name or condtiton');










// export 
module.exports = router;