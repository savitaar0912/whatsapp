import '../../CSS/Chats.css'
import React from 'react'
import { emptyChatImage } from '../../constants/data'

function Chats() {
  return (
    <div className='chatright'>
      <img src={emptyChatImage} alt="" />
      <div className="download">
        <h1>
          Download WhatsApp for Windows.
        </h1>
        Make calls, share your screen and get a faster experience when you download the Windows app.
      </div>
    </div>
  )
}

export default Chats
