import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// clubHeads: Maps club head slugs to names.
const clubHeads = {
  jayaram: 'Jayaram',
  sharvani: 'Sharvani',
  saumyaa: 'Saumyaa',
  yatharth: 'Yatharth',
};

// domainHeads: Maps domain head slugs to names.
const domainHeads = {
  archi: 'Archi',
  rishi: 'Rishi',
  sourish: 'Sourish',
  yatharth: 'Yatharth',
  baasanthi: 'Baasanthi',
  somesh: 'Somesh',
  surya: 'Surya',
  pratham: 'Pratham',
  mayur: 'Mayur',
  apurv: 'Apurv',
  kushal: 'Kushal',
  vineeth: 'Vineeth',
  bhanavi: 'Bhanavi',
};

// HeadDetail: Displays details for a selected club or domain head.
const HeadDetail = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: false });
    AOS.refresh();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const revealElements = document.querySelectorAll('.reveal-photo');
      revealElements.forEach(el => {
        el.classList.add('revealed');
      });
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const { slug } = useParams();
  const name = clubHeads[slug] || domainHeads[slug];

  if (!name) {
    return (
      <div className="page-container">
        <Link to="/heads" style={{ color: '#FFD600', textDecoration: 'none', fontWeight: 'bold' }} data-aos="fade-down">&larr; Back to Heads</Link>
        <h2 style={{ color: '#FFD600', marginTop: '1.5rem' }} data-aos="fade-up">Head Not Found</h2>
      </div>
    );
  }

  return (
    <div className="page-container">
      <Link to="/heads" style={{ color: '#FFD600', textDecoration: 'none', fontWeight: 'bold' }} data-aos="fade-down">&larr; Back to Heads</Link>
      <h2 style={{ color: '#FFD600', marginTop: '1.5rem' }} data-aos="fade-down">{name}</h2>
      <div style={{ marginTop: '1.5rem', background: '#181818', borderRadius: 16, padding: '1.5rem 1.2rem', color: '#fff' }} data-aos="fade-up">
        {slug === 'sharvani' ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ minWidth: 220, maxWidth: 340 }}>
              <p><strong>Full Name:</strong> Peri Anantha Lakshmi Sharvani</p>
              <p><strong>Date of Birth:</strong> 7th September 2005</p>
              <p><strong>Pursuing:</strong> BSc Psychology Hons</p>
              <p><strong>Vision:</strong> We see this club as a family — a space where passion for filmmaking thrives.<br/>
              Our vision is to grow together and create opportunities for every aspiring storyteller.</p>
            </div>
            <div className="reveal-photo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, margin: 0 }}>
              <img 
                src={process.env.PUBLIC_URL + '/heads/Sharvani.jpg'} 
                alt="Sharvani" 
                style={{
                  width: '200px',
                  height: 'auto',
                  borderRadius: '18px',
                  boxShadow: '0 4px 24px #FFD60055',
                  objectFit: 'cover',
                  border: '3px solid #FFD600',
                  flexShrink: 0,
                }}
                data-aos="fade-in"
                data-aos-duration="1200"
              />
            </div>
          </div>
        ) : slug === 'archi' ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ minWidth: 220, maxWidth: 340 }}>
              <p><strong>Full Name:</strong> Archi Pankaj</p>
              <p><strong>Date of Birth:</strong> 1st May 2005</p>
              <p><strong>Pursuing:</strong> Bachelor of Technology in Computer Science and Engineering</p>
              <p><strong>Vision:</strong> To inspire students to explore acting or direction and create impactful plays and films that leave a lasting message.</p>
            </div>
            <div className="reveal-photo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, margin: 0 }}>
              <img 
                src={process.env.PUBLIC_URL + '/heads/Archi.jpg'} 
                alt="Archi" 
                style={{
                  width: '200px',
                  height: 'auto',
                  borderRadius: '18px',
                  boxShadow: '0 4px 24px #FFD60055',
                  objectFit: 'cover',
                  border: '3px solid #FFD600',
                  flexShrink: 0,
                }}
                data-aos="fade-in"
                data-aos-duration="1200"
              />
            </div>
          </div>
        ) : slug === 'mayur' ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ minWidth: 220, maxWidth: 340 }}>
              <p><strong>Full Name:</strong> S Mayur</p>
              <p><strong>Date of Birth:</strong> 14th March 2006</p>
              <p><strong>Pursuing:</strong> Bachelor of Technology in Computer Science and Engineering</p>
              <p><strong>Vision:</strong> At PESU Talkies, my vision is simple — I see it as a space where creative minds can just vibe, experiment and grow together through storytelling.</p>
            </div>
            <div className="reveal-photo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, margin: 0 }}>
              <img 
                src={process.env.PUBLIC_URL + '/heads/Mayur.jpg'} 
                alt="Mayur" 
                style={{
                  width: '200px',
                  height: 'auto',
                  borderRadius: '18px',
                  boxShadow: '0 4px 24px #FFD60055',
                  objectFit: 'cover',
                  border: '3px solid #FFD600',
                  flexShrink: 0,
                }}
                data-aos="fade-in"
                data-aos-duration="1200"
              />
            </div>
          </div>
        ) : slug === 'vineeth' ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ minWidth: 220, maxWidth: 340 }}>
              <p><strong>Full Name:</strong> Vineet Pradeep</p>
              <p><strong>Date of Birth:</strong> 8th April 2005</p>
              <p><strong>Pursuing:</strong> Bachelor of Technology in Electrical and Electronics Engineering</p>
              <p><strong>Vision:</strong> I see PESU Talkies as a place for actors & aspiring directors showcasing their vision through film-making 🎥📽</p>
            </div>
            <div className="reveal-photo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, margin: 0 }}>
              <img 
                src={process.env.PUBLIC_URL + '/heads/Vineeth.jpg'} 
                alt="Vineet" 
                style={{
                  width: '200px',
                  height: 'auto',
                  borderRadius: '18px',
                  boxShadow: '0 4px 24px #FFD60055',
                  objectFit: 'cover',
                  border: '3px solid #FFD600',
                  flexShrink: 0,
                }}
                data-aos="fade-in"
                data-aos-duration="1200"
              />
            </div>
          </div>
        ) : slug === 'sourish' ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ minWidth: 220, maxWidth: 340 }}>
              <p><strong>Full Name:</strong> Sourish Joshi</p>
              <p><strong>Date of Birth:</strong> 3rd November 2005</p>
              <p><strong>Pursuing:</strong> Bachelor of Technology in Electrical and Electronics Engineering</p>
              <p><strong>Vision:</strong> My vision is to ideate as much as possible and come up with interesting and fun content that'll keep people hooked.</p>
            </div>
            <div className="reveal-photo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, margin: 0 }}>
              <img 
                src={process.env.PUBLIC_URL + '/heads/Sourish.jpg'} 
                alt="Sourish" 
                style={{
                  width: '200px',
                  height: 'auto',
                  borderRadius: '18px',
                  boxShadow: '0 4px 24px #FFD60055',
                  objectFit: 'cover',
                  border: '3px solid #FFD600',
                  flexShrink: 0,
                }}
                data-aos="fade-in"
                data-aos-duration="1200"
              />
            </div>
          </div>
        ) : slug === 'kushal' ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ minWidth: 220, maxWidth: 340 }}>
              <p><strong>Full Name:</strong> Kushal Kumar B</p>
              <p><strong>Date of Birth:</strong> 18th March 2005</p>
              <p><strong>Pursuing:</strong> Bachelor of Technology in Computer Science and Engineering with specialization in Artificial Intelligence and Machine Learning</p>
              <p><strong>Vision:</strong> My vision is to engage completely with the club and make sure every member feels free to pitch in ideas and come up with crazy movies</p>
            </div>
            <div className="reveal-photo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, margin: 0 }}>
              <img 
                src={process.env.PUBLIC_URL + '/heads/Kushal.jpg'} 
                alt="Kushal" 
                style={{
                  width: '200px',
                  height: 'auto',
                  borderRadius: '18px',
                  boxShadow: '0 4px 24px #FFD60055',
                  objectFit: 'cover',
                  border: '3px solid #FFD600',
                  flexShrink: 0,
                }}
                data-aos="fade-in"
                data-aos-duration="1200"
              />
            </div>
          </div>
        ) : slug === 'rishi' ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ minWidth: 220, maxWidth: 340 }}>
              <p><strong>Full Name:</strong> Rishi Bharadwaj</p>
              <p><strong>Date of Birth:</strong> 4th February 2006</p>
              <p><strong>Pursuing:</strong> Bachelor of Technology in Computer Science and Engineering with specialization in Artificial Intelligence and Machine Learning</p>
              <p><strong>Vision:</strong> My vision is to build a crew that can tell their story from the angles they take and focus on raw emotion over perfection, intent over aesthetics, and collaboration over ego.</p>
            </div>
            <div className="reveal-photo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, margin: 0 }}>
              <img 
                src={process.env.PUBLIC_URL + '/heads/Rishi.jpg'} 
                alt="Rishi" 
                style={{
                  width: '200px',
                  height: 'auto',
                  borderRadius: '18px',
                  boxShadow: '0 4px 24px #FFD60055',
                  objectFit: 'cover',
                  border: '3px solid #FFD600',
                  flexShrink: 0,
                }}
                data-aos="fade-in"
                data-aos-duration="1200"
              />
            </div>
          </div>
        ) : slug === 'somesh' ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ minWidth: 220, maxWidth: 340 }}>
              <p><strong>Full Name:</strong> Someshvar</p>
              <p><strong>Date of Birth:</strong> 6th April 2005</p>
              <p><strong>Pursuing:</strong> Bachelor of Technology in Computer Science and Engineering with specialization in Artificial Intelligence and Machine Learning</p>
              <p><strong>Vision:</strong> My vision is to be as experimental as possible and to make kickass movies</p>
            </div>
            <div className="reveal-photo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, margin: 0 }}>
              <img 
                src={process.env.PUBLIC_URL + '/heads/Somesh.jpg'} 
                alt="Someshvar" 
                style={{
                  width: '200px',
                  height: 'auto',
                  borderRadius: '18px',
                  boxShadow: '0 4px 24px #FFD60055',
                  objectFit: 'cover',
                  border: '3px solid #FFD600',
                  flexShrink: 0,
                }}
                data-aos="fade-in"
                data-aos-duration="1200"
              />
            </div>
          </div>
        ) : slug === 'pratham' ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ minWidth: 220, maxWidth: 340 }}>
              <p><strong>Full Name:</strong> Pratham U N</p>
              <p><strong>Date of Birth:</strong> 21st November 2005</p>
              <p><strong>Pursuing:</strong> Bachelor of Technology in Electronics and Communication Engineering</p>
              <p><strong>Vision:</strong> My vision is to shape compelling storylines through creative editing and contribute meaningfully to the world of cinema.</p>
            </div>
            <div className="reveal-photo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, margin: 0 }}>
              <img 
                src={process.env.PUBLIC_URL + '/heads/Pratham.jpg'} 
                alt="Pratham U N" 
                style={{
                  width: '200px',
                  height: 'auto',
                  borderRadius: '18px',
                  boxShadow: '0 4px 24px #FFD60055',
                  objectFit: 'cover',
                  border: '3px solid #FFD600',
                  flexShrink: 0,
                }}
                data-aos="fade-in"
                data-aos-duration="1200"
              />
            </div>
          </div>
        ) : slug === 'yatharth' ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ minWidth: 220, maxWidth: 340 }}>
              <p><strong>Full Name:</strong> Yatharth.D.M</p>
              <p><strong>Date of Birth:</strong> 19th January 2004</p>
              <p><strong>Pursuing:</strong> Bcom Hon's ACCA</p>
              <p><strong>Vision:</strong> To create a space more for filmmaking and have weekly releases just like the outer world.</p>
            </div>
            <div className="reveal-photo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, margin: 0 }}>
              <img 
                src={process.env.PUBLIC_URL + '/heads/Yatharth.jpg'} 
                alt="Yatharth.D.M" 
                style={{
                  width: '200px',
                  height: 'auto',
                  borderRadius: '18px',
                  boxShadow: '0 4px 24px #FFD60055',
                  objectFit: 'cover',
                  border: '3px solid #FFD600',
                  flexShrink: 0,
                }}
                data-aos="fade-in"
                data-aos-duration="1200"
              />
            </div>
          </div>
        ) : slug === 'saumyaa' ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ minWidth: 220, maxWidth: 340 }}>
              <p><strong>Full Name:</strong> Saumyaa Seth</p>
              <p><strong>Date of Birth:</strong> 19th July 2004</p>
              <p><strong>Pursuing:</strong> Bachelor of Technology in Computer Science and Engineering with specialization in Artificial Intelligence and Machine Learning</p>
              <p><strong>Vision:</strong> My vision is to get together all movie enthusiasts and make a creative space for them to ideate and bring those ideas to life.</p>
            </div>
            <div className="reveal-photo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, margin: 0 }}>
              <img 
                src={process.env.PUBLIC_URL + '/heads/Saumyaa.jpg'} 
                alt="Saumyaa Seth" 
                style={{
                  width: '200px',
                  height: 'auto',
                  borderRadius: '18px',
                  boxShadow: '0 4px 24px #FFD60055',
                  objectFit: 'cover',
                  border: '3px solid #FFD600',
                  flexShrink: 0,
                }}
                data-aos="fade-in"
                data-aos-duration="1200"
              />
            </div>
          </div>
        ) : slug === 'jayaram' ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ minWidth: 220, maxWidth: 340 }}>
              <p><strong>Full Name:</strong> Jayaram Devraj</p>
              <p><strong>Date of Birth:</strong> 27th August 2004</p>
              <p><strong>Pursuing:</strong> Bachelor of Design</p>
              <p><strong>Vision:</strong> Exploring all the aspects of film making to make sure the art of film making is complete infused in our minds so that working on a bigger stage will be easy.</p>
            </div>
            <div className="reveal-photo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, margin: 0 }}>
              <img 
                src={process.env.PUBLIC_URL + '/heads/Jayaram.jpg'} 
                alt="Jayaram Devraj" 
                style={{
                  width: '200px',
                  height: 'auto',
                  borderRadius: '18px',
                  boxShadow: '0 4px 24px #FFD60055',
                  objectFit: 'cover',
                  border: '3px solid #FFD600',
                  flexShrink: 0,
                }}
                data-aos="fade-in"
                data-aos-duration="1200"
              />
            </div>
          </div>
        ) : slug === 'apurv' ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ minWidth: 220, maxWidth: 340 }}>
              <p><strong>Full Name:</strong> Apurv Kumar</p>
              <p><strong>Date of Birth:</strong> 8th November 2004</p>
              <p><strong>Pursuing:</strong> Bachelor of Technology in Electronics and Communication Engineering</p>
              <p><strong>Vision:</strong> My aim is to have fun and help making movies.</p>
            </div>
            <div className="reveal-photo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, margin: 0 }}>
              <img 
                src={process.env.PUBLIC_URL + '/heads/Apurv.jpg'} 
                alt="Apurv Kumar" 
                style={{
                  width: '200px',
                  height: 'auto',
                  borderRadius: '18px',
                  boxShadow: '0 4px 24px #FFD60055',
                  objectFit: 'cover',
                  border: '3px solid #FFD600',
                  flexShrink: 0,
                }}
                data-aos="fade-in"
                data-aos-duration="1200"
              />
            </div>
          </div>
        ) : slug === 'bhanavi' ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ minWidth: 220, maxWidth: 340 }}>
              <p><strong>Full Name:</strong> Bhanavi D</p>
              <p><strong>Date of Birth:</strong> 31st December 2005</p>
              <p><strong>Pursuing:</strong> Bachelor of Technology in Computer Science and Engineering with specialization in Artificial Intelligence and Machine Learning</p>
              <p><strong>Vision:</strong> A platform to showcase my creative side and GET👏THE👏REACH👏.</p>
            </div>
            <div className="reveal-photo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, margin: 0 }}>
              <img 
                src={process.env.PUBLIC_URL + '/heads/Bhanavi.jpg'} 
                alt="Bhanavi D" 
                style={{
                  width: '200px',
                  height: 'auto',
                  borderRadius: '18px',
                  boxShadow: '0 4px 24px #FFD60055',
                  objectFit: 'cover',
                  border: '3px solid #FFD600',
                  flexShrink: 0,
                }}
                data-aos="fade-in"
                data-aos-duration="1200"
              />
            </div>
          </div>
        ) : slug === 'baasanthi' ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ minWidth: 220, maxWidth: 340 }}>
              <p><strong>Full Name:</strong> Sidda Baasanthi Reddy</p>
              <p><strong>Date of Birth:</strong> 28th April 2005</p>
              <p><strong>Pursuing:</strong> Bachelor of Technology in Computer Science and Engineering with specialization in Artificial Intelligence and Machine Learning</p>
              <p><strong>Vision:</strong> To build a creative space where students explore cinema, tell stories and grow through films, discussions and hands-on projects.</p>
            </div>
            <div className="reveal-photo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, margin: 0 }}>
              <img 
                src={process.env.PUBLIC_URL + '/heads/Baasanthi.jpg'} 
                alt="Sidda Baasanthi Reddy" 
                style={{
                  width: '200px',
                  height: 'auto',
                  borderRadius: '18px',
                  boxShadow: '0 4px 24px #FFD60055',
                  objectFit: 'cover',
                  border: '3px solid #FFD600',
                  flexShrink: 0,
                }}
                data-aos="fade-in"
                data-aos-duration="1200"
              />
            </div>
          </div>
        ) : (
          <p>[Details about {name} will go here]</p>
        )}
      </div>
    </div>
  );
};

export default HeadDetail;