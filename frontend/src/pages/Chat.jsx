import React ,{useState} from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ChatDivison from '../components/ChatDivison'
import DividerLine from '../components/DividerLine'
import { Flex } from '@chakra-ui/react'

const Chat = () => {

  let [messages,setMessages]=useState([
  {
    role:"assistant",
    content:"Hi,This is ChatBot by OpenAI"
  },
  {
    role:"assistant",
    content:"I hope your day is good"
  },
  {
    role:"assistant",
    content:"Hey! You can Ask anything here ,I will try my level best to give the Solutions."
  },
])

const [currentMessage,setCurrentMessage]=useState("")
let [isTying,setIsTyping]=useState(false)

  return (
    <Flex w="100%" h="100vh" flexDirection="column">
        <Header />
        <DividerLine/>
        <ChatDivison messages={messages} setMessages={setMessages} currentMessage={currentMessage} isTyping={isTying}/>
        <DividerLine/>
        <Footer setMessages={setMessages} currentMessage={currentMessage} setCurrentMessage={setCurrentMessage} isTyping={isTying} setTyping={setIsTyping}/>
    </Flex>
  )
}

export default Chat