import '../../../CSS/ChatFooter.css'
import React from 'react'
import { InsertEmoticon, AttachFile, Mic } from '@mui/icons-material';
import { InputBase } from '@mui/material';

function ChatFooter({ value, setValue, handleKeydown }) {

  return (
    <>
      <div className='chatFooter'>
        <InsertEmoticon />
        <AttachFile className='attachfile' />
        <InputBase className='inputbase'
          placeholder='Type a message'
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeydown}
          value={value}
        />
        <Mic className='mic' />
      </div>
    </>
  )
}

export default ChatFooter