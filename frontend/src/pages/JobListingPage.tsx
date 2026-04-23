import React, { useState } from 'react';
import {
  Search,
  Filter,
  MapPin,
  Clock,
  Building2,
  ChevronDown,
  ArrowRight,
  Lock,
  Zap,
  Briefcase
} from 'lucide-react';
import Button from '../components/Button';
import { ROUTES } from '../constants/routes';
import { jobListings } from '../data/jobListings';

const JobListingPage: React.FC = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="job-listing-page" style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: '#f9f9ff',
      position: 'relative',
      filter: showModal ? 'blur(2px)' : 'none'
    }}>
      {/* Navigation */}
      <header style={{
        padding: '16px 48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#ffffff',
        borderBottom: '1px solid #f1f3ff',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div className="brand" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ padding: '6px', background: '#b7131a', borderRadius: '4px' }}>
            <Zap size={18} color="white" fill="white" />
          </div>
          <span style={{ fontSize: '20px', fontWeight: 800 }}>JoByte</span>
        </div>
        <nav style={{ display: 'flex', gap: '32px' }}>
          <a href="#" style={{ fontSize: '14px', fontWeight: 600, color: '#5f5e5e' }}>Companies</a>
          <a href="#" style={{ fontSize: '14px', fontWeight: 600, color: '#b7131a' }}>Assessments</a>
          <a href="#" style={{ fontSize: '14px', fontWeight: 600, color: '#5f5e5e' }}>About</a>
        </nav>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Button variant="secondary" size="sm">Sign In</Button>
          <Button variant="primary" size="sm">Get Started</Button>
        </div>
      </header>

      <main style={{ display: 'flex', flexGrow: 1, padding: '48px' }}>
        {/* Sidebar Filters */}
        <aside style={{ width: '280px', marginRight: '48px' }}>
          <div style={{ marginBottom: '32px' }}>
            <h1 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '8px' }}>Browse Jobs</h1>
            <p style={{ fontSize: '14px', color: '#5f5e5e' }}>Find your next precision-engineered career move.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Search Box */}
            <div style={{ position: 'relative' }}>
              <Search style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} size={18} />
              <input
                type="text"
                placeholder="Job title or keyword"
                style={{
                  width: '100%',
                  padding: '12px 12px 12px 40px',
                  borderRadius: '10px',
                  border: '1px solid #f1f3ff',
                  fontSize: '14px'
                }}
              />
            </div>

            {/* Categories */}
            <div>
              <h4 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: '#141b2b', marginBottom: '16px', letterSpacing: '0.05em' }}>Category</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Engineering', 'Design', 'Product', 'Marketing'].map((cat, i) => (
                  <label key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#5f5e5e', cursor: 'pointer' }}>
                    <input type="checkbox" defaultChecked={cat === 'Engineering'} style={{ accentColor: '#b7131a' }} />
                    {cat}
                  </label>
                ))}
              </div>
            </div>

            {/* Job Type Tags */}
            <div>
              <h4 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: '#141b2b', marginBottom: '16px', letterSpacing: '0.05em' }}>Job Type</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Full-time', 'Contract', 'Remote', 'Freelance'].map((type, i) => (
                  <div key={i} style={{
                    padding: '6px 14px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 600,
                    backgroundColor: (type === 'Full-time' || type === 'Remote') ? '#b7131a' : '#ffffff',
                    color: (type === 'Full-time' || type === 'Remote') ? '#ffffff' : '#5f5e5e',
                    border: '1px solid #f1f3ff',
                    cursor: 'pointer'
                  }}>{type}</div>
                ))}
              </div>
            </div>

            {/* Salary Range */}
            <div>
              <h4 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: '#141b2b', marginBottom: '16px', letterSpacing: '0.05em' }}>Salary Range ($)</h4>
              <div style={{ height: '4px', backgroundColor: '#f1f3ff', borderRadius: '2px', position: 'relative', margin: '20px 0' }}>
                <div style={{ position: 'absolute', left: '20%', right: '10%', height: '100%', backgroundColor: '#b7131a', borderRadius: '2px' }}></div>
                <div style={{ position: 'absolute', left: '20%', top: '50%', transform: 'translate(-50%, -50%)', width: '16px', height: '16px', backgroundColor: '#ffffff', border: '3px solid #b7131a', borderRadius: '50%' }}></div>
                <div style={{ position: 'absolute', right: '10%', top: '50%', transform: 'translate(50%, -50%)', width: '16px', height: '16px', backgroundColor: '#ffffff', border: '3px solid #b7131a', borderRadius: '50%' }}></div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#9ca3af' }}>
                <span>$40k</span>
                <span>$200k+</span>
              </div>
            </div>

            <Button variant="primary" fullWidth>Apply Filters</Button>
            <center><a href="#" style={{ fontSize: '12px', color: '#9ca3af', fontWeight: 600 }}>Clear All</a></center>
          </div>
        </aside>

        {/* Listings Section */}
        <section style={{ flexGrow: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <span style={{ fontSize: '14px', color: '#9ca3af' }}>Showing 124 Jobs</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 700 }}>
              SORT BY: <span style={{ color: '#b7131a', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>Most Recent <ChevronDown size={14} /></span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {jobListings.map((job) => (
              <div key={job.id} style={{
                backgroundColor: '#ffffff',
                padding: '32px',
                borderRadius: '16px',
                border: '1px solid #f1f3ff',
                display: 'flex',
                gap: '24px',
                transition: 'transform 0.2s ease',
                cursor: 'pointer'
              }}>
                <div style={{ width: '56px', height: '56px', backgroundColor: '#f1f3ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Building2 size={32} color="#9ca3af" />
                </div>
                <div style={{ flexGrow: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '6px' }}>{job.title}</h3>
                      <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: '#5f5e5e' }}>
                        <span style={{ fontWeight: 700 }}>{job.company}</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={14} /> {job.location}</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Briefcase size={14} /> {job.type}</span>
                      </div>
                    </div>
                    <div style={{ fontSize: '12px', color: '#9ca3af' }}>{job.postedLabel}</div>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '20px' }}>
                    {job.tags.map((tag, j) => (
                      <span key={j} style={{
                        padding: '4px 10px',
                        backgroundColor: '#f9f9ff',
                        color: '#5f5e5e',
                        borderRadius: '6px',
                        fontSize: '11px',
                        fontWeight: 700,
                        border: '1px solid #f1f3ff'
                      }}>{tag}</span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px' }}>
                    <a href="#" style={{ fontSize: '13px', fontWeight: 700, color: '#141b2b', display: 'flex', alignItems: 'center', gap: '4px' }}>Know More <ArrowRight size={14} /></a>
                    <Button variant="primary" size="sm">Apply Now</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Unlock Modal Overlay */}
      {showModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(20, 27, 43, 0.4)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            width: '100%',
            maxWidth: '460px',
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            padding: '48px',
            textAlign: 'center',
            boxShadow: '0 24px 48px rgba(0,0,0,0.1)'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              backgroundColor: '#fef2f2',
              borderRadius: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
              color: '#b7131a'
            }}>
              <Lock size={20} />
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '12px' }}>Unlock Full Details</h2>
            <p style={{ fontSize: '14px', color: '#5f5e5e', lineHeight: '1.6', marginBottom: '32px' }}>
              To maintain our high-precision matching standards, detailed salary breakdowns and company culture insights are reserved for verified JoByte candidates.
            </p>
            <Button variant="primary" fullWidth size="lg" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }} onClick={() => setShowModal(false)}>
              Take SEB Assessment <ArrowRight size={18} />
            </Button>
            <a href={ROUTES.auth} style={{ display: 'inline-block', marginTop: '12px', color: '#b7131a', fontSize: '12px', fontWeight: 700 }}>
              Already registered? Continue to sign in
            </a>
            <button
              onClick={() => setShowModal(false)}
              style={{ background: 'none', border: 'none', color: '#9ca3af', fontSize: '13px', fontWeight: 600, marginTop: '20px', cursor: 'pointer' }}
            >
              Maybe Later
            </button>
            <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid #f1f3ff' }}>
              <div style={{ fontSize: '11px', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 800 }}>
                Trusted by 500+ Global Tech Leaders
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobListingPage;
