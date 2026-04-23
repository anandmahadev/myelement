import React from 'react';
import { 
  LayoutDashboard, 
  Briefcase, 
  Users, 
  Calendar, 
  Settings, 
  Bell, 
  Search, 
  Plus, 
  MoreVertical,
  Check,
  X,
  Zap,
  Star,
  User
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Button from '../components/Button';

const data = [
  { name: 'Mon', thisWeek: 400, lastWeek: 240 },
  { name: 'Tue', thisWeek: 300, lastWeek: 139 },
  { name: 'Wed', thisWeek: 200, lastWeek: 980 },
  { name: 'Thu', thisWeek: 278, lastWeek: 390 },
  { name: 'Fri', thisWeek: 189, lastWeek: 480 },
  { name: 'Sat', thisWeek: 239, lastWeek: 380 },
  { name: 'Sun', thisWeek: 349, lastWeek: 430 },
];

const EmployerDashboard: React.FC = () => {
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
            Overview
          </div>
          {[
            { icon: <Briefcase size={20} />, label: 'My Applications' },
            { icon: <Star size={20} />, label: 'Saved Jobs' },
            { icon: <Check size={20} />, label: 'Assessments' },
            { icon: <User size={20} />, label: 'Profile' },
            { icon: <Settings size={20} />, label: 'Settings' }
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: '8px', color: '#5f5e5e', cursor: 'pointer' }}>
              {item.icon}
              {item.label}
            </div>
          ))}
        </nav>

        <div style={{ marginTop: 'auto', paddingTop: '24px', borderTop: '1px solid #f1f3ff', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '20px', backgroundColor: '#f1f3ff' }}></div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '13px' }}>Rohan Mehta</div>
            <div style={{ fontSize: '11px', color: '#9ca3af' }}>Razorpay HR</div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flexGrow: 1, padding: '40px' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <div>
            <h1 style={{ fontSize: '28px', fontWeight: 800 }}>Hi Rohan Mehta @ Razorpay 👋</h1>
            <p style={{ color: '#5f5e5e', fontSize: '14px' }}>One stop destination for Talent & Companies.</p>
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '20px', border: '1px solid #f1f3ff', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center' }}>
              <Bell size={20} color="#5f5e5e" />
            </div>
            <Button variant="primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Plus size={18} />
              Post New Job
            </Button>
          </div>
        </header>

        {/* Stats Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '24px',
          marginBottom: '32px'
        }}>
          {[
            { label: 'Active Jobs', value: '24' },
            { label: 'Total Applicants', value: '1.2k' },
            { label: 'Interviews', value: '48' },
            { label: 'Offers Sent', value: '12' }
          ].map((stat, i) => (
            <div key={i} style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.01)', border: '1px solid rgba(228, 190, 185, 0.1)' }}>
              <div style={{ fontSize: '12px', color: '#9ca3af', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>{stat.label}</div>
              <div style={{ fontSize: '32px', fontWeight: 800, color: '#b7131a' }}>{stat.value}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' }}>
          {/* Charts Card */}
          <div style={{ backgroundColor: '#ffffff', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.01)', border: '1px solid rgba(228, 190, 185, 0.1)' }}>
            <h3 style={{ fontSize: '18px', marginBottom: '24px' }}>Application Trends</h3>
            <div style={{ height: '300px', width: '100%' }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                  <YAxis hide />
                  <Tooltip />
                  <Line type="monotone" dataKey="thisWeek" stroke="#b7131a" strokeWidth={3} dot={false} />
                  <Line type="monotone" dataKey="lastWeek" stroke="#dce2f7" strokeWidth={3} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Top Candidates */}
          <div style={{ backgroundColor: '#ffffff', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.01)', border: '1px solid rgba(228, 190, 185, 0.1)' }}>
            <h3 style={{ fontSize: '18px', marginBottom: '24px' }}>Top Matching Candidates</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { name: 'Arjun Prajapati', role: 'Full Stack Dev', score: 98 },
                { name: 'Sarah Nicholson', role: 'Product Designer', score: 95 }
              ].map((c, i) => (
                <div key={i} style={{ border: '1px solid #f1f3ff', padding: '16px', borderRadius: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <div style={{ fontWeight: 700 }}>{c.name}</div>
                    <div style={{ color: '#b7131a', fontWeight: 700, fontSize: '12px' }}>{c.score}% Match</div>
                  </div>
                  <div style={{ height: '4px', background: '#f1f3ff', borderRadius: '2px', marginBottom: '16px' }}>
                    <div style={{ width: `${c.score}%`, height: '4px', background: '#b7131a', borderRadius: '2px' }}></div>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <Button variant="secondary" size="sm" style={{ flexGrow: 1 }}>Profile</Button>
                    <button style={{ width: '32px', height: '32px', background: '#fef2f2', color: '#b7131a', border: 'none', borderRadius: '6px' }}><Check size={16} /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EmployerDashboard;
