const db = require('./helpers/database')
const UserModel = require('./models/User')


let user = new UserModel({
    name: "viki", 
    lastName: "last test",
    email: "viki@gmail.com",
    group: "viki", // TODO: fix to objectid
    password: "v",
    correctAns : [],
    countOfcorrectAns : 0 ,
    company : "viki",
    incorrectAns: [],
    difficulty: 1,
    isAdmin : false,
    coins : 15000,
    accessToken: "ghfkdjgkf" 
})

user.save()
    .then(doc => {
        console.log(doc)
    })
// let qid = '5b3f100ebf3bc206f822d89d'
// let USER =  UserModel.findOne(  
//     // query
//     {email:"vER@gmail.com"},
//     // callback function
//     (err, user) => {
//         if (err) return res.status(304).send(err)
//         return res.status(200).send(user)
//     }
// );
// USER.incorrectAns.filter(function(obj) {
//     return USER.incorrectAns.indexOf(obj.questionId) ===qid;
// });
// // USER.incorrectAns.remove (function (el){return el.questionId === qid});