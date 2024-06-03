import React, { useEffect, useState } from 'react'
import ChatHeader from './ChatHeader';
import OnChat from './OnChat';
import { Box } from '@mui/material';
import { selectPerson, selectUser } from '../../../store/userSlice';
import { useSelector } from 'react-redux';
import { getConversation } from '../../../services/api';

function ChatBox() {

  const [conversation, setConversation] = useState(null)

  const sender = useSelector(selectUser)
  const receiver = useSelector(selectPerson)

  useEffect(() => {
    const getConversationDetails = async () => {
      if (receiver) {
        const data = await getConversation({ senderId: sender[0].sub, receiverId: receiver.sub });
        console.log(data);
        setConversation(data);
      }
    };
    getConversationDetails();
  }, [receiver]);

  return (
    <Box style={{ height: '100vh' }}>
      <ChatHeader />
      {conversation && <OnChat conversation={conversation} />}
    </Box>
  )
}

export default ChatBox
