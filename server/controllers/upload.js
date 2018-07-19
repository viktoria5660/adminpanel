// const router = require('express').Router(),
// path = require('path'),
// multer = require('multer')
//     const DIR = './uploads';
//    let storage = multer.diskStorage({
//        destination: (req, file, cb) => {
//          cb(null, DIR);
//        },
//        filename: (req, file, cb) => {
//          cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
//        }
//    });
//    let upload = multer({storage: storage});


//    router.post('/api/upload',upload.single('photo'), function (req, res) {
//     if (!req.file) {
//         console.log("No file received");
//         return res.send({
//           success: false
//         });
    
//       } else {
//         console.log('file received');
//         return res.send({
//           success: true
//         })
//       }
// });