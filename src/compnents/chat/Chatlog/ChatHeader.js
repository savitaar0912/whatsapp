import '../../../CSS/ChatHeader.css'
import { Box } from '@mui/material'
import React from 'react'
import { MoreVert, Search } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { selectPerson } from '../../../store/userSlice';

function ChatHeader() {

    const person = useSelector(selectPerson)
    console.log(person)

    return (
        <>
            <Box className='chatHeader'>
                <img className='nameImg' src={person.picture} alt="DP" />
                <div className="userInfo">
                    <p>{person.given_name}</p>
                    <p>Online</p>
                </div>
                <Box className='headerIcons'>
                    <Search />
                    <MoreVert />
                </Box>
            </Box>
        </>
    )
}

export default ChatHeader