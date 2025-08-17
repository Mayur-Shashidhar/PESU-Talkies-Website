import React, { useState, useEffect, useMemo } from 'react';
import './Overview.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from 'react-router-dom';

const mottoText = 'Plan, Capture And Present';

// TypewriterMotto: Displays the club motto with a typewriter animation.
function TypewriterMotto() {
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;
    if (!deleting && index < mottoText.length) {
      timeout = setTimeout(() => {
        setDisplayed(mottoText.slice(0, index + 1));
        setIndex(index + 1);
      }, 90);
    } else if (!deleting && index === mottoText.length) {
      timeout = setTimeout(() => setDeleting(true), 1200);
    } else if (deleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayed(mottoText.slice(0, index - 1));
        setIndex(index - 1);
      }, 50);
    } else if (deleting && index === 0) {
      timeout = setTimeout(() => setDeleting(false), 600);
    }
    return () => clearTimeout(timeout);
  }, [index, deleting]);

  return (
    <h2 className="about-motto" data-aos="fade-down">
      {displayed}
      <span className="typewriter-cursor">|</span>
    </h2>
  );
}

const quotes = [
  "The first monster you have to scare the audience with is yourself.\n– Wes Craven",
  "A Film is a Petrified Fountain of Thought.\n– Jean Cocteau",
  "In film, we sculpt time, we sculpt behavior and we sculpt light.\n– David Fincher",
  "We need Storytelling. Otherwise, life just goes on and on like the number Pi.\n– Ang Lee",
  "The lies are in the dialogue, the truth is in the visuals.\n– Kelly Reichardt",
  "In feature films the director is God; in documentary films God is the director.\n- Alfred Hitchcock",
  "There's potentially a hundred different ways to shoot something, but at the end of the day there's really only two, and one of them is wrong.\n- David Fincher",
  "If you want a happy ending, that depends, of course, on where you stop your story.\n- Orson Welles",
  "Almost anything can be justified as a style of filmmaking if it works.\n- Doug Liman",
  "Create your own visual style… let it be unique for yourself and yet identifiable to others.\n- Orson Welles",
  "All good ideas start out as bad ideas, that’s why it takes so long.\n- Steven Spielberg",
  "Cinema is a matter of what’s in the frame and what’s out.\n- Martin Scorsese",
  "Filmmaking is the ultimate team sport.\n- Michael Keaton",
  "People will say, ‘There are a million ways to shoot a scene’, but I don’t think so. I think there’re two, maybe. And the other one is wrong.\n- David Fincher",
  "I try to push ideas away, and the ones that will not leave me alone are the ones that ultimately end up happening.\n- J.J. Abrams",
  "I don’t try to guess what a million people will like. It’s hard enough to know what I like.\n- John Huston",
  "Everything about filmmaking tries to distract you from that first fine rapturous vision you have of the film.\n- Ted Kotcheff",
  "Before you say ‘cut’, wait five more seconds.\n- Win Wenders",
  "No one can ever create art, even on a piece of paper, as they have envisioned it in their mind.\n- S. S. Rajamouli",
  "At the end of the day, filmmaking is all about telling stories, and I'm just doing my part.\n- Ishaan Khatter",
  "That's what we storytellers do. We restore order with imagination. We instill hope again and again and again.\n― Kelly Marcel & Sue Smith",
  "One minute, one mirror, one story of an unseen soul.\n– short movie My Mirror, My Only Echo\n― Yvonne Padmos",
  "The only safe thing is to take a chance.\n- Mike Nichols",
  "There are no rules in filmmaking. Only sins. And the cardinal sin is dullness.\n– Frank Capra",
  "The writer, when he is also an artist, is someone who admits what others don’t dare reveal.\n- Elia Kazan",
  "A director must be a policeman, a midwife, a psychoanalyst, a sycophant and a bastard.\n– Billy Wilder",
  "If you have to have a job in this world, a high-priced movie star is a pretty good gig.\n– Tom Hanks",
  "Eighty percent of success is turning up.\n– Woody Allen",
  "We don’t make movies to make money, we make money to make more movies.\n– Walt Disney",
  "I like directors who come on the set and create something that is a little dangerous, difficult, or unusual.\n– Elia Kazan"
];

