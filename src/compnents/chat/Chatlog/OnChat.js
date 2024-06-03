import '../../../CSS/onChat.css'
import React, { useEffect, useState } from 'react'
import ChatFooter from './ChatFooter'
import { selectPerson, selectUser } from '../../../store/userSlice'
import { useSelector } from 'react-redux'
import { getMessages, newMessage } from '../../../services/api'

function OnChat({ conversation }) {

  const [value, setValue] = useState('')

  const sender = useSelector(selectUser)
  const receiver = useSelector(selectPerson)

  useEffect(() => {
    const getAllMessage = async () => {
      console.log(conversation._id)
      let allmsg = await getMessages(conversation._id)
      console.log(allmsg)
    }
    getAllMessage()
  }, [receiver._id])

  const handleKeydown = async (e) => {
    if (e.key === 'Enter') {

      var message = {
        senderId: sender[0].sub,
        receiverId: receiver.sub,
        conversationId: conversation._id,
        type: 'text',
        text: value
      }
      console.log(message)
      setValue('')

      await newMessage(message)
    }
  }

  return (
    <>
      <div className='chatting'>
        <div className="sent">
          {value}
        </div>
      </div>
      <ChatFooter value={value} setValue={setValue} handleKeydown={handleKeydown} />
    </>
  )
}

export default OnChat
