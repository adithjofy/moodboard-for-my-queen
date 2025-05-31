import React from 'react';

const EmojiButton = ({ emoji, onClick }) => {
  return (
    <button
      style={{
        fontSize: '2rem',
        margin: '10px',
        borderRadius: '12px',
        padding: '10px 15px',
        border: 'none',
        background: '#fff0f5',
        boxShadow: '0px 0px 8px rgba(0,0,0,0.1)',
      }}
      onClick={onClick}
    >
      {emoji}
    </button>
  );
};

export default EmojiButton;