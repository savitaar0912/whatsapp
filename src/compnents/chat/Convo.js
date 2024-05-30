import '../../CSS/Convo.css'
import React from 'react'
import { Divider } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { oneUser, selectPerson, selectUser } from '../../store/userSlice'
import { setConversation } from './../../services/api';

export default function Convo({ acc }) {

    const dispatch = useDispatch()

    const sender = useSelector(selectUser)
    const receiver = useSelector(selectPerson)

    const divid = {
        backgroundColor: '#e9edef',
        opacity: '0.6',
        margin: '0 10px 0 10px'
    }

    const handlePerson = async () => {
        dispatch(oneUser(acc))
        await setConversation({senderId: sender[0].sub , receiverId: receiver.sub})
    }

    return (
        <>
            <div className='box' onClick={() =>  handlePerson()}>
                <div className="dp">
                    <img src={acc.picture} alt="dp" />
                </div>
                <div className='name'>
                    <p>{acc.name}</p>
                </div>
            </div>
            <Divider sx={divid} />
        </>
    )
}
