import { useState } from 'react';
import './App.css';
import { nounCharacters } from './types/nouns';

const NOUNS_IMAGE_BASE = "https://noun.pics/";

function App() {
  const [hoveredNoun, setHoveredNoun] = useState<number | null>(null);

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
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
