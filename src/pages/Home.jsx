import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';

const Home = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#ff69b4' }}>Welcome My Queen 💖</h1>
        <p style={{ fontSize: '1.2rem' }}>This is your magical moodboard 💫</p>
        <button
          onClick={() => navigate('/emojis')}
          style={{
            marginTop: '20px',
            padding: '12px 24px',
            backgroundColor: '#ffb6c1',
            border: 'none',
            borderRadius: '20px',
            fontSize: '1rem',
            color: '#fff',
          }}
        >
          Tap to Start ✨
        </button>
      </div>
    </PageTransition>
  );
};

export default Home;