// AnimatedQuote: Cycles and animates quotes for the overview page.
function AnimatedQuote() {
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [fadeState, setFadeState] = useState('fade-in');

  useEffect(() => {
    let fadeTimeout, nextTimeout;
    if (fadeState === 'fade-in') {
      fadeTimeout = setTimeout(() => setFadeState('show'), 700);
    } else if (fadeState === 'show') {
      nextTimeout = setTimeout(() => setFadeState('fade-out'), 5300);
    } else if (fadeState === 'fade-out') {
      fadeTimeout = setTimeout(() => {
        setQuoteIdx((prev) => (prev + 1) % quotes.length);
        setFadeState('fade-in');
      }, 700);
    }
    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(nextTimeout);
    };
  }, [fadeState, quoteIdx]);

  return (
    <div className={`animated-quote ${fadeState}`} style={{ fontFamily: 'Playfair Display, serif' }}>
      {quotes[quoteIdx].split('\n').map((line, idx) => (
        <span key={idx} style={{ display: 'block', fontSize: idx === 0 ? '1.25rem' : '1.05rem', color: idx === 0 ? '#FFD600' : '#fff', fontWeight: idx === 0 ? 600 : 400, marginBottom: idx === 0 ? '0.5rem' : '0' }}>{line}</span>
      ))}
    </div>
  );
}

