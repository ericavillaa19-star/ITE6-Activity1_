import React, { useState, useEffect } from 'react';
import MemeSelector from './components/MemeSelector';
import MemeForm from './components/MemeForm';
import MemeDisplay from './components/MemeDisplay';
import Loader from './components/Loader';
import './Activity4.css';
import { Link } from "react-router-dom";

const Activity4 = () => {
  // ✅ Credentials INSIDE component
  const IMGFLIP_USERNAME = 'GoodnessGracious';
  const IMGFLIP_PASSWORD = 'goodnessgracious';

  const [memes, setMemes] = useState([]);
  const [selectedMeme, setSelectedMeme] = useState(null);
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [generatedMeme, setGeneratedMeme] = useState(null);
  const [loading, setLoading] = useState(false);
  const [memesLoading, setMemesLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch meme templates on component mount
  useEffect(() => {
    fetchMemeTemplates();
  }, []);

  const fetchMemeTemplates = async () => {
    try {
      setMemesLoading(true);
      setError(null);
      const response = await fetch('https://api.imgflip.com/get_memes');
      const data = await response.json();
      
      if (data.success) {
        setMemes(data.data.memes);
        if (data.data.memes.length > 0) {
          setSelectedMeme(data.data.memes[0].id);
        }
      } else {
        setError('Failed to fetch meme templates');
      }
    } catch (err) {
      setError('Error fetching meme templates: ' + err.message);
    } finally {
      setMemesLoading(false);
    }
  };

  const handleGenerateMeme = async () => {
    if (!selectedMeme || !topText || !bottomText) {
      setError('Please select a meme and enter both top and bottom text');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const params = new URLSearchParams({
        template_id: selectedMeme,
        text0: topText,
        text1: bottomText,
        username: IMGFLIP_USERNAME,
        password: IMGFLIP_PASSWORD
      });

      const response = await fetch('https://api.imgflip.com/caption_image', {
        method: 'POST',
        body: params,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      const data = await response.json();

      if (data.success) {
        setGeneratedMeme(data.data.url);
      } else {
        setError('Failed to generate meme: ' + data.error_message);
      }
    } catch (err) {
      setError('Error generating meme: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setTopText('');
    setBottomText('');
    setGeneratedMeme(null);
    setError(null);
  };

  return (
    <div className="activity4-container">
      <h1 className="title">Meme Generator</h1>
      
      {error && <div className="error-message">{error}</div>}

      {memesLoading ? (
        <Loader />
      ) : (
        <div className="content-wrapper">
          <div className="form-section">
            <MemeSelector 
              memes={memes}
              selectedMeme={selectedMeme}
              onMemeChange={setSelectedMeme}
            />

            <MemeForm
              topText={topText}
              bottomText={bottomText}
              onTopTextChange={setTopText}
              onBottomTextChange={setBottomText}
              onGenerateMeme={handleGenerateMeme}
              onReset={handleReset}
              isLoading={loading}
            />
          </div>

          <div className="display-section">
            {loading ? (
              <Loader />
            ) : generatedMeme ? (
              <MemeDisplay memeUrl={generatedMeme} />
            ) : (
              <div className="placeholder">
                <p>Your generated meme will appear here</p>
              </div>
            )}
          </div>
        </div>
      )}
        <div className="nav-buttons">
        <Link to="/activity3">
          <button className="back-btn">← Back</button>
        </Link>
    </div>
    </div>
  );
};

export default Activity4;