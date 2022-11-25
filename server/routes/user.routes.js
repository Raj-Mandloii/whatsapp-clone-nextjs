


const express = require("express");
const { newConversation,getConversation } = require("../Controller/conversation");
const { newMessage } = require("../Controller/message_controller");
const { addUser ,getUser} = require("../Controller/user_controller");

const userController = express.Router();

// const {addUser} = require("../Controller/user_controller.js")


userController.post("/add",addUser)
userController.get("/user",getUser)
userController.post('/conversation/add',newConversation)
userController.post("/conversation/get",getConversation)
userController.post("/message/add",newMessage)


module.exports = {
    userController
}


 