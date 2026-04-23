import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Building2, 
  ClipboardCheck, 
  Zap, 
  ArrowRight, 
  Star,
  CheckCircle2,
  Users,
  Briefcase
} from 'lucide-react';
import Button from '../components/Button';

const LandingPage: React.FC = () => {
  return (
    <div className="auth-page animate-fade-in" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh',
      backgroundColor: '#ffffff'
    }}>
      {/* Navigation */}
      <header className="animate-fade-in" style={{ 
        padding: '16px 48px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        background: '#ffffff',
        borderBottom: '1px solid rgba(228, 190, 185, 0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div className="brand" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ padding: '6px', background: '#b7131a', borderRadius: '4px' }}>
            <Zap size={18} color="white" fill="white" />
          </div>
          <span style={{ fontSize: '22px', fontWeight: 800, color: '#141b2b', letterSpacing: '-0.02em' }}>JoByte</span>
        </div>
        <nav style={{ display: 'flex', gap: '32px' }}>
          <a href="#" style={{ fontSize: '14px', fontWeight: 600, color: '#5f5e5e' }}>Companies</a>
          <a href="#" style={{ fontSize: '14px', fontWeight: 600, color: '#5f5e5e' }}>Assessments</a>
          <a href="#" style={{ fontSize: '14px', fontWeight: 600, color: '#5f5e5e' }}>About</a>
        </nav>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Link to="/auth" style={{ textDecoration: 'none' }}>
            <span style={{ fontSize: '14px', fontWeight: 600, color: '#141b2b', marginRight: '12px', cursor: 'pointer' }}>Sign In</span>
          </Link>
          <Link to="/auth" style={{ textDecoration: 'none' }}>
            <Button variant="primary" size="sm" style={{ padding: '8px 20px' }}>Get Started</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main style={{ flexGrow: 1 }}>
        <section style={{ 
          padding: '100px 24px 100px', 
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Floating Background Icons (Decorative) */}
          <div style={{ position: 'absolute', top: '150px', left: '15%', opacity: 0.3, transform: 'rotate(-15deg)' }}><Building2 size={32} color="#9ca3af" /></div>
          <div style={{ position: 'absolute', top: '400px', left: '10%', opacity: 0.3, transform: 'rotate(10deg)' }}><ClipboardCheck size={28} color="#9ca3af" /></div>
          <div style={{ position: 'absolute', top: '120px', right: '15%', opacity: 0.3, transform: 'rotate(15deg)' }}><Zap size={32} color="#9ca3af" /></div>
          <div style={{ position: 'absolute', top: '380px', right: '12%', opacity: 0.3, transform: 'rotate(-10deg)' }}><Search size={28} color="#9ca3af" /></div>

          {/* Hero Card */}
          <div className="animate-slide-up" style={{
            backgroundColor: '#ffffff',
            padding: '64px',
            borderRadius: '32px',
            boxShadow: '0 20px 40px rgba(20, 27, 43, 0.08)',
            border: '1px solid rgba(228, 190, 185, 0.1)',
            maxWidth: '860px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '32px',
            zIndex: 1
          }}>
            <div style={{ 
              width: '48px', 
              height: '48px', 
              background: '#fef2f2', 
              borderRadius: '8px', 
              color: '#b7131a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Briefcase size={28} />
            </div>
            
            <h1 style={{ 
              fontSize: '64px', 
              lineHeight: '1.05', 
              fontWeight: 800, 
              maxWidth: '800px',
              color: '#141b2b',
              letterSpacing: '-0.04em'
            }}>
              Find Your Next <br /> Opportunity
            </h1>
            
            <p style={{ fontSize: '18px', color: '#5f5e5e', maxWidth: '600px', lineHeight: '1.6' }}>
              JoByte connects top talent with world-class companies through <br /> intelligent assessments and real-time tracking.
            </p>
            
            <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
              <Link to="/auth" style={{ textDecoration: 'none' }}>
                <Button variant="secondary" size="lg" style={{ 
                  backgroundColor: '#ffffff', 
                  border: '1px solid #f1f3ff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '14px 28px'
                }}>
                  <img src="https://www.google.com/favicon.ico" alt="Google" style={{ width: '18px' }} />
                  Continue with Google
                </Button>
              </Link>
              <Link to="/jobs" style={{ textDecoration: 'none' }}>
                <Button variant="primary" size="lg" style={{ padding: '14px 32px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  Explore Jobs <ArrowRight size={20} />
                </Button>
              </Link>
            </div>
            
            <a href="#" style={{ fontSize: '13px', color: '#b7131a', fontWeight: 700, marginTop: '8px', textDecoration: 'underline' }}>
              Know More About JoByte
            </a>
          </div>
        </section>

        {/* Stats Section */}
        <section style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '80px', 
          padding: '48px 24px',
          borderTop: '1px solid #f1f3ff',
          borderBottom: '1px solid #f1f3ff'
        }}>
          {[
            { label: 'Active Jobs', value: '10K+' },
            { label: 'Top Companies', value: '500+' },
            { label: 'Success Rate', value: '95%' },
            { label: 'Avg. Response', value: '48hr' }
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '32px', fontWeight: 800, color: '#b7131a' }}>{stat.value}</div>
              <div style={{ fontSize: '12px', color: '#5f5e5e', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>{stat.label}</div>
            </div>
          ))}
        </section>

        {/* Features Introduction */}
        <section style={{ padding: '80px 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', marginBottom: '48px' }}>Everything you need to hire and get hired</h2>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
            {[
              { title: 'Intelligent Matching', desc: 'Our AI algorithms analyze skills beyond keywords to find the perfect synergy between role and candidate.', icon: <Zap size={20} color="#b7131a" /> },
              { title: 'Skill Assessments', desc: 'Industry-standard tests that validate technical and soft skills, providing verified credentials for applicants.', icon: <ClipboardCheck size={20} color="#b7131a" /> },
              { title: 'Real-time Tracking', desc: 'Stay updated with instant notifications on application status and direct communication channels.', icon: <ArrowRight size={20} color="#b7131a" /> }
            ].map((feature, i) => (
              <div key={i} style={{ textAlign: 'left', padding: '32px', border: '1px solid rgba(228, 190, 185, 0.2)', borderRadius: '12px' }}>
                <div style={{ marginBottom: '16px' }}>{feature.icon}</div>
                <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>{feature.title}</h3>
                <p style={{ fontSize: '14px', color: '#5f5e5e' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Dual Panel Section */}
        <section style={{ display: 'flex', minHeight: '600px' }}>
          {/* For Applicants */}
          <div style={{ 
            flex: 1, 
            backgroundColor: '#111827', 
            color: '#ffffff', 
            padding: '80px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '32px'
          }}>
            <h2 style={{ color: '#ffffff', fontSize: '32px' }}>For Applicants</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[
                { step: '1', title: 'Create Profile', desc: 'Import your portfolio and set your career preferences.' },
                { step: '2', title: 'Take Assessment', desc: 'Validate your skills through our tailored technical challenges.' },
                { step: '3', title: 'Get Hired', desc: 'Connect directly with hiring managers.' }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ 
                    width: '32px', 
                    height: '32px', 
                    background: '#b7131a', 
                    borderRadius: '4px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontSize: '14px',
                    fontWeight: 700
                  }}>{item.step}</div>
                  <div>
                    <h4 style={{ color: '#ffffff', fontSize: '18px', marginBottom: '4px' }}>{item.title}</h4>
                    <p style={{ color: '#9ca3af', fontSize: '14px' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* For Employers */}
          <div style={{ 
            flex: 1, 
            backgroundColor: '#ffffff', 
            padding: '80px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '32px'
          }}>
            <h2 style={{ fontSize: '32px' }}>For Employers</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[
                { step: '1', title: 'Post a Job', desc: 'Define requirements and AI generates assessment criteria.' },
                { step: '2', title: 'Review Matches', desc: 'Browse verified talent pools sorted by skill proficiency scores.' },
                { step: '3', title: 'Seamless Onboarding', desc: 'Manage interviews and offers through our integrated dashboard.' }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ 
                    width: '32px', 
                    height: '32px', 
                    background: '#111827', 
                    color: '#ffffff',
                    borderRadius: '4px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontSize: '14px',
                    fontWeight: 700
                  }}>{item.step}</div>
                  <div>
                    <h4 style={{ fontSize: '18px', marginBottom: '4px' }}>{item.title}</h4>
                    <p style={{ color: '#5f5e5e', fontSize: '14px' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section style={{ padding: '100px 24px', backgroundColor: '#f9f9ff', textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '48px' }}>Trusted by world-class teams</h2>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {[
              { name: 'Sarah Jenkins', role: 'Talent Acquisition at Vertex', quote: "JoByte's assessment phase ensured I was talking to the right companies from day one. Found my current role within 2 weeks." },
              { name: 'Michael Chen', role: 'CTO at CloudScale', quote: "The quality of candidates coming from JoByte is unmatched. The pre-vetted assessments save our team hundreds of hours." },
              { name: 'Ananya Rao', role: 'Software Engineer', quote: "A professional instrument for career growth. The feedback loops during the application process were genuinely helpful." }
            ].map((t, i) => (
              <div key={i} style={{ backgroundColor: '#ffffff', padding: '32px', borderRadius: '12px', textAlign: 'left', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                <div style={{ display: 'flex', gap: '2px', marginBottom: '16px' }}>
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} color="#b7131a" fill="#b7131a" />)}
                </div>
                <p style={{ fontSize: '15px', fontStyle: 'italic', color: '#5f5e5e', marginBottom: '24px' }}>"{t.quote}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '20px', background: '#f1f3ff' }}></div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '14px' }}>{t.name}</div>
                    <div style={{ fontSize: '12px', color: '#9ca3af' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ padding: '80px 48px', background: '#ffffff', borderTop: '1px solid #f1f3ff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '64px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div style={{ padding: '4px', background: '#b7131a', borderRadius: '4px' }}>
                <Zap size={14} color="white" fill="white" />
              </div>
              <span style={{ fontSize: '18px', fontWeight: 800 }}>JoByte</span>
            </div>
            <p style={{ color: '#5f5e5e', fontSize: '14px', lineHeight: '1.6', maxWidth: '280px' }}>
              Accelerating the world's professional growth through intelligent matching and data-driven assessments.
            </p>
          </div>
          <div>
            <h5 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '20px' }}>Platform</h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><a href="#" style={{ fontSize: '14px', color: '#5f5e5e' }}>Browse Jobs</a></li>
              <li><a href="#" style={{ fontSize: '14px', color: '#5f5e5e' }}>Assessments</a></li>
              <li><a href="#" style={{ fontSize: '14px', color: '#5f5e5e' }}>Success Stories</a></li>
            </ul>
          </div>
          <div>
            <h5 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '20px' }}>Company</h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><a href="#" style={{ fontSize: '14px', color: '#5f5e5e' }}>About Us</a></li>
              <li><a href="#" style={{ fontSize: '14px', color: '#5f5e5e' }}>Careers</a></li>
              <li><a href="#" style={{ fontSize: '14px', color: '#5f5e5e' }}>Blog</a></li>
            </ul>
          </div>
          <div>
            <h5 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '20px' }}>Resources</h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><a href="#" style={{ fontSize: '14px', color: '#5f5e5e' }}>Help Center</a></li>
              <li><a href="#" style={{ fontSize: '14px', color: '#5f5e5e' }}>Terms of Service</a></li>
              <li><a href="#" style={{ fontSize: '14px', color: '#5f5e5e' }}>Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div style={{ maxWidth: '1200px', margin: '48px auto 0', paddingTop: '32px', borderTop: '1px solid #f1f3ff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: '12px', color: '#9ca3af' }}>© 2024 JoByte. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Users size={18} color="#9ca3af" />
            <Briefcase size={18} color="#9ca3af" />
            <Zap size={18} color="#9ca3af" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
