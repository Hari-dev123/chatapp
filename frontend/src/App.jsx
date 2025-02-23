import React from 'react'
import { Button, HStack } from "@chakra-ui/react"
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Chats from './pages/Chats'
const App = () => {
  return (
    <div>
        <Routes>
             <Route path='/' Component={Home} />
             <Route path='/chats' Component={Chats} />
        </Routes>
    </div>
  )
}

export default App
