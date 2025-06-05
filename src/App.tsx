import './App.css';

const NOUNS_IMAGE_BASE = "https://noun.pics/";

function App() {
  const tokenIds = Array.from({ length: 9 }, (_, i) => 1300 + i);

  return (
    <div className="app">
      <div className="container">
        <div className="nouns-container">
          {tokenIds.map((tokenId) => (
            <div key={tokenId} className="noun-image">
              <img 
                src={`${NOUNS_IMAGE_BASE}${tokenId}.png`}
                alt={`NOUN ${tokenId}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
