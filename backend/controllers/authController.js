const User=require('../models/User');

const jwt = require("jsonwebtoken");

//generate jwtToken
const generateToken = (id) => {
    return jwt.sign({
        id

    }, process.env.JWT_SECRET, { expiresIn: "1h" });

}

//register user
exports.registerUser = async (requestAnimationFrame, res) => {

};
//login user
exports.loginUser = async (requestAnimationFrame, res) => {

};
//getUserInfo user
exports.getUserInfo = async (requestAnimationFrame, res) => {


};