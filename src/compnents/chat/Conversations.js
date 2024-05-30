import React, { useEffect, useState } from 'react'
import { getUsers } from '../../services/api'
import Convo from './Convo'

export default function Conversations({text}) {

  const [account, setAccount] = useState([])

  useEffect(() => {
    const getUser = async () => {
      const acc = await getUsers()
      const filteredData = acc.filter(user => user.name.toLowerCase().includes(text.toLowerCase()))
      setAccount(filteredData)
    }
    getUser()
  }, [text])


  return (
    <div>
      {
        account.map(acc => (
          <Convo acc={acc} key={acc._id} />
        ))
      }
    </div>
  )
}