// Overview: Main overview page for PESU Talkies, includes club info, quotes, events, and contact form.
const Overview = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const location = useLocation();

  // Add state and logic for cycling contact titles
  const contactTitles = useMemo(() => [
    'Contact Us',
    'Get in Touch',
    'Reach Out',
    'Say Hello',
    'Connect With Us',
    'Drop Us a Message',
    'Let’s Talk',
    'Message Us',
    'Write to Us',
  ], []);
  const contactEmojis = useMemo(() => [
    '📬', // Contact Us
    '🤝', // Get in Touch
    '📞', // Reach Out
    '👋', // Say Hello
    '🔗', // Connect With Us
    '✉️', // Drop Us a Message
    '💬', // Let’s Talk
    '📩', // Message Us
    '📝', // Write to Us
  ], []);
  const [contactTitleIdx, setContactTitleIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setContactTitleIdx((prev) => (prev + 1) % contactTitles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [contactTitles]);

  useEffect(() => {
    AOS.init({ duration: 900, once: false });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Updated handleSubmit for backend integration
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://pesu-talkies-website-q165.onrender.com/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
    });
    // eslint-disable-next-line no-unused-vars
    // const data = await res.json();
    if (res.ok) alert("Message sent! 🎉");
    else alert("Failed to send. Try again.");
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  // Render 30 particles with random positions and sizes
  const particles = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => {
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const size = 6 + Math.random() * 10;
      const delay = Math.random() * 8;
      return (
        <div
          key={i}
          className="particle"
          style={{
            left: `${left}vw`,
            top: `${top}vh`,
            width: `${size}px`,
            height: `${size}px`,
            animationDelay: `${delay}s`,
          }}
        />
      );
    });
  }, []);

  return (
    <>
      <div className="overview-particles-bg">
        {particles}
      </div>
      <div className="about-container">
        <img src={process.env.PUBLIC_URL + '/pesu-talkies-logo.png'} alt="PESU Talkies Logo" className="about-logo" data-aos="zoom-in" />
        <h1 data-aos="fade-up">PESU Talkies</h1>
        <TypewriterMotto />
        <p className="about-description" data-aos="fade-up" data-aos-delay="200">
          The PESU Talkies film club is a community for film enthusiasts who share a passion for storytelling through cinema. We offer a platform for members to showcase their creativity and hone their skills through workshops, screenings, and interactive events. With a focus on promoting diversity and inclusivity in filmmaking, our club welcomes anyone with an interest in cinema, regardless of their background or experience.
        </p>
      <div className="quotes-section" data-aos="fade-up" data-aos-delay="350">
        <h2 className="quotes-heading" style={{color:'#FFD600',marginBottom:'1.2rem',fontWeight:700,letterSpacing:'1px'}}>From The Vault</h2>
        <AnimatedQuote />
      </div>

      {/* Events Section */}
      <div className="events-section" data-aos="fade-up" data-aos-delay="400" style={{justifyContent:'center', flexDirection:'column', alignItems:'center', textAlign:'center'}}>
        <h2 className="events-heading" style={{color:'#FFD600',marginBottom:'1.2rem',fontWeight:700,letterSpacing:'1px', textAlign:'center'}}>Events</h2>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%'}}>
          <button className="events-arrow left" aria-label="Previous Event" disabled>{'<'}</button>
          <div className="events-placards">
            <div className="event-placard">
              <img src={process.env.PUBLIC_URL + '/events/CINIQUIZZ.jpg'} alt="CINIQUIZZ" className="event-poster" style={{objectFit:'contain',background:'#111'}} />
              <div className="event-summary">
                <h3>CINIQUIZ</h3>
                <p>Do you live and breathe cinema? 🎥🎬 Then get ready for a quiz that’ll challenge your movie expertise!</p>
              </div>
            </div>
            <div className="event-placard">
              <img src={process.env.PUBLIC_URL + '/events/POSTER CHRONICLES.jpg'} alt="POSTER CHRONICLES" className="event-poster" style={{objectFit:'contain',background:'#111'}} />
              <div className="event-summary">
                <h3>POSTER CHRONICLES</h3>
                <p>🖌 Create. Compete. Conquer!🎨<br/>The stage is set for your masterpiece.🎬<br/>Participate in the Poster Chronicles and make your mark!🍿<br/>POSTER CHRONICALS’25🎥👨🏼‍🎨<br/>pesutalkies X dsgnr</p>
              </div>
            </div>
            <div className="event-placard">
              <img src={process.env.PUBLIC_URL + '/events/CINIFEST.jpg'} alt="CINEFEST" className="event-poster" style={{objectFit:'contain',background:'#111'}} />
              <div className="event-summary">
                <h3>CINIFEST</h3>
                <p>🎬 PESU Talkies presents Cinifest — a short film competition celebrating creativity and storytelling the PESU way.<br/>✨ Join us for a fun-filled day of short films, games, and cinematic joy.<br/>📷 Showcase your talent and share your stories on the big screen.<br/>🎖 Special guest: National Award-winning filmmaker Mr. ManasoRe.</p>
              </div>
            </div>
          </div>
          <button className="events-arrow right" aria-label="Next Event" disabled>{'>'}</button>
        </div>
      </div>

      <div className="contact-section" data-aos="fade-up" data-aos-delay="500">
  <h3>{contactEmojis[contactTitleIdx]} <span className="contact-title-neon">{contactTitles[contactTitleIdx]}</span></h3>
        <p className="contact-message">
          <span role="img" aria-label="envelope">✉️</span> Have questions, suggestions, or want to join PESU Talkies? Fill out the form below and we’ll get back to you soon!<br/>
          You can also contact us directly at <a href="mailto:pesutalkies@pes.edu" style={{ color: '#FFD600', textDecoration: 'underline', fontWeight: 500 }}>pesutalkies@pes.edu</a>.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required onFocus={() => submitted && setSubmitted(false)} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required onFocus={() => submitted && setSubmitted(false)} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" value={form.message} onChange={handleChange} required onFocus={() => submitted && setSubmitted(false)}></textarea>
          </div>
          <button type="submit" className="contact-submit">Send Message</button>
        </form>
        {submitted && (
          <div className="contact-thankyou"><span role="img" aria-label="celebration">🎉</span> Thank you! Your message has been sent.</div>
        )}
      </div>
    </div>
    </>
  );
};

export default Overview;
