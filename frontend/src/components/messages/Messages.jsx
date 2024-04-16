import React, { useEffect, useRef } from 'react';
import Message from './Message';
import useGetMessages from '../../hooks/useGetMessages.js';
import useListenMessages from '../../hooks/useListenMessages.js';

const Messages = () => {
  const {loading, messages} = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  //console.log(messages);
  return (
    <div className="px-4 flex-1 overflow-auto" style={{ position: 'relative', height: '100%' }}>
      { loading ? (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%'
        }}>
          <div className='flex justify-center items-center'>
            <span className="loading loading-dots loading-lg"></span>
          </div>
        </div>
      ) : (
        messages.length === 0 ? (
          <p className='text-center'>Send a message to start conversation.</p>
        ) : (
          messages.map((message) => (
            <div key={message._id} ref={lastMessageRef}>
              <Message 
                message={message}
              />
            </div>
          ))
        )
      ) }
    </div>
  )
}

export default Messages;