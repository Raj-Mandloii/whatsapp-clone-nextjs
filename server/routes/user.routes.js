


const express = require("express");
const { addUser } = require("../Controller/user_controller");

const userController = express.Router();

// const {addUser} = require("../Controller/user_controller.js")


userController.post("/add",addUser)



module.exports = {
    userController
}


