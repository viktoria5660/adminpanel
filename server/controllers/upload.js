const router = require('express').Router(),
path = require('path'),
multer = require('multer')
    const DIR = './uploads/';
    var upload = multer({dest: DIR}).single('photo');


router.post('/testupload', function (req, res, next) {
    var path = '';
    upload(req, res, function (err) {
       if (err) {
         // An error occurred when uploading
         console.log(err);
         return res.status(422).send("an Error occured")
       }  
      // No error occured.
       path = req.file.path;
       return res.send("Upload Completed for "+path); 
 });     
})