import '../../CSS/Chatscreen.css'
import { Box, Dialog } from '@mui/material'
import React from 'react'
import Chats from './Chats';
import Menu from './Menu';

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
          <Chats/>
        </Box>
      </Box>
    </Dialog>
  )
}

export default Chatscreen
