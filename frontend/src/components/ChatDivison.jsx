import { Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const ChatDivison = (props) => {
    
    const {messages,currentMessage,setMessages}=props

  return (
    <Flex w="100%" h="75%" flexDirection="column" scrollBehavior="smooth" overflowY="scroll">
        {messages.map((message,index)=>
            message.role=="user"
            ?(
                <Flex w="100%" justify="flex-start">
                    <Flex key={index} maxWidth="75%" flexWrap="wrap" bg="black" color="white" my="1" p="2" minWidth="300px">
                        {message.content}
                    </Flex>
                </Flex>
                
            )
            :(
                <Flex w="100%" justifyContent='flex-end'>
                    <Flex key={index} maxWidth="75%" flexWrap="wrap" bg="gray.100" color="black" my="1" p="2" minWidth="300px">
                        {message.content}
                    </Flex>
                </Flex>
                
            )
        )}
    </Flex>
  )
}

export default ChatDivison