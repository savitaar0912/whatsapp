import React, { useState } from 'react'
import Header from './Header'
import Searchbar from './Searchbar'
import Conversations from './Conversations';

function Menu() {

  const [text, setText] = useState("")

  return (
    <>
      <Header />
      <Searchbar setText={setText} />
      <Conversations text={text} />
    </>
  )
}

export default Menu
