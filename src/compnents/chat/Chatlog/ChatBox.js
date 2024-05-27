import React from 'react'
import ChatHeader from './ChatHeader';
import ChatFooter from './ChatFooter';
import OnChat from './OnChat';
import { Box } from '@mui/material';

function ChatBox() {
  return (
    <Box style={{height: '100vh'}}>
      <ChatHeader />
      <OnChat/>
      <ChatFooter />
    </Box>
  )
}

export default ChatBox
