import React from 'react';
import Conversation from './Conversation.jsx';

const Conversations = () => {
  return (
    <div className="pt-0 mt-0 mb-3 flex flex-col overflow-auto">
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
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