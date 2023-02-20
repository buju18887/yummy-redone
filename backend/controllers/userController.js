const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const registerUser = asyncHandler(async(req, res) => {
    const {name, email, password, age, country} = req.body

    if(!name || !email || !password || !age || !country) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    const userExists = await User.findOne({email})

    if(userExists) {
        res.status(401)
        throw new Error('User already exists')
    }

    //hash password
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)

    //create user
    const user = await User.create({
        name,
        email,
        password: hashPassword,
        age,
        country
    })
    
    if(user) {
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(404)
        throw new Error('Invalid User data')
    }

})

const loginUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body

    //check for user email
    const user = await User.findOne({email})

    const userPassword = await bcrypt.compare(password, user.password)

    if(user && userPassword) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)  
        })
    } else {
        res.status(400)
        throw new Error('Invalid Credentials')
    }
})

//generate JWT
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

module.exports = {
    registerUser,
    loginUser,
}