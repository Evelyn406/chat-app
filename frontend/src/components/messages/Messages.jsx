import React from 'react';
import Message from './Message';
import useConversation from '../../zustand/useConversation.js';
import useGetMessages from '../../hooks/useGetMessages.js';

const Messages = () => {
  const {selectedConversation} = useConversation();
  const {loading, messages} = useGetMessages(selectedConversation._id);
  console.log({messages});
  return (
    <div className="px-4 flex-1 overflow-auto">
      {messages.map((message) => (
        <Message 
        key={message._id}
        message={message}/>
      ))}
        {loading ? (
        <span className='loading loading-spinner mx-auto'></span>
      ) : (
        null
      )}
    </div>
  )
}

export default Messages;