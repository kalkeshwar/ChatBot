import { Button, Flex, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'

const Footer = (props) => {

  let {currentMessage,setCurrentMessage,messages,setMessages}=props

  const handleSend=async()=>{
    let newMessage={role:"user",content:`${currentMessage}`}
    setMessages([...messages,newMessage])
    setCurrentMessage("");
    const response= await fetch("http://localhost:3001/send-message",
    {
      method:'POST',
      headers:{
        "Content-Type":"application/json"
        },
      body:JSON.stringify(newMessage)
    })
  }
  
  return (
    <Flex w="90%" justifyContent="space-around" alignItems="center">
        <Textarea placeholder='Ask your questions here' w="90%" mt="1" border="2px" value={currentMessage} onChange={(e)=>setCurrentMessage(e.target.value)}/>
        <Button bg="black" color="white" size="xs" w="70px" h="40px" onClick={handleSend}>Send</Button>
    </Flex>
  )
}

export default Footer