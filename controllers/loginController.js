
const asyncHandler = require("express-async-handler")
const User = require('../models/userModel')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const generateToken = ('../middleware/authentication')


const loginUser = asyncHandler(async (req, res) => {
     const {email, password} = req.body;
     if(!email || ! password){
        res.status(400)
        throw new Error("All fields are mandatory")
     }
     const user = await User.findOne({email})
     if(user && (await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign({
            user:{
                username: user.username,
                email: user.email,
                userRole: user.userRole,
                id: user.id
            }
        }, process.env.SECRET_KEY,
        {expiresIn:"1h"}
        )
        res.status(200).json({accessToken, user})
     }else{
        res.status(401)
        throw new Error("Email or password invalid")
     }
})

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body
    if (!username || !email || !password) {
        res.status(400)
        throw new Error("All fields are mandatory!")
    }
    const userAvailable = await User.findOne({ email })
    if (userAvailable) {
        res.status(400)
        res.json({message:"User Already registered"})
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log(hashedPassword)

    const user = await User.create({
        username,
        email,
        userRole : "Intern",
        password: hashedPassword
    })
    console.log(`User Created Successfully`)
    if (user) {
        res.status(201).json({ _id: user.id, email: user.email })
    } else {
        res.status(400)
        throw new Error({ message: "Register the user" })
    }

    res.json({ message: "register user" })
})
const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user)
})






module.exports = { loginUser, registerUser, currentUser };