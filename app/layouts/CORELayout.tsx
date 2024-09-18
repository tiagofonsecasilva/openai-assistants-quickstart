import React, { useEffect, useState } from 'react'
import { GlobalProvider, useGlobalContext } from '../contexts/GlobalContext';

export const CORELayout = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const { state, setState, setMessages} = useGlobalContext();

    const  threadId = "thread_pav7M4xu6KuKuDTa7dbho8fn";

    useEffect(() => {
        setLoading(true);
        setState({
            threadId: threadId,
        });
    }, []);

    useEffect(() => {
      const fetchMessages = async () => {
        const response = await fetch(`/api/assistants/threads/${threadId}/messages`, {
          method: "GET",
        });
        const data = await response.json();
        setMessages(data?.data)
      };
      fetchMessages();
    }, []);

    return (
      children
    )
}