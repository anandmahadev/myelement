import React from 'react';
import { 
  LayoutDashboard, 
  Search, 
  ClipboardCheck, 
  Bell, 
  User, 
  Settings, 
  LogOut,
  MapPin,
  Briefcase,
  Zap,
  CheckCircle2,
  Clock,
  Building2
} from 'lucide-react';
import Button from '../components/Button';

const ApplicantDashboard: React.FC = () => {
  return (
    <div className="dashboard-container" style={{ 
      display: 'flex', 
      minHeight: '100vh',
      backgroundColor: '#f9f9ff'
    }}>
      {/* Sidebar */}
      <aside style={{ 
        width: '260px', 
        backgroundColor: '#ffffff', 
        borderRight: '1px solid #f1f3ff',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '40px' }}>
          <div style={{ padding: '6px', background: '#b7131a', borderRadius: '4px' }}>
            <Zap size={18} color="white" fill="white" />
          </div>
          <span style={{ fontSize: '20px', fontWeight: 800 }}>JoByte</span>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: '8px', backgroundColor: '#fef2f2', color: '#b7131a', fontWeight: 600 }}>
            <LayoutDashboard size={20} />
            Dashboard
          </div>
          {[
            { icon: <Search size={20} />, label: 'Browse Jobs' },
            { icon: <ClipboardCheck size={20} />, label: 'Assessments' },
            { icon: <Bell size={20} />, label: 'Notifications' },
            { icon: <User size={20} />, label: 'My Profile' },
            { icon: <Settings size={20} />, label: 'Settings' }
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: '8px', color: '#5f5e5e', cursor: 'pointer' }}>
              {item.icon}
              {item.label}
            </div>
          ))}
        </nav>

        <div style={{ marginTop: 'auto', padding: '16px', backgroundColor: '#111827', borderRadius: '12px', color: '#ffffff' }}>
          <div style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '8px' }}>Resume Strength</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ flexGrow: 1, height: '4px', background: '#374151', borderRadius: '2px' }}>
              <div style={{ width: '82%', height: '4px', background: '#b7131a', borderRadius: '2px' }}></div>
            </div>
            <span style={{ fontSize: '12px', fontWeight: 700 }}>82%</span>
          </div>
          <p style={{ fontSize: '10px', color: '#9ca3af', marginTop: '8px' }}>Add your certification to reach 100%</p>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flexGrow: 1, padding: '40px' }}>
        {/* Header / Profile Banner */}
        <div style={{ 
          backgroundColor: '#ffffff', 
          borderRadius: '20px', 
          padding: '32px', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '24px',
          marginBottom: '32px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
          border: '1px solid #f1f3ff'
        }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '12px', backgroundColor: '#f1f3ff', overflow: 'hidden' }}>
             {/* Placeholder for Priya's photo */}
             <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, #f1f3ff, #e1e8fd)' }}></div>
          </div>
          <div style={{ flexGrow: 1 }}>
            <h1 style={{ fontSize: '24px', fontWeight: 800 }}>Priya Sharma</h1>
            <div style={{ display: 'flex', gap: '16px', marginTop: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#5f5e5e', fontSize: '13px' }}>
                <Briefcase size={14} /> Senior Product Designer
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#5f5e5e', fontSize: '13px' }}>
                <MapPin size={14} /> Bangalore, India
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#5f5e5e', fontSize: '13px' }}>
                <Clock size={14} /> 8 Years Experience
              </div>
            </div>
          </div>
          <Button variant="secondary">Edit Profile</Button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '32px' }}>
          {/* Quick Actions */}
          <section>
            <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '16px' }}>Quick Actions</h3>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '16px' 
            }}>
              {[
                { label: 'Browse Jobs', icon: <Search size={20} /> },
                { icon: <ClipboardCheck size={20} />, label: 'Skill Assessment' },
                { icon: <Zap size={20} />, label: 'Job Alerts' },
                { icon: <User size={20} />, label: 'Referrals' }
              ].map((action, i) => (
                <div key={i} style={{ 
                  backgroundColor: '#ffffff', 
                  padding: '24px', 
                  borderRadius: '16px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  gap: '12px',
                  border: '1px solid #f1f3ff',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#b7131a'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = '#f1f3ff'}
                >
                  <div style={{ color: '#b7131a' }}>{action.icon}</div>
                  <div style={{ fontSize: '13px', fontWeight: 700, textAlign: 'center' }}>{action.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* My Applications */}
          <section>
             <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '16px' }}>My Applications</h3>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
               {[
                 { company: 'Google Inc.', role: 'UX Lead', status: 'INTERVIEW', date: '2d ago', color: '#22c55e' },
                 { company: 'Netflix', role: 'Product Designer', status: 'PENDING', date: '4d ago', color: '#b7131a' },
                 { company: 'Adobe', role: 'Design Systems Lead', status: 'ACCEPTED', date: '1w ago', color: '#10b981' }
               ].map((app, i) => (
                 <div key={i} style={{ 
                   backgroundColor: '#ffffff', 
                   padding: '20px', 
                   borderRadius: '16px', 
                   display: 'flex', 
                   alignItems: 'center', 
                   gap: '16px',
                   border: '1px solid #f1f3ff'
                 }}>
                   <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: '#f1f3ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <Building2 size={24} color="#9ca3af" />
                   </div>
                   <div style={{ flexGrow: 1 }}>
                     <div style={{ fontWeight: 700, fontSize: '15px' }}>{app.role}</div>
                     <div style={{ color: '#5f5e5e', fontSize: '13px' }}>{app.company} • {app.date}</div>
                   </div>
                   <div style={{ 
                     padding: '6px 12px', 
                     borderRadius: '6px', 
                     backgroundColor: `${app.color}15`, 
                     color: app.color,
                     fontSize: '11px',
                     fontWeight: 800,
                     letterSpacing: '0.05em'
                   }}>
                     {app.status}
                   </div>
                 </div>
               ))}
             </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ApplicantDashboard;
