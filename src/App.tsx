import { useState } from 'react';
import type { Character, Message } from './types/characters';
import { characters } from './types/characters';
import './App.css';

function App() {
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
  };

  return (
    <div className="app">
      <div className="container">
        {/* Header */}
        <div className="header">
          <h1>Virtual Café</h1>
        </div>

        {/* Characters Grid */}
        <div className="characters-grid">
          {characters.map((character) => (
            <div
              key={character.id}
              className={`character-card ${selectedCharacter?.id === character.id ? 'selected' : ''}`}
              onClick={() => setSelectedCharacter(character)}
              style={{ borderColor: character.color }}
            >
              <div className="character-avatar">{character.avatar}</div>
              <div className="character-name">{character.name}</div>
            </div>
          ))}
        </div>

        {/* Chat Area */}
        <div className="chat-area">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`message ${message.isUser ? 'user-message' : 'character-message'}`}
            >
              {message.text}
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="input-area">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message..."
            disabled={!selectedCharacter}
          />
          <button
            onClick={handleSendMessage}
            disabled={!selectedCharacter || !inputMessage.trim()}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
