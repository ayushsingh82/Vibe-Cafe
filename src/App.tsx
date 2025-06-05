import { useState } from 'react';
import './App.css';
import { nounCharacters } from './types/characters';
import { getCharacterResponse } from './services/gemini';

const NOUNS_IMAGE_BASE = "https://noun.pics/";

function App() {
  const [hoveredNoun, setHoveredNoun] = useState<number | null>(null);
  const [chattingWith, setChattingWith] = useState<number | null>(null);
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState<{text: string, isUser: boolean}[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const startChat = (nounId: number) => {
    setChattingWith(nounId);
    setChatMessages([{
      text: `Hi! I'm ${nounCharacters.find(n => n.id === nounId)?.name}. How can I help you today?`,
      isUser: false
    }]);
  };

  const sendMessage = async () => {
    if (!message.trim() || !chattingWith) return;
    
    const character = nounCharacters.find(n => n.id === chattingWith);
    if (!character) return;

    // Add user message
    setChatMessages(prev => [...prev, { text: message, isUser: true }]);
    setMessage('');
    
    // Show typing indicator
    setIsTyping(true);
    
    try {
      // Get AI response
      const response = await getCharacterResponse(character, message);
      
      // Add AI response
      setChatMessages(prev => [...prev, { text: response, isUser: false }]);
    } catch (error) {
      console.error('Error in chat:', error);
      setChatMessages(prev => [...prev, { 
        text: "Sorry, I'm having trouble thinking right now. Can we try again?", 
        isUser: false 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="app">
      <div className="container">
        <div className="nouns-container">
          {nounCharacters.map((character) => (
            <div 
              key={character.id} 
              className="noun-image"
              onMouseEnter={() => setHoveredNoun(character.id)}
              onMouseLeave={() => setHoveredNoun(null)}
            >
              <img 
                src={`${NOUNS_IMAGE_BASE}${character.id}.png`}
                alt={`NOUN ${character.id}`}
              />
              {hoveredNoun === character.id && (
                <div className="character-info">
                  <h3>{character.name}</h3>
                  <p className="mood">{character.mood}</p>
                  <p className="bio">{character.bio}</p>
                  <p className="personality">{character.personality}</p>
                  <button 
                    className="chat-button"
                    onClick={() => startChat(character.id)}
                  >
                    Chat with {character.name}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {chattingWith && (
          <div className="chat-window">
            <div className="chat-header">
              <h3>Chat with {nounCharacters.find(n => n.id === chattingWith)?.name}</h3>
              <button className="close-button" onClick={() => setChattingWith(null)}>×</button>
            </div>
            <div className="chat-messages">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`chat-message ${msg.isUser ? 'user' : 'character'}`}>
                  {msg.text}
                </div>
              ))}
              {isTyping && (
                <div className="chat-message character typing">
                  <span className="typing-indicator">...</span>
                </div>
              )}
            </div>
            <div className="chat-input">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                disabled={isTyping}
              />
              <button 
                onClick={sendMessage}
                disabled={isTyping || !message.trim()}
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
