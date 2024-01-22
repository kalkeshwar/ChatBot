import { Avatar, Flex, AvatarBadge,Text } from '@chakra-ui/react'
import React from 'react'
import chatBotImage from "../assets/chatBotImage.jpg"
const Header = () => {
  return (
    <Flex w="100%">
        <Avatar size="lg" name="ChatBot" src={chatBotImage}>
            <AvatarBadge boxSize="1.15em" bg="green.500"/>
        </Avatar>
        <Flex flexDirection="column" mx="5 " justify="center">
            <Text fontSize="lg" fontWeight="bold">OpenAI ChatBot</Text>
            <Text color="green.500">Online</Text>
        </Flex>
    </Flex>
  )
}

export default Header