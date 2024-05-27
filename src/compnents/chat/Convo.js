import '../../CSS/Convo.css'
import React from 'react'
import { Divider } from '@mui/material'
import { useDispatch } from 'react-redux'
import { oneUser } from '../../store/userSlice'

export default function Convo({ acc }) {

    const dispatch = useDispatch()

    const divid = {
        backgroundColor: '#e9edef',
        opacity: '0.6',
        margin: '0 10px 0 10px'
    }

    const handlePerson = () => {
        dispatch(oneUser(acc))
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
