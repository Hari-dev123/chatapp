const express = require('express');
const dotenv  = require('dotenv');
const chats = require('./data/data');
const cors = require('cors');
dotenv.config()
const app = express();
app.use(cors())
app.get('/',(req,res)=>{
      res.send('API is running....')
})

app.get('/chats',(req,res)=>{
    res.send(chats)
})

app.get('/chats/:id',(req,res)=>{
    const id = req.params.id;
    const chat = chats.find(c=>c._id === id);
     if(chat){
        res.send(chat)
     }
    
    })

const port = process.env.PORT;

app.listen(port,()=>{
    console.log(`${port} is running`);
    
})