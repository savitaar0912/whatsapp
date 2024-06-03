import React from 'react'
import ChatHeader from './ChatHeader';
import OnChat from './OnChat';
import { Box } from '@mui/material';

function ChatBox() {
  return (
    <Box style={{height: '100vh'}}>
      <ChatHeader />
      <OnChat/>
    </Box>
  )
}

export default ChatBox
