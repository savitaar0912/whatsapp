import React, { useEffect, useState } from 'react'
import { getUsers } from '../../services/api'
import Convo from './Convo'

export default function Conversations() {

  const [account, setAccount] = useState([])

  useEffect(() => {
    const getUser = async () => {
      const acc = await getUsers()
      setAccount(acc)
    }
    getUser()
  }, [])


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
