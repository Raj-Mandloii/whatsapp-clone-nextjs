const { ConversationModel } = require("../Modal/Conversation");


const newConversation = async (req,res)=>{
    try{
        const sender = req.body.senderId
        const receiver = req.body.receiverId;
        const exist = await ConversationModel.findOne({
            members: {$all : [receiver,sender]}
        });

        if(exist){
            return res.status(200).json("conversation already exist")
        } 

        const newConversation = new ConversationModel({
            members : [receiver,sender]
        })
        await  newConversation.save();
        return res.status(200).json("conversation saved")
    } catch (e){
        return res.status(500).json(e.message)
    }


}


module.exports = {
    newConversation
}