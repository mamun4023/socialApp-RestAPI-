const router = require('express').Router();
const UserModel = require('../models/user');


// Register
router.post('/register', async (req, res)=>{
    const user = await new UserModel({
        username : "Jhone",
        email : "jhon@gmail.com",
        password : "dfdf343",
    })

    await user.save();
    res.send("ok")
})


module.exports = router;