import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

// FollowUs: Displays social media links for PESU Talkies with animation effects.
const FollowUs = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: false });
    AOS.refresh();
  }, []);

  return (
    <div className="page-container">
      <h2 data-aos="fade-down">Follow Us <span role="img" aria-label="heart" style={{ color: 'red' }}>❤️</span></h2>
      <p style={{ marginBottom: '1.5rem', color: '#FFD600', fontWeight: 'bold' }} data-aos="fade-up">
        Lights, camera, connection — follow PESU Talkies and never miss a frame of our journey!
      </p>
      <div className="follow-us-icons" data-aos="fade-up" data-aos-delay="200">
        <a
          href="https://instagram.com/pesutalkies?igshid=NGExMmI2YTkyZg=="
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link instagram"
          aria-label="Instagram"
        >
          <FaInstagram className="instagram-in" size={32} />
        </a>
        <a
          href="https://www.youtube.com/@PESU_TALKIES"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link youtube"
          aria-label="YouTube"
        >
          <FaYoutube className="youtube-in" size={32} />
        </a>
        <a
          href="https://in.linkedin.com/company/pesu-talkies"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link linkedin"
          aria-label="LinkedIn"
        >
          <span className="linkedin-bg"></span>
          <FaLinkedin className="linkedin-in" size={32} />
        </a>
        <a
          href="https://x.com/PesuTalkies?t=Ff7xq2prRxsQsX9_Uk9s_g&s=08"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link x"
          aria-label="X"
        >
          <FaXTwitter className="x-in" size={32} />
        </a>
      </div>
    </div>
  );
};

export default FollowUs;