


const express = require("express");
const { addUser ,getUser} = require("../Controller/user_controller");

const userController = express.Router();

// const {addUser} = require("../Controller/user_controller.js")


userController.post("/add",addUser)
userController.get("/user",getUser)



module.exports = {
    userController
}


