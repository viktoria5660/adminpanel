const UserModel = require('../models/User')

module.exports = {
    //add all counter to 0 
    async register (name, lastName, email, group, password,correctAns, countOfcorrectAns, incorrectAns , difficulty,isAdmin, coins, company) {
        let user = new UserModel({
            name,
            lastName,
            email,
            group,
            password,
            company,
            correctAns, 
            countOfcorrectAns, 
            incorrectAns , 
            difficulty,
            isAdmin,
            coins
        })

        try {
            // console.log("INSIDE REG FUN:",company)
            await user.save()
        } catch (err) {

            console.log(err)
            return err
        }

        return user
    },

    login (email, password) {
        // console.log("INSIDE LOGIN:", email)
        // console.log("INSIDE LOGIN:", password)
        var password2 = password
        return new Promise ((resolve, reject) => {
        
            UserModel.findOne({ email })
                .then(user => {
                    user.comparePassword(password2, (err, match) => {
                        resolve(match)
                    })
                })
                .catch(err => reject(err))
            })

    },
    async mailExists (email) {

        let user, exists

        try {
            user = await UserModel.find({ email })
        } catch (err) {
            console.log(err)
        }

        exists = (user.length > 0 && user[0].email.toString() === email) ? true : false
        return exists

    }

}