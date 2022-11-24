


const express = require("express");
const { newConversation } = require("../Controller/conversation");
const { addUser ,getUser} = require("../Controller/user_controller");

const userController = express.Router();

// const {addUser} = require("../Controller/user_controller.js")


userController.post("/add",addUser)
userController.get("/user",getUser)
userController.post('/conversation/add',newConversation)



module.exports = {
    userController
}


