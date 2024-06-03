import '../../CSS/Header.css'
import React from 'react'
import { selectUser } from '../../store/userSlice'
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { ChatBubble , History} from '@mui/icons-material';
import Moreoptions from './MoreOptions';

export default function Header() {

  const user = useSelector(selectUser);
  // console.log(user)
  // console.log(user[0])
  const GImage = user[0].picture

  return (
    <>
      <Box className='header'>
        <img className='gimg' src={GImage} alt="DP" />
        <Box className='icons'>
          <History/>
          <ChatBubble/>
          <Moreoptions/>
        </Box>
      </Box>
    </>
  )
}
