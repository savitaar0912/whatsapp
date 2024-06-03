import '../../../CSS/ChatFooter.css'
import React, { useState } from 'react'
import { InsertEmoticon, AttachFile, Mic } from '@mui/icons-material';
import { InputBase } from '@mui/material';

function ChatFooter() {


  const [text, settext] = useState('')

  return (
    <>
      <div className='chatFooter'>
        <InsertEmoticon />
        <AttachFile className='attachfile' />
        <InputBase className='inputbase'
          placeholder='Type a message'
          value={text}
          onChange={(e)=>settext(e.target.value)}
        />
        <Mic className='mic' />
      </div>
    </>
  )
}

export default ChatFooter