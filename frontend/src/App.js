import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Overview from './Overview';
import Projects from './Projects';
import ShortFilmDetail from './ShortFilmDetail';
import SeriesDetail from './SeriesDetail';
import Recruitments from './Recruitments';
import HeadDetail from './HeadDetail';
import Domains from './Domains';
import DomainDetail from './DomainDetail';
import FollowUs from './FollowUs';
import Heads from './Heads';
import Announcements from './Announcements';
import './App.css';

// ScrollToTop: Scrolls to the top of the page on route change.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

// App: Main application component, handles routing and navbar logic.
function App() {
  const navbarRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!navbarRef.current) return;
      if (window.scrollY > 10) {
        navbarRef.current.classList.add('glassy');
      } else {
        navbarRef.current.classList.remove('glassy');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener('resize', closeMenu);
    return () => window.removeEventListener('resize', closeMenu);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="app-root">
        <nav className="navbar" ref={navbarRef}>
          <div className="navbar-logo" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', flex: 1 }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <img src={process.env.PUBLIC_URL + '/pesu-talkies-logo.png'} alt="PESU Talkies Logo" style={{ height: '48px', width: '48px', marginRight: '1rem', borderRadius: '50%', background: '#111', border: '2px solid #111' }} />
              <span>PESU Talkies</span>
            </Link>
            <img src={process.env.PUBLIC_URL + '/pesu-logo.jpg'} alt="PESU Logo" style={{ height: '48px', width: '48px', marginLeft: '1rem', borderRadius: '50%', background: '#111', border: '2px solid #111' }} />
          </div>
          <button className="navbar-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <FaBars size={28} />
          </button>
          <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Overview</Link></li>
            <li><Link to="/announcements" onClick={() => setMenuOpen(false)}>Announcements</Link></li>
            <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
            <li><Link to="/domains" onClick={() => setMenuOpen(false)}>Domains</Link></li>
            <li><Link to="/heads" onClick={() => setMenuOpen(false)}>Heads</Link></li>
            <li><Link to="/recruitments" onClick={() => setMenuOpen(false)}>Recruitments</Link></li>
            <li><Link to="/follow-us" onClick={() => setMenuOpen(false)}>Follow Us</Link></li>
          </ul>
        </nav>

        <div className="main-content" style={{ paddingBottom: '2.5rem' }}>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/heads" element={<Heads />} />
            <Route path="/domains" element={<Domains />} />
            <Route path="/domains/:slug" element={<DomainDetail />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/recruitments" element={<Recruitments />} />
            <Route path="/follow-us" element={<FollowUs />} />
            <Route path="/projects/short-films/:slug" element={<ShortFilmDetail />} />
            <Route path="/projects/series/:slug" element={<SeriesDetail />} />
            <Route path="/heads/:slug" element={<HeadDetail />} />
          </Routes>
        </div>

        <footer style={{
          margin: '2.5rem 0 0 0',
          background: '#111',
          textAlign: 'center',
          color: '#FFD600',
          fontWeight: 500,
          fontSize: '1.05rem',
          letterSpacing: '0.5px',
          opacity: 0.95,
          padding: '0.9rem 0 0.7rem 0',
          boxShadow: '0 -2px 12px rgba(0,0,0,0.12)'
        }}>
          <div style={{ marginBottom: '1.2rem' }}>
            <button
              className="back-to-top-btn"
              style={{
                background: '#111',
                color: '#FFD600',
                fontWeight: 'bold',
                border: '2px solid #FFD600',
                borderRadius: '8px',
                padding: '0.7rem 1.5rem',
                fontSize: '1.1rem',
                cursor: 'pointer',
                transition: 'background 0.2s, color 0.2s',
                outline: 'none',
                display: 'inline-block',
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              onMouseOver={e => {
                e.target.style.background = '#FFD600';
                e.target.style.color = '#111';
              }}
              onMouseOut={e => {
                e.target.style.background = '#111';
                e.target.style.color = '#FFD600';
              }}
            >
              BACK TO TOP
            </button>
          </div>
          © 2025 PESU Talkies. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
