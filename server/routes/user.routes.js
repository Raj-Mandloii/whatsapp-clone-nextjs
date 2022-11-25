


const express = require("express");
const { newConversation,getConversation } = require("../Controller/conversation");
const { newMessage, getMessages } = require("../Controller/message_controller");
const { addUser ,getUser} = require("../Controller/user_controller");

const userController = express.Router();

// const {addUser} = require("../Controller/user_controller.js")


userController.post("/add",addUser)
userController.get("/user",getUser)
userController.post('/conversation/add',newConversation)
userController.post("/conversation/get",getConversation)
userController.post("/message/add",newMessage)
userController.get("/message/get/:id",getMessages)


module.exports = {
    userController
}


 