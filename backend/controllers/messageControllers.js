import Message from "../models/messageModel.js";
import Conversation from "../models/conversationModel.js"; 

export const sendMessage = async (req, res) => {
    try {
        const {message} = req.body;
        const {id: receiverId} = req.params;
        const senderId = req.user._id;
        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]},
        });
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
                // message default: []
            })
        }
        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });
        if (newMessage) {
            conversation.messages.push(newMessage._id); // save the message id to the conversation between two users
        }
        // socket io functionalities here

        // await newMessage.save();
        // await conversation.save();
        await Promise.all([conversation.save(), newMessage.save()]); // two processes run in parallel
        res.status(201).json(newMessage);
    } catch (error) {
        console.log("Error in sendMessage controller: ", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
};

export const getMessages = async (req, res) => {
    try {
        const senderId = req.user._id;
        const userToChatId = req.params.id;
        const conversation = await Conversation.findOne({
            participants: {$all: [senderId, userToChatId]},
        }).populate({
            path: 'messages',
            populate: { path: 'senderId' }
        });

        if(!conversation) return res.status(200).json([]);
        const messages = conversation.messages;
        res.status(200).json(messages);
    } catch (error) {
        console.log("Error in getMessage controller: ", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}