import React from 'react'
import LoginDialog from './account/LoginDialog';
import { AppBar, Box, Toolbar } from '@mui/material';
import Chatscreen from './chat/Chatscreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Messenger() {

  const appbar = {
    backgroundColor: '#00a884',
    height: '222px',
    boxShadow: 'none'
  }

  return (
    <>
      <Box sx={{height: '100vh' , background: '#d3ede6'}} >
        <AppBar sx={appbar}>
          <Toolbar>
          </Toolbar>
        </AppBar>
        <Router>
          <Routes>
            <Route path='/' element={<LoginDialog/>} />
            <Route path='/chat' element={<Chatscreen/>} />
          </Routes>
        </Router>
      </Box>
    </>
  )
}

export default Messenger
