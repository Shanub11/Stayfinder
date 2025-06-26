import React, { useState } from "react";
import Input from "../assets/Search";
import Logo from "../assets/Logo.png"; 
import dasboardlogo from "../assets/dashboard-logo.png";
import { useNavigate } from "react-router-dom";

function DashboardHeader() {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogoClick = () => {
    navigate('/');
  };

  const handlePostProperty = () => { 
    navigate('/post-property');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="header-container">
      <header className="header">
        <nav>
          <Input />

          <img src={Logo} alt="Image" className="nav-logo" onClick={handleLogoClick} />
          <div style={{ position: 'absolute', top: 40, right: 32, display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              style={{
                padding: '8px 16px',
                borderRadius: '6px',
                border: 'none',
                background: '#115DFC',
                color: '#fff',
                fontWeight: 600,
                cursor: 'pointer',
                marginRight: '100px',
                marginTop: '10px',
                boxShadow: '0 2px 8px rgba(31, 64, 96, 0.10)'
                
              }}
              onClick={handlePostProperty}
            >
              Post Property
            </button>
            <img
              src={dasboardlogo}
              alt="dashboardlogo"
              className="dashboard-logo"
              style={{ cursor: 'pointer' }}
              onClick={() => setShowDropdown((prev) => !prev)}
            />
            {showDropdown && (
              <div
                style={{
                  position: 'absolute',
                  top: '60px',
                  right: 0,
                  background: '#fff',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                  borderRadius: '8px',
                  minWidth: '140px',
                  zIndex: 1000,
                }}
              >
                <div
                  style={{ padding: '10px', cursor: 'pointer', color: 'black' }}
                  onClick={() => { setShowDropdown(false); navigate('/profile'); }}
                >
                  Profile
                </div>
                <div
                  style={{ padding: '10px', cursor: 'pointer', color: 'black' }}
                  onClick={() => { setShowDropdown(false); navigate('/settings'); }}
                >
                  Settings
                </div>
                <div
                  style={{ padding: '10px', cursor: 'pointer', color: 'red' }}
                  onClick={handleLogout}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
}

export default DashboardHeader;