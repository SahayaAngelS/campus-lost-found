import { useState } from 'react';

const primaryBlue = '#2563eb';
const softGrayLight = '#f9fafb';
const softGrayBorder = '#e5e7eb';
const white = '#ffffff';

export default function Dashboard({ userName, onNavigate, onLogout }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cardBaseStyle = {
    padding: 40,
    backgroundColor: white,
    borderRadius: 12,
    border: `2px solid ${softGrayBorder}`,
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    boxShadow: 'none',
    transform: 'scale(1)',
  };

  const cardHoverStyles = {
    border: `2px solid ${primaryBlue}`,
    boxShadow: `0 10px 25px rgba(37, 99, 235, 0.15)`,
    transform: 'scale(1.05)',
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: softGrayLight, fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      {/* Navbar */}
      <header
        style={{
          padding: '16px 48px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: `1px solid ${softGrayBorder}`,
          backgroundColor: white,
          position: 'sticky',
          top: 0,
          zIndex: 100,
          boxShadow: '0 2px 8px rgb(0 0 0 / 0.05)',
          fontWeight: 600,
          fontSize: 18,
          color: primaryBlue,
        }}
      >
        <div style={{ fontWeight: 'bold' }}>LF Campus</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, color: '#4b5563', fontSize: 14, fontWeight: 500 }}>
          <span>Welcome, {userName}!</span>
          <button
            onClick={() => {
              onLogout();
              onNavigate('home');
            }}
            style={{
              padding: '8px 18px',
              backgroundColor: primaryBlue,
              color: white,
              border: 'none',
              borderRadius: 6,
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: 14,
              boxShadow: '0 2px 6px rgba(37, 99, 235, 0.3)',
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#1e40af')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = primaryBlue)}
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main
        style={{
          padding: '60px 32px',
          maxWidth: 1000,
          margin: '0 auto',
          opacity: 0,
          animation: 'fadeInSlideUp 0.6s forwards',
        }}
      >
        <h1
          style={{
            fontSize: 36,
            marginBottom: 8,
            textAlign: 'center',
            fontWeight: 700,
            color: primaryBlue,
          }}
        >
          Welcome back!
        </h1>
        <p
          style={{
            fontSize: 16,
            color: '#6b7280',
            textAlign: 'center',
            marginBottom: 60,
          }}
        >
          What would you like to do today?
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 32,
          }}
        >
          {/* Add Found Item Card */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => onNavigate('add')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') onNavigate('add');
            }}
            onMouseEnter={() => setHoveredCard('add')}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              ...cardBaseStyle,
              ...(hoveredCard === 'add' ? cardHoverStyles : {}),
              color: primaryBlue,
            }}
          >
            <div style={{ fontSize: 48, marginBottom: 16, transition: 'transform 0.3s ease', transform: hoveredCard === 'add' ? 'scale(1.2)' : 'scale(1)' }}>
              📝
            </div>
            <h2 style={{ fontSize: 24, marginBottom: 8 }}>Report Found Item</h2>
            <p style={{ color: '#6b7280', fontSize: 14 }}>
              Submit details of an item you found on campus
            </p>
          </div>

          {/* Search Lost Items Card */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => onNavigate('search')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') onNavigate('search');
            }}
            onMouseEnter={() => setHoveredCard('search')}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              ...cardBaseStyle,
              ...(hoveredCard === 'search' ? cardHoverStyles : {}),
              color: primaryBlue,
            }}
          >
            <div style={{ fontSize: 48, marginBottom: 16, transition: 'transform 0.3s ease', transform: hoveredCard === 'search' ? 'scale(1.2)' : 'scale(1)' }}>
              🔍
            </div>
            <h2 style={{ fontSize: 24, marginBottom: 8 }}>Search Lost Items</h2>
            <p style={{ color: '#6b7280', fontSize: 14 }}>
              Browse all reported lost items and search for yours
            </p>
          </div>
        </div>
      </main>

      <style>
        {`
          @keyframes fadeInSlideUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          div[role="button"]:focus {
            outline: 3px solid ${primaryBlue};
            outline-offset: 4px;
          }
        `}
      </style>
    </div>
  );
}
