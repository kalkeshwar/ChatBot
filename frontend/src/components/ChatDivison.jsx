import { Flex, Text } from '@chakra-ui/react'
import React, { useEffect,useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


const ChatDivison = (props) => {
    
    const {messages,currentMessage,setMessages,isTyping}=props
    const chatContainerRef = useRef(null);

  // Scroll to the bottom of the chat container when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Flex w="100%" h="75%" flexDirection="column" position="relative">
        <Flex w="100%" h="95%" flexDirection="column" scrollBehavior="smooth" overflowY="scroll" ref={chatContainerRef} >
            {messages.map((message,index)=>
                message.role=="user"
                ?(
                    <Flex w="100%" justify="flex-start">
                        <Flex key={index} maxWidth="75%" flexWrap="wrap" bg="black" color="white" m="1" p="2" minWidth="300px">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                               {message.content}
                            </ReactMarkdown>
                        </Flex>
                    </Flex>
                    
                )
                :(
                    <Flex w="100%" justifyContent='flex-end'>
                        <Flex key={index} maxWidth="75%" flexWrap="wrap" bg="gray.100" color="black" m="1" p="2" minWidth="300px" >
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {message.content}
                            </ReactMarkdown>
                        </Flex>
                    </Flex> 
                )
            )}
        </Flex>
        {isTyping&&<Flex position="absolute" bottom="1px" >OpenAI Bot is typing..., please wait for while...</Flex>}
    </Flex>
  )
}

export default ChatDivison