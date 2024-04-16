import React from 'react';
import { useAuthContext } from '../../context/AuthContext.jsx';
import useConversation from '../../zustand/useConversation.js';
import { extractTime } from '../../../../backend/utils/extractTime.js';

const Message = (props) => {
  const message = props.message;
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? 'chat chat-end' : 'chat chat-start';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePic;
  const bubbleColor = fromMe ? '' : 'bg-slate-700';
  const formattedDate = extractTime(message.createdAt);

  return (
    <div className={chatClassName}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img
                alt="chat bubble component"
                src={profilePic} />
            </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500 ${bubbleColor}`}>{message.message}</div>
        <div className="chat-footer opacity-50">{formattedDate}</div>
    </div>
  )
}

export default Message;