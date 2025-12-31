export default function Home({ onNavigate }) {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
      {/* Navbar */}
      <header
        style={{
          padding: '16px 48px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid #e5e7eb',
          position: 'sticky',
          top: 0,
          backgroundColor: '#ffffff',
          zIndex: 100,
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
        }}
      >
        <div
          style={{
            fontSize: 24,
            fontWeight: 700,
            background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.5px',
          }}
        >
          🏛️ LF Campus
        </div>
        <nav style={{ display: 'flex', gap: 32, fontSize: 14 }}>
          <span
            style={{
              cursor: 'pointer',
              color: '#6b7280',
              transition: 'all 0.3s ease',
              position: 'relative',
            }}
            onMouseOver={(e) => {
              e.target.style.color = '#2563eb';
              const underline = document.createElement('div');
              underline.style.position = 'absolute';
              underline.style.bottom = '-4px';
              underline.style.left = '0';
              underline.style.width = '100%';
              underline.style.height = '2px';
              underline.style.background = 'linear-gradient(90deg, #2563eb, #60a5fa)';
              underline.style.borderRadius = '1px';
              e.target.appendChild(underline);
            }}
            onMouseOut={(e) => {
              e.target.style.color = '#6b7280';
              const underline = e.target.querySelector('div');
              if (underline) underline.remove();
            }}
          >
            About
          </span>
          <span
            style={{
              cursor: 'pointer',
              color: '#6b7280',
              transition: 'all 0.3s ease',
              position: 'relative',
            }}
            onMouseOver={(e) => {
              e.target.style.color = '#2563eb';
            }}
            onMouseOut={(e) => {
              e.target.style.color = '#6b7280';
            }}
          >
            Contact
          </span>
          <button
            onClick={() => onNavigate('login')}
            style={{
              padding: '10px 24px',
              background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
              color: '#ffffff',
              border: 'none',
              borderRadius: 8,
              cursor: 'pointer',
              fontSize: 14,
              fontWeight: 600,
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)',
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 20px rgba(37, 99, 235, 0.35)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.25)';
            }}
          >
            Login
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        style={{
          padding: '120px 32px',
          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f3f4f6 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Animated background blobs */}
        <div
          style={{
            position: 'absolute',
            width: 500,
            height: 500,
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 70%)',
            borderRadius: '50%',
            top: -150,
            right: -100,
            animation: 'float 6s ease-in-out infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 400,
            height: 400,
            background: 'radial-gradient(circle, rgba(96, 165, 250, 0.08) 0%, transparent 70%)',
            borderRadius: '50%',
            bottom: -120,
            left: -80,
            animation: 'float 8s ease-in-out infinite 1s',
          }}
        />

        <div
          style={{
            maxWidth: 900,
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <div
            style={{
              display: 'inline-block',
              padding: '8px 16px',
              backgroundColor: 'rgba(37, 99, 235, 0.1)',
              borderRadius: 20,
              marginBottom: 24,
              animation: 'slideDown 0.8s ease 0.1s both',
            }}
          >
            <span style={{ color: '#2563eb', fontSize: 13, fontWeight: 600 }}>
              ✨ Welcome to Campus Lost & Found
            </span>
          </div>

          <h1
            style={{
              fontSize: 64,
              fontWeight: 900,
              background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 50%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: 24,
              lineHeight: 1.1,
              animation: 'slideDown 0.8s ease 0.2s both',
            }}
          >
            Find What You Lost
          </h1>

          <p
            style={{
              fontSize: 20,
              color: '#4b5563',
              marginBottom: 48,
              lineHeight: 1.8,
              maxWidth: 700,
              margin: '0 auto 48px',
              animation: 'slideDown 0.8s ease 0.3s both',
            }}
          >
            Help students recover lost belongings. Report found items and search for lost possessions instantly. 
            <span style={{ display: 'block', marginTop: 12, fontSize: 16, color: '#6b7280', fontWeight: 500 }}>
              🚀 Fast • 🔒 Secure • 👥 Community-Driven
            </span>
          </p>

          <div
            style={{
              display: 'flex',
              gap: 20,
              justifyContent: 'center',
              flexWrap: 'wrap',
              animation: 'slideDown 0.8s ease 0.4s both',
            }}
          >
            <button
              onClick={() => onNavigate('dashboard')}
              style={{
                padding: '18px 44px',
                background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
                color: '#ffffff',
                border: 'none',
                borderRadius: 10,
                fontSize: 16,
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                boxShadow: '0 8px 20px rgba(37, 99, 235, 0.3)',
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-4px)';
                e.target.style.boxShadow = '0 12px 32px rgba(37, 99, 235, 0.4)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 20px rgba(37, 99, 235, 0.3)';
              }}
            >
              📝 Report Found Item
            </button>
            <button
              onClick={() => onNavigate('search')}
              style={{
                padding: '18px 44px',
                backgroundColor: '#ffffff',
                color: '#2563eb',
                border: '2px solid #e0e7ff',
                borderRadius: 10,
                fontSize: 16,
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                boxShadow: '0 4px 12px rgba(37, 99, 235, 0.1)',
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#f0f9ff';
                e.target.style.borderColor = '#2563eb';
                e.target.style.transform = 'translateY(-4px)';
                e.target.style.boxShadow = '0 12px 28px rgba(37, 99, 235, 0.2)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#ffffff';
                e.target.style.borderColor = '#e0e7ff';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.1)';
              }}
            >
              🔍 Search Lost Items
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '80px 32px', backgroundColor: '#ffffff' }}>
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 40,
            textAlign: 'center',
          }}
        >
          {[
            { icon: '📦', number: '2,345+', label: 'Items Recovered' },
            { icon: '👥', number: '1,280+', label: 'Happy Users' },
            { icon: '⚡', number: '24/7', label: 'Available' },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                padding: 32,
                borderRadius: 12,
                backgroundColor: '#f8fafc',
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                cursor: 'pointer',
                animation: `scaleIn 0.6s ease ${0.1 * i}s both`,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                e.currentTarget.style.backgroundColor = '#eff6ff';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(37, 99, 235, 0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.backgroundColor = '#f8fafc';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  fontSize: 48,
                  marginBottom: 16,
                  animation: 'bounce 2s ease infinite',
                }}
              >
                {stat.icon}
              </div>
              <div style={{ fontSize: 32, fontWeight: 800, color: '#1e40af', marginBottom: 8 }}>
                {stat.number}
              </div>
              <div style={{ fontSize: 15, color: '#6b7280', fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section style={{ padding: '100px 32px', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 44,
              textAlign: 'center',
              marginBottom: 20,
              fontWeight: 800,
              color: '#1f2937',
            }}
          >
            How It Works
          </h2>
          <p
            style={{
              textAlign: 'center',
              fontSize: 16,
              color: '#6b7280',
              marginBottom: 60,
            }}
          >
            Simple steps to help your community recover lost items
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 32,
            }}
          >
            {[
              {
                step: '1',
                title: 'Report Found',
                desc: 'Submit details of items you found on campus',
                icon: '📝',
              },
              {
                step: '2',
                title: 'Students Search',
                desc: 'Browse all reported items and search for yours',
                icon: '🔍',
              },
              {
                step: '3',
                title: 'Reunite',
                desc: 'Connect with finder and recover your belongings',
                icon: '🤝',
              },
            ].map((feature, i) => (
              <div
                key={i}
                style={{
                  padding: 40,
                  backgroundColor: '#ffffff',
                  borderRadius: 14,
                  border: '2px solid #e5e7eb',
                  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  cursor: 'pointer',
                  animation: `slideUp 0.6s ease ${0.15 * i}s both`,
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = '#2563eb';
                  e.currentTarget.style.backgroundColor = '#eff6ff';
                  e.currentTarget.style.transform = 'translateY(-12px)';
                  e.currentTarget.style.boxShadow = '0 16px 32px rgba(37, 99, 235, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = '#e5e7eb';
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 12,
                    backgroundColor: '#eff6ff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 32,
                    marginBottom: 20,
                    transition: 'all 0.3s ease',
                  }}
                >
                  {feature.icon}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: '#2563eb',
                    marginBottom: 8,
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                  }}
                >
                  Step {feature.step}
                </div>
                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    marginBottom: 12,
                    color: '#1f2937',
                  }}
                >
                  {feature.title}
                </h3>
                <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.6 }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          padding: '100px 32px',
          background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #e0f2fe 100%)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: 300,
            height: 300,
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            top: -100,
            right: -100,
          }}
        />
        <div
          style={{
            maxWidth: 700,
            margin: '0 auto',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <h2
            style={{
              fontSize: 44,
              marginBottom: 16,
              fontWeight: 800,
              color: '#1e40af',
            }}
          >
            Ready to Help Your Community?
          </h2>
          <p
            style={{
              fontSize: 18,
              marginBottom: 40,
              color: '#4b5563',
              lineHeight: 1.8,
            }}
          >
            Start reporting found items or searching for your lost belongings now.
          </p>
          <button
            onClick={() => onNavigate('login')}
            style={{
              padding: '16px 48px',
              background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
              color: '#ffffff',
              border: 'none',
              borderRadius: 10,
              fontSize: 16,
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              boxShadow: '0 8px 20px rgba(37, 99, 235, 0.3)',
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-4px) scale(1.05)';
              e.target.style.boxShadow = '0 12px 32px rgba(37, 99, 235, 0.4)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 8px 20px rgba(37, 99, 235, 0.3)';
            }}
          >
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: '40px 32px',
          backgroundColor: '#1f2937',
          color: '#d1d5db',
          textAlign: 'center',
          fontSize: 14,
        }}
      >
        <p>© 2024 Campus Lost & Found. Built with 💙 for students.</p>
      </footer>

      {/* CSS Animations */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(20px);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}
