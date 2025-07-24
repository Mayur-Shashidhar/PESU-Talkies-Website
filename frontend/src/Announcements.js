import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Announcements = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: false });
    AOS.refresh();
  }, []);

  return (
    <div className="page-container">
      <h2 style={{ color: '#FFD600', marginBottom: '1.5rem' }} data-aos="fade-down">Announcements</h2>
      <p data-aos="fade-up" style={{ marginBottom: 0, fontSize: '1.18rem' }}>
        🎙️ Stay Tuned!<br />
        Big things are always brewing at PESU Talkies 👀<br />
        Check back here for the latest updates, event drops, casting calls, and more.<br />
        You won’t want to miss what’s coming next! 🎬✨
      </p>
    </div>
  );
};

export default Announcements;
