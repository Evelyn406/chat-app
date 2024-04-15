import React, { useState, useEffect } from 'react';
import toast from "react-hot-toast";

const useGetMessages = (id) => {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getMessages = async () => {
        setLoading(true);
        try {
            const res = await fetch(`/api/messages/${id}`, {
                method: 'GET', // or 'POST', etc., depending on API requirements
                headers: {
                  'Content-Type': 'application/json',
                  // 'Authorization': 'Bearer your_token_here', if needed
                }
              });
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            setMessages(data);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }
    if (id) {
        getMessages(id);
    }
  }, [id]);
  return {loading, messages};
}

export default useGetMessages;