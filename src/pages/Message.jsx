import React, { useEffect, useState } from 'react'
import { io } from "socket.io-client";
import ReactAudioPlayer from 'react-audio-player';
import audio from '../audio/audio1.wav'
const socket= io.connect('http://localhost:3001')

const Message = () => {
  const [message,setMessange]=useState('')
  const [messages,setMessanges]=useState('')
  const [room,setRoom]=useState('')


  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendMessage= ()=>{
    socket.emit("send_messange",{message, room})
   
    
    
    }
    
    useEffect(()=>{
    socket.on('recied', (data)=>{
    alert('you have a notification')
    setMessanges(data.message)
    
    })
    },[socket])
    
  return (
    <>
     <input
        placeholder="Room Number..."
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      />
      <button onClick={joinRoom}> Join Room</button>
    <input type="text" onChange={(e)=>setMessange(e.target.value)} />
    <button onClick={sendMessage}>Submit</button>
    <p>Messange:{messages}</p>
    
    </>
  )
}

export default Message