import '../../../CSS/onChat.css'
import React from 'react'
import ChatFooter from './ChatFooter'

function OnChat() {
  return (
    <>
      <div className='chatting'>
        <div className="sent">
          Ongoing chat
        </div>
      </div>
      <ChatFooter/>
    </>
  )
}

export default OnChat
