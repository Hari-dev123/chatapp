import axios from 'axios'
import { p } from 'framer-motion/client'
import React, { useEffect, useState } from 'react'

const Chats = () => {
    const [chats,setChats] = useState([])
 const FetchData = async()=>{
     const datas = await axios.get('http://localhost:4000/chats');
     setChats(datas.data);
     console.log(datas.data);
     
 }
 useEffect(()=>{
        FetchData();
 },[])
  return (
    <div>
       {chats.map(c=>{
          return <p key={c._id}>{c.chatName}</p>
       })}
    </div>
  )
}

export default Chats
