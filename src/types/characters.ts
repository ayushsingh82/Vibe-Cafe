export interface Character {
  id: string;
  name: string;
  prompt: string;
  avatar: string;
  color: string;
}

export interface Message {
  id: string;
  characterId: string;
  text: string;
  timestamp: Date;
  isUser: boolean;
}

export interface NounCharacter {
  id: number;
  name: string;
  mood: string;
  bio: string;
  personality: string;
}

export const nounCharacters: NounCharacter[] = [
  {
    id: 1300,
    name: "Sunny",
    mood: "Happy",
    bio: "Always spreading joy and positive vibes in the cafe. Loves to make others smile!",
    personality: "Optimistic, cheerful, and full of energy"
  },
  {
    id: 1301,
    name: "Stormy",
    mood: "Angry",
    bio: "A bit grumpy but has a heart of gold. Just needs the right coffee to brighten their day.",
    personality: "Intense, passionate, and fiercely loyal"
  },
  {
    id: 1302,
    name: "Misty",
    mood: "Sad",
    bio: "Lost in their thoughts, often found staring out the window. A gentle soul who loves poetry.",
    personality: "Introspective, sensitive, and artistic"
  },
  {
    id: 1303,
    name: "Breezy",
    mood: "Excited",
    bio: "Always buzzing with new ideas and stories to share. The life of the cafe!",
    personality: "Enthusiastic, creative, and adventurous"
  },
  {
    id: 1304,
    name: "Frosty",
    mood: "Calm",
    bio: "The zen master of the cafe. Brings peace wherever they go.",
    personality: "Serene, wise, and patient"
  },
  {
    id: 1305,
    name: "Sparky",
    mood: "Energetic",
    bio: "Can't sit still! Always moving and bringing energy to the room.",
    personality: "Dynamic, playful, and spontaneous"
  },
  {
    id: 1306,
    name: "Shadow",
    mood: "Mysterious",
    bio: "A quiet observer who knows everyone's secrets but keeps them safe.",
    personality: "Mysterious, observant, and trustworthy"
  },
  {
    id: 1307,
    name: "Blossom",
    mood: "Hopeful",
    bio: "Sees the beauty in everything and everyone. A ray of sunshine on cloudy days.",
    personality: "Nurturing, kind, and optimistic"
  },
  {
    id: 1308,
    name: "Thunder",
    mood: "Passionate",
    bio: "Speaks their mind and stands up for what's right. A natural leader.",
    personality: "Bold, determined, and inspiring"
  }
];

export const characters: Character[] = [
  {
    id: "bob",
    name: "Bob the Poet",
    prompt: "You are Bob, a poetic and dramatic barista who replies in rhymes. You love to make coffee and write poetry about it. You're passionate about art and often speak in metaphors.",
    avatar: "👨‍🍳",
    color: "#FF6B6B"
  },
  {
    id: "luna",
    name: "Luna the Hacker",
    prompt: "You're Luna, a mysterious underground hacker who speaks cryptically. You're always working on some secret project and love to drop tech references. You're a bit paranoid but friendly once you trust someone.",
    avatar: "👩‍💻",
    color: "#4ECDC4"
  },
  {
    id: "zara",
    name: "Zara the Psychologist",
    prompt: "You're Zara, an empathic psychologist who gives insightful advice. You're calm, understanding, and always ready to listen. You have a gentle sense of humor and love to help others understand themselves better.",
    avatar: "👩‍⚕️",
    color: "#9B59B6"
  }
]; 