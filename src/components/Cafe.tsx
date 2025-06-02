import { useState } from 'react';
import { Box, Grid, Text, Input, Button } from '@chakra-ui/react';
import type { Character, Message } from '../types/characters';
import { characters } from '../types/characters';

export const Cafe = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const handleSendMessage = () => {
    if (!inputMessage.trim() || !selectedCharacter) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      characterId: selectedCharacter.id,
      text: inputMessage,
      timestamp: new Date(),
      isUser: true,
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');
    // TODO: Add AI response logic here
  };

  return (
    <Box p={4} bg="gray.50" minH="100vh">
      <Box maxW="1200px" mx="auto">
        {/* Header */}
        <Box textAlign="center" py={4}>
          <Text fontSize="3xl" fontWeight="bold">
            Virtual Café
          </Text>
        </Box>

        {/* Characters Grid */}
        <Grid templateColumns="repeat(3, 1fr)" gap={4} mb={4}>
          {characters.map((character) => (
            <Box
              key={character.id}
              p={4}
              borderRadius="lg"
              bg="white"
              cursor="pointer"
              onClick={() => setSelectedCharacter(character)}
              border="2px solid"
              borderColor={selectedCharacter?.id === character.id ? character.color : 'transparent'}
              _hover={{ borderColor: character.color }}
            >
              <Text fontSize="4xl" textAlign="center">
                {character.avatar}
              </Text>
              <Text fontSize="lg" fontWeight="bold" textAlign="center">
                {character.name}
              </Text>
            </Box>
          ))}
        </Grid>

        {/* Chat Area */}
        <Box
          bg="white"
          borderRadius="lg"
          p={4}
          minH="400px"
          maxH="600px"
          overflowY="auto"
          mb={4}
        >
          {messages.map((message) => (
            <Box
              key={message.id}
              mb={2}
              p={2}
              borderRadius="md"
              bg={message.isUser ? 'blue.100' : 'gray.100'}
            >
              <Text>{message.text}</Text>
            </Box>
          ))}
        </Box>

        {/* Input Area */}
        <Box
          display="flex"
          gap={2}
          bg="white"
          p={4}
          borderRadius="lg"
        >
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message..."
            disabled={!selectedCharacter}
          />
          <Button
            colorScheme="blue"
            onClick={handleSendMessage}
            disabled={!selectedCharacter || !inputMessage.trim()}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
}; 