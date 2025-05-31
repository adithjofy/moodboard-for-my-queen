// src/pages/EmojiPage.js
import React, { useState } from 'react';
import EmojiButton from '../components/EmojiButton';
import { PageTransition } from '../components/PageTransition';
import { useNavigate } from 'react-router-dom';

const emojiMessages = {
  "❤️": "I love you so much!",
  "🥺": "You’re too cute for this world 😭",
  "😘": "Mwah! Sending kisses!",
  "🌹": "A rose for my queen 👑",
  "💖": "All my love, just for you 💖",
};

const EmojiPage = () => {
  const [emojiMessage, setEmojiMessage] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  const [audioFileName, setAudioFileName] = useState('');
  const [magicSent, setMagicSent] = useState(false);
  const navigate = useNavigate();

  const handleMagicSend = () => {
    if (customMessage || audioFileName) {
      setMagicSent(true);
      setTimeout(() => navigate('/final'), 3000);
    } else {
      alert('Please enter a message or add audio for your Queen 🌟');
    }
  };

  return (
    <PageTransition>
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <h2 style={{ fontSize: '2rem', color: '#c71585' }}>Pick an Emoji 💌</h2>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', margin: '20px 0' }}>
          {Object.keys(emojiMessages).map((emoji) => (
            <EmojiButton
              key={emoji}
              emoji={emoji}
              onClick={() => setEmojiMessage(emojiMessages[emoji])}
            />
          ))}
        </div>

        {emojiMessage && <p style={{ fontSize: '1.5rem', color: '#8b008b' }}>{emojiMessage}</p>}

        <textarea
          placeholder="Type something magical here ✨"
          value={customMessage}
          onChange={(e) => setCustomMessage(e.target.value)}
          style={{
            width: '80%',
            height: '80px',
            marginTop: '20px',
            padding: '10px',
            borderRadius: '12px',
            border: '1px solid #ccc',
            fontFamily: 'inherit',
            fontSize: '1rem',
          }}
        />

        <div style={{ marginTop: '20px' }}>
          <input
            type="file"
            accept="audio/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) setAudioFileName(file.name);
            }}
          />
          {audioFileName && <p style={{ fontSize: '0.9rem', color: '#444' }}>🎵 {audioFileName}</p>}
        </div>

        <button
          onClick={handleMagicSend}
          style={{
            marginTop: '30px',
            padding: '10px 25px',
            backgroundColor: '#ff69b4',
            border: 'none',
            borderRadius: '25px',
            color: 'white',
            fontSize: '1rem',
          }}
        >
          Send Magic 🪄
        </button>

        {magicSent && (
          <p style={{ fontSize: '1.3rem', marginTop: '20px', color: '#da70d6' }}>
            Magic is on its way to your Queen! ✉️💖
          </p>
        )}
      </div>
    </PageTransition>
  );
};

export default EmojiPage;
