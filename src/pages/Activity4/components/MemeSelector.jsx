import React from 'react';

const MemeSelector = ({ memes, selectedMeme, onMemeChange }) => {
  const [previewLoading, setPreviewLoading] = React.useState(false);
  const selectedMemeData = memes.find((m) => m.id === selectedMeme);

  const handleMemeChange = (e) => {
    setPreviewLoading(true);  // ✅ Start loading
    onMemeChange(e.target.value);
  };

  const handleImageLoad = () => {
    setPreviewLoading(false);  // ✅ Stop loading when image loads
  };

  return (
    <div className="meme-selector">
    
      <label htmlFor="meme-dropdown">Choose Your Meme Template:</label>
      <select
        id="meme-dropdown"
        value={selectedMeme || ''}
        onChange={handleMemeChange}
        className="dropdown"
      >
        <option value="">-- Select a meme template --</option>
        {memes.map((meme) => (
          <option key={meme.id} value={meme.id}>
            {meme.name}
          </option>
        ))}
      </select>

      {selectedMemeData && (
        <div className="template-preview">
          <p className="preview-label">Preview:</p>
          {previewLoading && (
            <span class="preview-loader"></span>
          )}
          <img
            src={selectedMemeData.url}
            alt={selectedMemeData.name}
            className="preview-image"
            onLoad={handleImageLoad}  
            style={{ display: previewLoading ? 'none' : 'block' }}
          />
        </div>
      )}
    </div>
  );
};

export default MemeSelector;