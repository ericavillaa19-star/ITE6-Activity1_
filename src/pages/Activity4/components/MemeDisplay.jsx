import React from 'react';

const MemeDisplay = ({ memeUrl }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = memeUrl;
    link.download = `meme-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="meme-display">
      <h2>Your Generated Meme</h2>
      <div className="meme-container">
        <img src={memeUrl} alt="Generated meme" className="generated-meme" />
      </div>
    </div>
  );
};

export default MemeDisplay;