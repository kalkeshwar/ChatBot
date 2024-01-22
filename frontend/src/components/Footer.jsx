import { Button, Flex, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'

const Footer = (props) => {

  let {currentMessage,setCurrentMessage,setMessages,setTyping,isTyping}=props

  const handleSend=async()=>{
    const control=new AbortController()
    let newMessage={role:"user",content:`${currentMessage}`}
    setMessages((prevmessage)=>[...prevmessage,newMessage])
    setCurrentMessage("");
    const body=JSON.stringify(newMessage)
    setTyping(true)
    const response= await fetch("http://localhost:3001/send-message",
    {
      method:'POST',
      headers:{
        "Content-Type":"application/json"
        },
      body:body
    },{signal:control})
    const res = await response.json();
    setTyping(false)
    if(res.success){
      setMessages((prev)=>[...prev,{role:"assistant",content:res.data}]);
    }else{
      setMessages((prev)=>[...prev,{role:"assistant",content:res.error}]);
    }
    
  }
  
  return (
    <Flex w="90%" justifyContent="space-around" alignItems="center">
        <Textarea placeholder='Ask your questions here' w="90%" mt="1" border="2px" value={currentMessage} onChange={(e)=>setCurrentMessage(e.target.value)}/>
        <Button bg="black" color="white" size="xs" w="70px" h="40px" m="2" isDisabled={isTyping} onClick={handleSend}>Send</Button>
    </Flex>
  )
}

export default Footer