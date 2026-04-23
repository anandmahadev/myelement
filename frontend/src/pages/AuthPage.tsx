import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Zap, 
  User, 
  Briefcase, 
  HelpCircle
} from 'lucide-react';
import Button from '../components/Button';

const AuthPage: React.FC = () => {
  const [role, setRole] = useState<'applicant' | 'employer'>('applicant');

  return (
    <div className="auth-page animate-fade-in" style={{ 
      display: 'flex', 
      minHeight: '100vh',
      backgroundColor: '#f9f9ff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px'
    }}>
      {/* Auth Container */}
      <div style={{ 
        display: 'flex', 
        width: '100%', 
        maxWidth: '1100px', 
        minHeight: '640px',
        backgroundColor: '#ffffff',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(20, 27, 43, 0.08)'
      }} className="animate-slide-up">
        
        {/* Left Panel - Branding */}
        <div style={{ 
          flex: 1, 
          backgroundColor: '#111827', 
          padding: '60px',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          color: '#ffffff'
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '80px' }}>
            <div style={{ padding: '6px', background: '#b7131a', borderRadius: '4px' }}>
              <Zap size={20} color="white" fill="white" />
            </div>
            <span style={{ fontSize: '24px', fontWeight: 800, letterSpacing: '-0.02em' }}>JoByte</span>
          </div>

          <h1 style={{ fontSize: '40px', lineHeight: '1.2', fontWeight: 700, marginBottom: '40px', color: '#ffffff' }}>
            One stop destination for Talent & Companies.
          </h1>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              "Smart job matching",
              "Real-time tracking",
              "SEB skill assessment",
              "Email status updates",
              "Verified company profiles"
            ].map((text, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <CheckCircle2 size={20} color="#22c55e" />
                <span style={{ fontSize: '15px', fontWeight: 500, color: '#9ca3af' }}>{text}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 'auto' }}>
            <div style={{ display: 'flex', gap: '-8px', marginBottom: '12px' }}>
              {[1, 2, 3, 4].map(i => (
                <div key={i} style={{ 
                  width: '32px', 
                  height: '32px', 
                  borderRadius: '16px', 
                  backgroundColor: '#374151',
                  border: '2px solid #111827',
                  marginLeft: i > 1 ? '-8px' : '0'
                }}></div>
              ))}
              <div style={{ 
                width: '32px', 
                height: '32px', 
                borderRadius: '16px', 
                backgroundColor: '#b7131a',
                border: '2px solid #111827',
                marginLeft: '-8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '10px',
                fontWeight: 700
              }}>+12k</div>
            </div>
            <p style={{ fontSize: '13px', color: '#9ca3af' }}>Joined the professional instrument today.</p>
          </div>

          {/* Dot Grid on Left Panel */}
          <div style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.05,
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            pointerEvents: 'none'
          }}></div>
        </div>

        {/* Right Panel - Auth Form */}
        <div style={{ 
          flex: 1.2, 
          padding: '60px',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '8px' }}>
              Welcome to JoByte 👋
            </h2>
            <p style={{ fontSize: '15px', color: '#5f5e5e' }}>Sign in now to unlock the complete experience!</p>
          </div>

          {/* Role Selection */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '40px' }}>
            <div 
              onClick={() => setRole('applicant')}
              style={{ 
                flex: 1, 
                padding: '20px', 
                borderRadius: '12px', 
                border: `2px solid ${role === 'applicant' ? '#b7131a' : '#f1f3ff'}`,
                backgroundColor: role === 'applicant' ? '#fef2f2' : '#ffffff',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}
            >
              <User size={24} color={role === 'applicant' ? '#b7131a' : '#9ca3af'} />
              <div style={{ fontWeight: 700, color: role === 'applicant' ? '#b7131a' : '#141b2b' }}>Applicant</div>
              <div style={{ fontSize: '12px', color: role === 'applicant' ? '#b7131a' : '#5f5e5e', opacity: 0.8 }}>Find your dream job</div>
            </div>
            <div 
              onClick={() => setRole('employer')}
              style={{ 
                flex: 1, 
                padding: '20px', 
                borderRadius: '12px', 
                border: `2px solid ${role === 'employer' ? '#b7131a' : '#f1f3ff'}`,
                backgroundColor: role === 'employer' ? '#fef2f2' : '#ffffff',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}
            >
              <Briefcase size={24} color={role === 'employer' ? '#b7131a' : '#9ca3af'} />
              <div style={{ fontWeight: 700, color: role === 'employer' ? '#b7131a' : '#141b2b' }}>Employer</div>
              <div style={{ fontSize: '12px', color: role === 'employer' ? '#b7131a' : '#5f5e5e', opacity: 0.8 }}>Hire top talent</div>
            </div>
          </div>

          {/* Social Auth */}
          <Button 
            fullWidth 
            variant="primary" 
            style={{ 
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px'
            }}
          >
            <img src="https://www.google.com/favicon.ico" alt="Google" style={{ width: '18px' }} />
            Login with Google
          </Button>

          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px', 
            marginBottom: '20px' 
          }}>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#f1f3ff' }}></div>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#c9c6c5', letterSpacing: '0.05em' }}>ALTERNATIVE</span>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#f1f3ff' }}></div>
          </div>

          <Button 
            fullWidth 
            variant="secondary"
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #f1f3ff',
              color: '#141b2b'
            }}
          >
            Continue with Email
          </Button>

          <p style={{ marginTop: 'auto', fontSize: '12px', color: '#9ca3af', textAlign: 'center' }}>
            By clicking continue, you agree to our <br />
            <a href="#" style={{ color: '#b7131a' }}>Terms of Service</a> and <a href="#" style={{ color: '#b7131a' }}>Privacy Policy</a>
          </p>

          {/* Floating Help */}
          <div style={{ 
            position: 'absolute', 
            bottom: '24px', 
            right: '24px',
            color: '#b7131a',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '13px',
            fontWeight: 600
          }}>
            <HelpCircle size={18} />
            Need Help?
          </div>

          {/* Dot Grid on Right Panel */}
          <div style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.2,
            backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            pointerEvents: 'none',
            zIndex: -1
          }}></div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
