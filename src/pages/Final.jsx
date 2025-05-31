import React from 'react';
import { PageTransition } from '../components/PageTransition';

const Final = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/letter.png';
    link.download = 'A_Letter_For_My_Queen.png';
    link.click();
  };

  return (
    <PageTransition>
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#ff69b4' }}>You reached the end 💫</h1>
        <p style={{ fontSize: '1.2rem' }}>Hope this made your day brighter 🌞</p>
        <p style={{ fontSize: '1.5rem', marginTop: '30px', color: '#c2185b' }}>Love, Adith 💌</p>
        <button
          onClick={handleDownload}
          style={{
            marginTop: '40px',
            padding: '12px 24px',
            backgroundColor: '#ff69b4',
            border: 'none',
            borderRadius: '25px',
            color: 'white',
            fontSize: '1rem',
          }}
        >
          Download a Letter from Me 📝
        </button>
      </div>
    </PageTransition>
  );
};

export default Final;