import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const domainNames = {
  marketing: 'MARKETING',
  acting: 'ACTING',
  production: 'PRODUCTION',
  'social-media': 'SOCIAL MEDIA',
  design: 'DESIGN',
  direction: 'DIRECTION',
  content: 'CONTENT',
  editing: 'EDITING',
  cinematography: 'CINEMATOGRAPHY',
  operations: 'OPERATIONS',
  cultural: 'CULTURAL',
};

const domainDescriptions = {
  marketing: "Spreading the word and building excitement, this team crafts creative strategies to promote club events, films and activities, ensuring PESU Talkies is always in the spotlight.",
  acting: "Bringing characters and stories to life, members of this domain develop their performance skills and take center stage in all club productions.",
  production: "Behind every successful shoot is a well-organized crew. This group handles logistics, scheduling and resources, making sure every project runs seamlessly.",
  'social-media': "Keeping the community engaged and informed, these members create eye-catching posts, stories and reels to showcase the club’s journey online.",
  design: "Visual storytelling starts here. From posters to graphics, this creative crew ensures every project and event is visually stunning and on-brand.",
  direction: "Visionaries at heart, directors guide the cast and crew, shaping each story from script to screen with passion and creativity.",
  content: "Every great film starts with a story. This team writes scripts, develops concepts and ensures every project has a compelling narrative.",
  editing: "Transforming raw footage into cinematic masterpieces, editors work their magic with cutting, color grading, sound and effects.",
  cinematography: "Capturing the perfect shot is an art. This domain focuses on camera work, lighting and framing to create visually stunning films.",
  operations: "The backbone of the club, these members handle logistics, event planning and coordination, keeping everything running smoothly behind the scenes.",
  cultural: "Celebrating diversity and inclusivity, this team organizes events and projects that reflect a wide range of stories, backgrounds and traditions.",
};

const DomainDetail = () => {
  const { slug } = useParams();
  const normalizedSlug = slug?.toLowerCase();
  const name = domainNames[normalizedSlug];
  const description = domainDescriptions[normalizedSlug];

  useEffect(() => {
    AOS.init({ duration: 900, once: false });
    AOS.refresh();
  }, []);

  if (!name || !description) {
    return (
      <div className="page-container">
        <Link to="/domains" style={{ color: '#FFD600', textDecoration: 'none', fontWeight: 'bold' }}>&larr; Back to Domains</Link>
        <h2 style={{ color: '#FFD600', marginTop: '1.5rem' }}>Domain Not Found</h2>
      </div>
    );
  }

  return (
    <div className="page-container">
      <Link to="/domains" style={{ color: '#FFD600', textDecoration: 'none', fontWeight: 'bold' }} data-aos="fade-down">&larr; Back to Domains</Link>
      <h2 style={{ color: '#FFD600', marginTop: '1.5rem' }} data-aos="fade-down">{name}</h2>
      <div style={{ marginTop: '1.5rem', background: '#181818', borderRadius: 16, padding: '1.5rem 1.2rem', color: '#fff' }} data-aos="fade-up">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default DomainDetail;
