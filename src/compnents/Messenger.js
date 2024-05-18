import React from 'react'
import LoginDialog from './account/LoginDialog';
import { AppBar, Box, Toolbar } from '@mui/material';
import Chatscreen from './chat/Chatscreen';
import { useSelector } from 'react-redux';
import { selectUser } from '../store/userSlice';

function Messenger() {

  const accounts = useSelector(selectUser)
  // console.log(accounts)

  const appbar = {
    backgroundColor: '#00a884',
    height: '222px',
    boxShadow: 'none'
  }

  return (
    <>
      <Box sx={{ height: '100vh', background: '#d3ede6' }} >
        {accounts.length > 0 ? <Chatscreen /> :
          <>
            <AppBar sx={appbar}>
              <Toolbar>
              </Toolbar>
            </AppBar>
            <LoginDialog />
          </>
        }
      </Box>
    </>
  )
}

export default Messenger
