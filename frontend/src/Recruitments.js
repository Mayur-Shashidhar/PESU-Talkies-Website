import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Recruitments = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: false });
    AOS.refresh();
  }, []);

  return (
    <div className="page-container">
      <h2 data-aos="fade-down">Recruitments</h2>
      <p data-aos="fade-up">Recruitments will be happening soon! 🚀 Until then, stay tuned and follow us for updates and fun stuff. And hey, don’t forget to check this website regularly for the latest news!</p>
    </div>
  );
};

export default Recruitments; 