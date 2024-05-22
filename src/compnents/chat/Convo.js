import '../../CSS/Convo.css'
import React from 'react'
import { Divider } from '@mui/material'

export default function Convo({ acc }) {

    const divid = {
        backgroundColor: '#e9edef',
        opacity: '0.6',
        margin: '0 10px 0 10px'
    }

    return (
        <>
            <div className='box'>
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
