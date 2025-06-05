import type { NounCharacter } from '../types/characters';

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

export async function getCharacterResponse(character: NounCharacter, userMessage: string): Promise<string> {
  try {
    const response = await fetch(OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: `You are ${character.name}, a character in a virtual cafe. 
            Your personality: ${character.personality}
            Your current mood: ${character.mood}
            Your background: ${character.bio}
            
            Respond to the user in a way that matches your character. Keep responses concise and engaging.
            Stay in character at all times and maintain your unique personality traits.`
          },
          {
            role: "user",
            content: userMessage
          }
        ],
        temperature: 0.7,
        max_tokens: 150
      })
    });

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error getting AI response:', error);
    return "Sorry, I'm having trouble thinking right now. Can we try again ?";
  }
} 


// more services coming soon