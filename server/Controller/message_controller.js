const { ConversationModel } = require("../Modal/Conversation");
const { MessageModel } = require("../Modal/Message")


const newMessage = async (req,res)=>{
    try {
        const newMessage = new MessageModel(req.body);
        await newMessage.save();
        await ConversationModel.findByIdAndUpdate(req.body.conversationId,{message: req.body.text})
        res.status(200).json("Message has been sent successfully")
    }
    catch (error){
        res.send(500).json(error.message)
    }

}

const getMessages = async (req,res) =>{
    
}

module.exports = {
    newMessage
}