import User from "../models/userModel.js";
import Conversation from "../models/conversationModel.js";


export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        // finding all user in the database except for the logged in user
    
        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
        res.status(200).json(filteredUsers);
        
        // Below are the modified code to only select users that are friends with currently logged in user
        // const allConversations = await Conversation.find({ participants: loggedInUserId })
        // .sort({ updatedAt: -1 }).populate("participants");
        // const allFriends = [];
        // allConversations.forEach(conversation => {
        //     conversation.participants.forEach(participant => {
        //         console.log(participant._id);
        //         if (participant._id.toString() !== loggedInUserId.toString()) {
        //             allFriends.push(participant);
        //         }
        //     })
        // });
        // res.status(200).json(allFriends);
        
    } catch (error) {
        console.log("Error in getUsersForSidebar controller: ", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
};