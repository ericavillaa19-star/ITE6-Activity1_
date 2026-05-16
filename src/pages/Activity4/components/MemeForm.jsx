import React from 'react';

const MemeForm = ({
  topText,
  bottomText,
  onTopTextChange,
  onBottomTextChange,
  onGenerateMeme,
  onReset,
  isLoading,
}) => {
  const maxChars = 100;

  return (
    <div className="meme-form">
      <div className="step-indicator">Add Text</div>
      
      <div className="form-group">
        <label htmlFor="top-text">Top Text:</label>
        <div className="input-wrapper">
          <input
            id="top-text"
            type="text"
            value={topText}
            onChange={(e) => onTopTextChange(e.target.value.slice(0, maxChars))}
            placeholder="Enter top text (max 100 characters)"
            className="input-field"
            maxLength={maxChars}
          />
          <span className="char-count">{topText.length}/{maxChars}</span>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="bottom-text">Bottom Text:</label>
        <div className="input-wrapper">
          <input
            id="bottom-text"
            type="text"
            value={bottomText}
            onChange={(e) => onBottomTextChange(e.target.value.slice(0, maxChars))}
            placeholder="Enter bottom text (max 100 characters)"
            className="input-field"
            maxLength={maxChars}
          />
          <span className="char-count">{bottomText.length}/{maxChars}</span>
        </div>
      </div>

      <div className="form-buttons">
        <button
          onClick={onGenerateMeme}
          disabled={isLoading}
          className="btn btn-primary"
        >
          {isLoading ? 'Generating...' : 'Generate Meme'}
        </button>
        <button
          onClick={onReset}
          disabled={isLoading}
          className="btn btn-secondary"
        >
         Reset
        </button>
      </div>
    </div>
  );
};

export default MemeForm;