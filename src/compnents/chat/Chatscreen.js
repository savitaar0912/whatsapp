import '../../CSS/Chatscreen.css'
import { Box, Dialog } from '@mui/material'
import React from 'react'
import Menu from './Menu';
import ChatBox from './Chatlog/ChatBox';
import Chats from './Chats';
import { selectPerson } from '../../store/userSlice';
import { useSelector } from 'react-redux';
function Chatscreen() {

  const dialog = {
    height: '100%',
    width: '100%',
    maxHeight: '100%',
    maxWidth: '100%',
    boxShadow: 'none',
    overFlow: 'hidden',
    margin: '0px',
  };

  const person = useSelector(selectPerson)

  return (
    <Dialog 
    open={true} 
    PaperProps={{sx: dialog}}
    hideBackdrop={true}
    maxWidth={'md'}
    >
      <Box className='outer' >
        <Box className='left'>
          <Menu/>
        </Box>
        <Box className='right'>
          {person.length===0 ? <Chats/> : <ChatBox/>}
        </Box>
      </Box>
    </Dialog>
  )
}

export default Chatscreen
