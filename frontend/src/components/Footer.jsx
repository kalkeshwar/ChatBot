import { Button, Flex, Textarea } from '@chakra-ui/react';
import React from 'react';

const Footer = (props) => {
  const {
    currentMessage,
    setCurrentMessage,
    setMessages,
    setTyping,
    isTyping,
    setCurrentResponse,
  } = props;

  const handleSend = async () => {
    const control = new AbortController();
    let newMessage = { role: 'user', content: currentMessage };
    setMessages((prevmessage) => [...prevmessage, newMessage]);
    setCurrentMessage('');
    const body = JSON.stringify(newMessage);
    setTyping(true);
    let reader;

    try {
      const response = await fetch('http://localhost:3001/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
        signal: control.signal,
      });

      reader = response.body.pipeThrough(new TextDecoderStream()).getReader();
      let receivedData = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          break;
        }
        receivedData += value;
        setCurrentResponse((prev) => prev + value);
      }

      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: receivedData },
      ]);
      setCurrentResponse('');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Flex w="90%" justifyContent="space-around" alignItems="center">
      <Textarea
        placeholder="Ask your questions here"
        w="90%"
        mt="1"
        border="2px"
        value={currentMessage}
        onChange={(e) => setCurrentMessage(e.target.value)}
      />
      <Button
        bg="black"
        color="white"
        size="xs"
        w="70px"
        h="40px"
        m="2"
        isDisabled={isTyping}
        onClick={handleSend}
      >
        Send
      </Button>
    </Flex>
  );
};

export default Footer;
