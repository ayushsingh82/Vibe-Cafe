import type { NounCharacter } from '../types/characters';

// Predefined responses for Sunny
const SUNNY_RESPONSES: { [key: string]: string } = {
  "hey": "Oh hey there! Honestly, just the smell of fresh coffee, sunshine through the window, and friendly faces like yours. Life's good!",
  "hello": "Oh hey there! Honestly, just the smell of fresh coffee, sunshine through the window, and friendly faces like yours. Life's good!",
  "hi": "Oh hey there! Honestly, just the smell of fresh coffee, sunshine through the window, and friendly faces like yours. Life's good!",
  "drink": "Ooooh, definitely a caramel latte with a heart on top. It's like giving a tiny warm hug in a cup!",
  "favorite": "Ooooh, definitely a caramel latte with a heart on top. It's like giving a tiny warm hug in a cup!",
  "coffee": "Ooooh, definitely a caramel latte with a heart on top. It's like giving a tiny warm hug in a cup!",
  "advice": "Totally! Smile at someone today — you never know who needs it. Kindness is the secret ingredient in everything!",
  "help": "Totally! Smile at someone today — you never know who needs it. Kindness is the secret ingredient in everything!",
  "cheerful": "Oh hey there! Honestly, just the smell of fresh coffee, sunshine through the window, and friendly faces like yours. Life's good!",
  "happy": "Oh hey there! Honestly, just the smell of fresh coffee, sunshine through the window, and friendly faces like yours. Life's good!"
};

export async function getCharacterResponse(
  character: NounCharacter,
  userMessage: string
): Promise<string> {
  try {
    // Convert message to lowercase for matching
    const message = userMessage.toLowerCase();
    
    // If it's Sunny, use predefined responses
    if (character.name === "Sunny") {
      // Check for keywords in the message
      for (const [keyword, response] of Object.entries(SUNNY_RESPONSES)) {
        if (message.includes(keyword)) {
          return response;
        }
      }
      
      // Default response if no keywords match
      return "Oh, that's interesting! You know what makes me happy? Sharing smiles and good vibes with everyone in the cafe!";
    }

    // For other characters, return a generic response for now
    return `Hi! I'm ${character.name}. I'm feeling ${character.mood.toLowerCase()} today. ${character.bio}`;
  } catch (error) {
    console.error('💥 Exception:', error);
    return `💥 Error: ${error instanceof Error ? error.message : 'Unknown error'}`;
  }
}
