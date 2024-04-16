import React from 'react';
import Conversation from './Conversation.jsx';
import useGetConversations from '../../hooks/useGetConversations.js';

const Conversations = () => {
  const {loading, conversations} = useGetConversations();
  //console.log("conversations");
  return (
    <div className="pt-0 mt-0 mb-3 flex flex-col overflow-auto">
      {conversations.map((conversation, idx) => (
          <Conversation 
          key={conversation._id}
          conversation={conversation}
          lastIndex={idx===(conversations.length-1)}
          />
        ))}
      {loading ? (
        <span className='loading loading-spinner mx-auto'></span>
      ) : (
        null
      )}
    </div>
  )
}

export default Conversations;

// starter code
// const Conversations = () => {
//     return (
//       <div className="py-0 mt-0 flex flex-col overflow-auto">
//           <Conversation />
//           <Conversation />
//       </div>
//     )
//   }