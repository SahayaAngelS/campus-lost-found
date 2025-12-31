import { useState } from 'react';

export default function Login({ onNavigate, onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState('student'); // UI role selector (optional for now)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || 'Login failed');
        setIsLoading(false);
        return;
      }

      // data: { token, role, name }
      onLogin({
        email,
        role: data.role,
        name: data.name,
        token: data.token,
      });

      onNavigate('dashboard');
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background:
          'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f3f4f6 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background blobs */}
      <div
        style={{
          position: 'absolute',
          width: 400,
          height: 400,
          background:
            'radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          top: -100,
          right: -100,
          animation: 'float 8s ease-in-out infinite',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: 300,
          height: 300,
          background:
            'radial-gradient(circle, rgba(96, 165, 250, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          bottom: -80,
          left: -80,
          animation: 'float 10s ease-in-out infinite 1s',
        }}
      />

      {/* Login Card */}
      <div
        style={{
          width: '100%',
          maxWidth: 450,
          padding: 48,
          backgroundColor: '#ffffff',
          borderRadius: 16,
          boxShadow: '0 20px 60px rgba(37, 99, 235, 0.15)',
          position: 'relative',
          zIndex: 10,
          animation:
            'slideUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both',
        }}
      >
        {/* Back Button */}
        <button
          onClick={() => onNavigate('home')}
          style={{
            fontSize: 14,
            color: '#2563eb',
            border: 'none',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            marginBottom: 32,
            fontWeight: 600,
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = '#1e40af';
            e.currentTarget.style.transform = 'translateX(-4px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = '#2563eb';
            e.currentTarget.style.transform = 'translateX(0)';
          }}
        >
          ← Back to Home
        </button>

        {/* Header */}
        <div style={{ marginBottom: 40, animation: 'slideDown 0.8s ease 0.2s both' }}>
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: 12,
              background:
                'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 28,
              marginBottom: 16,
              boxShadow: '0 8px 16px rgba(37, 99, 235, 0.25)',
            }}
          >
            🔐
          </div>
          <h1
            style={{
              fontSize: 32,
              fontWeight: 800,
              color: '#1f2937',
              marginBottom: 8,
            }}
          >
            Welcome Back
          </h1>
          <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.6 }}>
            Sign in to access your account and manage your lost & found
            items
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 20 }}>
          {/* Email Field */}
          <div style={{ animation: 'slideDown 0.8s ease 0.25s both' }}>
            <label
              style={{
                display: 'block',
                fontSize: 14,
                fontWeight: 600,
                marginBottom: 8,
                color: '#1f2937',
              }}
            >
              Email Address
            </label>
            <div style={{ position: 'relative' }}>
              <span
                style={{
                  position: 'absolute',
                  left: 12,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  fontSize: 18,
                }}
              >
                📧
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                style={{
                  width: '100%',
                  padding: '14px 16px 14px 44px',
                  border: '2px solid #080809ff',
                  borderRadius: 10,
                  fontSize: 14,
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  backgroundColor: '#03090fff',
                  color: '#000000',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#2563eb';
                  e.target.style.backgroundColor = '#cbced3ff';
                  e.target.style.boxShadow =
                    '0 0 0 3px rgba(37, 99, 235, 0.1)';
                      e.target.style.color = '#000000'; 
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#ececedff';
                  e.target.style.backgroundColor = '#edf0f2ff';
                  e.target.style.boxShadow = 'none';
                   e.target.style.color = '#000000';
                }}
              />
            </div>
          </div>

          {/* Password Field */}
          <div style={{ animation: 'slideDown 0.8s ease 0.3s both' }}>
            <label
              style={{
                display: 'block',
                fontSize: 14,
                fontWeight: 600,
                marginBottom: 8,
                color: '#01050aff',
              }}
            >
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <span
                style={{
                  position: 'absolute',
                  left: 12,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  fontSize: 18,
                }}
              >
                🔑
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                style={{
                  width: '100%',
                  padding: '14px 44px 14px 44px',
                  border: '2px solid #e5e7eb',
                  borderRadius: 10,
                  fontSize: 14,
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  backgroundColor: '#f9fafb',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#2563eb';
                  e.target.style.backgroundColor = '#eff6ff';
                  e.target.style.boxShadow =
                    '0 0 0 3px rgba(37, 99, 235, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#070707ff';
                  e.target.style.backgroundColor = '#f9fafb';
                  e.target.style.boxShadow = 'none';
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: 12,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 18,
                  transition: 'all 0.3s ease',
                }}
                onMouseOver={(e) =>
                  (e.target.style.transform =
                    'translateY(-50%) scale(1.2)')
                }
                onMouseOut={(e) =>
                  (e.target.style.transform = 'translateY(-50%)')
                }
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>

          {/* Role select (UI only for now) */}
          <div>
            <label
              style={{
                display: 'block',
                marginBottom: '8px',
                color: '#dbdfe3ff',
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              Login as
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: '8px',
                border: '1px solid #d1d5db',
                marginBottom: '4px',
                fontSize: 14,
              }}
            >
              <option value="student">Student</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Remember & Forgot */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: 13,
              animation: 'slideDown 0.8s ease 0.35s both',
            }}
          >
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                color: '#6b7280',
                cursor: 'pointer',
              }}
            >
              <input type="checkbox" style={{ cursor: 'pointer' }} />
              Remember me
            </label>
            <span
              style={{
                color: '#2563eb',
                cursor: 'pointer',
                fontWeight: 600,
                transition: 'color 0.3s ease',
              }}
              onMouseOver={(e) => (e.target.style.color = '#1e40af')}
              onMouseOut={(e) => (e.target.style.color = '#2563eb')}
            >
              Forgot password?
            </span>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            disabled={isLoading}
            style={{
              padding: '14px 20px',
              background: isLoading
                ? 'linear-gradient(135deg, #bfdbfe 0%, #93c5fd 100%)'
                : 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
              color: '#ffffff',
              border: 'none',
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 700,
              cursor: isLoading ? 'not-allowed' : 'pointer',
              marginTop: 8,
              transition:
                'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              boxShadow: isLoading
                ? '0 4px 12px rgba(37, 99, 235, 0.15)'
                : '0 8px 20px rgba(37, 99, 235, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              animation: 'slideDown 0.8s ease 0.4s both',
            }}
            onMouseOver={(e) => {
              if (!isLoading) {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow =
                  '0 12px 28px rgba(37, 99, 235, 0.4)';
              }
            }}
            onMouseOut={(e) => {
              if (!isLoading) {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow =
                  '0 8px 20px rgba(37, 99, 235, 0.3)';
              }
            }}
          >
            {isLoading ? (
              <>
                <span
                  style={{
                    animation: 'spin 1s linear infinite',
                    display: 'inline-block',
                  }}
                >
                  ⏳
                </span>
                Signing in...
              </>
            ) : (
              <>
                Sign In
                <span style={{ fontSize: 16 }}>→</span>
              </>
            )}
          </button>
        </form>

        {/* Demo Info */}
        <div
          style={{
            marginTop: 32,
            padding: 16,
            backgroundColor: '#eff6ff',
            borderRadius: 10,
            borderLeft: '4px solid #2563eb',
            animation: 'slideDown 0.8s ease 0.45s both',
          }}
        >
          <p
            style={{
              fontSize: 12,
              color: '#1e40af',
              fontWeight: 500,
              margin: 0,
            }}
          >
            <span style={{ marginRight: 8 }}>💡</span>
            Use your registered email and password to log in.
          </p>
        </div>

        
        {/* Social Login buttons (visual only) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 12,
            animation: 'slideDown 0.8s ease 0.55s both',
          }}
        >
         
          
           
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
