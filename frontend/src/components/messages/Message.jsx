import React from 'react';
import useConversation from '../../zustand/useConversation.js';

const Message = (props) => {
  const message = props.message;
  const {selectedConversation} = useConversation();
  const sender = message.senderId._id === selectedConversation._id ? "chat chat-start" : "chat chat-end";
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');
    return `${month}-${day} ${hour}:${minute}`;
  };
  const formattedDate = formatDate(message.createdAt);
  return (
    <div className={sender}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img
                alt="chat bubble component"
                src={message.senderId.profilePic} />
            </div>
        </div>
        <div className="chat-bubble text-white bg-blue-500">{message.message}</div>
        <div className="chat-footer opacity-50">{formattedDate}</div>
    </div>
  )
}

export default Message;