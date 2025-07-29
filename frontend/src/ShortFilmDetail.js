import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// filmData: Contains details for all short films.
const filmData = {
  'kid-naf': {
    name: 'KID-NAF',
    releaseDate: '7th April 2025',
    story: `KID-NAF is comedy movie where three characters are stuck in a situation as police is chasing them. They encounter the police near a van and find that police are trying to search their fourth friend basava. All the four would have had a party last night and basava is missing from then. Now the three friends trick the police and escape. While the fourth friend is in the van they were near.`,
    crew: `Director : Jayaram Devraj\nCinematography: Harshith\nEditing : Yogith Aras\nSound Design : Bhuvanesh`,
    cast: `Shreyas Krishna, Jatin Poojari, Abhay Bhargav, Aprameya Pradeep, Yatharth`,
    watchUrl: 'https://www.youtube.com/watch?v=kEhPlUJYwgI&t=76s',
  },
  'bhrame': {
    name: 'BHRAME',
    releaseDate: '26th March 2025',
    story: `When Meghna begins to suspect that her husband Bharat isn’t the man he claims to be, her growing obsession with uncovering the truth pulls her into a haunting spiral — threatening not just her marriage, but her grip on\u00a0reality\u00a0itself.`,
    crew: `Director: Yogith Aras\nCinematography : Bhuvanesh\nEditing: Surya P`,
    cast: `Poorvi, Aprameya Pradeep, Preetham, Abhay Bhargav, Saumya Seth, Archi Pankaj, Sharvani Peri, Mohithanjan,Sreenivas.`,
    watchUrl: '',
  },
  'ha': {
    name: 'HA',
    releaseDate: '26th March 2025',
    story: `When siblings Ajay and Divya are trapped in a mysterious time loop, each reset demands a painful sacrifice. As they fight to break free, they discover that time is not just repeating — it’s\u00a0remembering.`,
    crew: `Director: Yogith Aras\nWitten by : Yogith Aras & Rahul\nCinematography: Bhuvanesh\nEditing: Pratham UN\nSound Design : Pranshu Acharya`,
    cast: `Rohan Acharya, Shreeya, Yatharth, Saumyaa Seth, Gopika, Paanya, Nithyashree`,
    watchUrl: '',
  },
  'vam-tv': {
    name: 'VAM TV',
    releaseDate: '31st October 2024',
    story: `An exclusive Halloween special from the makers of 'The Devil's Lullaby'. Trick or Treat!\n\n `,
    crew: `Written and Directed by - Someshvar V\nEditing and DOP- Surya P\nCinematography - Suraj J Kumar\nColouring - Surya P\nPoster Credits - Surya P`,
    cast: `Ananya Sogali, Amrutha, Sai Mayithiri, Someshvar`,
    watchUrl: 'https://www.youtube.com/watch?v=VqaxD75Ln0A',
  },
  'the-devils-lullaby': {
    name: "THE DEVIL'S LULLABY",
    releaseDate: '27th April 2024',
    story: `Inspired from the original story 'Dear Brother' written by Someshvar, this short film revolves around the lives of two brothers, separated by circumstances, but brought together by fate.\n\nWitness the clash of evil v/s evil, a visual spectacle and mind-bending story of 'The Devil's Lullaby'`,
    crew: `Written and Directed by -  Someshvar V\nCinematography - Surya P\nEditing, Sound Design - Surya P\nPoster Credits - Surya P`,
    cast: `Suraj VJ, Pranav Surya, Abhay, Shreeya, Sharvani, Preetham, Yatharth, Shreyas, Chirantan, Yeshwanth`,
    trailerUrl: 'https://www.youtube.com/watch?v=FcRCPq5syoY',
    watchUrl: 'https://www.youtube.com/watch?v=S9dSj_tIPEA',
  },
  'shadows': {
    name: 'SHADOWS',
    releaseDate: '11th August 2023',
    story: `"Shadows" is a psychological horror short film that follows Aprameya as he returns home and encounters unsettling phenomena. In his house, Aprameya senses something amiss, a lurking presence, mysterious movements, and whispers from the darkness.`,
    crew: `Written and Directed by - Dharan Shetty\nCinematography - Dinesh Kumar and Adith Rajeev\nAssociate - Manthan B T\nEditing, Sound Design, Music by – Dharan Shetty\nCo-editors - Karan Hathwar, Nishant\nColouring - Vishal Setty\nPoster Credits - Shubhaashini B`,
    cast: `Aprameya Pradeep, Khushi Jayaprakash`,
    trailerUrl: 'https://www.youtube.com/watch?v=Fbk-SkXZ2lM',
    watchUrl: 'https://www.youtube.com/watch?v=s73U0ZqSHf0',
  },
  'last-page-preethi': {
    name: 'LAST PAGE PREETHI',
    releaseDate: '14th February 2025',
    story: `In a world of words, Yogith, an extroverted boy, meets Swathi, a quiet and introverted girl, and their love story begins without a single word spoken. Through fleeting glances, shared moments, and silent understanding, they discover a love that speaks louder than any words\u00a0ever\u00a0could.`,
    crew: `Director: Yogith Aras\nCinematography : Bhuvanesh\nEditing: Vishwanathan`,
    cast: `Jayaram D, Archi Pankaj, Aprameya Pradeep, Satvik, Akshaya, Krisha, Sharvani Peri, Sourish Joshi, Ishika`,
    watchUrl: '',
  },
  'samarpane': {
    name: 'SAMARPANE',
    releaseDate: '15th November 2023',
    story: `As the country demands its bravest, three lives — a loyal soldier named Bharat, his young sister Thrisha, and his fearless girlfriend Indira — are thrown into separate storms of sacrifice. Each must battle their own fate for the nation, and\u00a0for\u00a0each\u00a0other.`,
    crew: `Director: Yogith Aras\nAssistant Director: Naveen & Tarun\nCinematography: Nishith Ashok\nEditing: Nishith Ashok`,
    cast: `Adith Rajeev, Aditya Holla, Aarya, Aprameya Pradeep, Druva Murali, Hemanth Patel, K G Chiranjeev, Kripa Prabhu, Krishna S, Naveen Kumar, Nithyashree S, Omkar Jois, Panya Ravi, Rohan Acharya, Samanvitha J, Shashank Rao, Shashwath, Shikhar Jaiswal, Shreehas Adusumilli, Shreyas N, Skanda B, Skanda C A, Sreehas Adusumilli, Tanmay G, Tarun Ramanujan, Varshini Viswanath, Viha Nagarkatti`,
    watchUrl: '',
  },
};

const posterMap = {
  'kid-naf': 'Kid-Naf.jpg',
  'bhrame': 'Bhrame.jpg',
  'ha': 'Ha.jpg',
  'last-page-preethi': 'Last Page Preethi.jpg',
  'vam-tv': 'VAM TV.jpg',
  'the-devils-lullaby': "The Devil's Lullaby.jpg",
  'shadows': 'Shadows.jpg',
  'samarpane': 'SAMARPANE.jpg',
};

// formatStory: Formats the story text for display in the film detail page.
const formatStory = (story) => {
  return story.split('\n').map((line, idx) =>
    line.trim() === '---' ? <hr key={idx} /> : <p key={idx}>{line}</p>
  );
};

// ShortFilmDetail: Displays details for a selected short film, including premise, crew, cast, and poster.
const ShortFilmDetail = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: false });
    AOS.refresh();
  }, []);

  const { slug } = useParams();
  const film = filmData[slug];

  // Detect mobile screen
  const isMobile = window.innerWidth <= 700;

  if (!film) {
    return (
      <div className="page-container">
        <Link to="/projects" style={{ color: '#FFD600', textDecoration: 'none', fontWeight: 'bold' }} data-aos="fade-down">&larr; Back to Projects</Link>
        <h2 style={{ color: '#FFD600', marginTop: '1.5rem' }} data-aos="fade-up">Film Not Found</h2>
      </div>
    );
  }

  return (
    <div className="page-container">
      <Link to="/projects" style={{ color: '#FFD600', textDecoration: 'none', fontWeight: 'bold' }} data-aos="fade-down">&larr; Back to Projects</Link>
      <h2 style={{ color: '#FFD600', marginTop: '1.5rem' }} data-aos="fade-down">{film.name}</h2>
      {/* Desktop/Laptop layout */}
      {!isMobile ? (
        <div className="film-detail-flex" style={{ marginTop: '1.5rem', background: '#181818', borderRadius: 16, padding: '1.5rem 1.2rem', color: '#fff' }} data-aos="fade-up">
          <div className="film-detail-info">
            <p><strong>Release Date:</strong> <span style={{ color: '#FFD600' }}>{film.releaseDate}</span></p>
            <div><strong>Premise:</strong> {formatStory(film.story)}</div>
            {film.crew && (
              <div style={{ marginTop: '1.2rem' }}><strong>Crew:</strong><br />{film.crew.split('\n').map((line, idx) => <span key={idx}>{line}<br /></span>)}</div>
            )}
            {film.cast && (
              <div style={{ marginTop: '1.2rem' }}><strong>Cast:</strong><br />{film.cast.split('\n').map((line, idx) => <span key={idx}>{line}<br /></span>)}</div>
            )}
            {film.trailerUrl && (
              <p style={{ marginTop: '1.2rem' }}><strong>Teaser:</strong> <a href={film.trailerUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#FFD600', textDecoration: 'underline', fontWeight: 'bold' }}>Click here to watch teaser</a></p>
            )}
            <p><strong>Watch:</strong> <a href={film.watchUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#FFD600', textDecoration: 'underline', fontWeight: 'bold' }}>Click here to watch</a></p>
          </div>
          {posterMap[slug] && (
            <div className="film-poster-screen">
              <div className="film-screen-curtain">
                <img
                  src={process.env.PUBLIC_URL + '/posters/' + posterMap[slug]}
                  alt={film.name + ' Poster'}
                  className="film-screen-img"
                />
              </div>
            </div>
          )}
        </div>
      ) : (
        // Mobile layout: poster between Premise and Crew
        <div className="film-detail-flex" style={{ flexDirection: 'column', marginTop: '1.5rem', background: '#181818', borderRadius: 16, padding: '1.5rem 1.2rem', color: '#fff' }} data-aos="fade-up">
          <div className="film-detail-info">
            <p><strong>Release Date:</strong> <span style={{ color: '#FFD600' }}>{film.releaseDate}</span></p>
            <div><strong>Premise:</strong> {formatStory(film.story)}</div>
          </div>
          {posterMap[slug] && (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '1.2rem 0' }}>
              <div style={{ border: '3px solid #FFD600', borderRadius: '10px', boxShadow: '0 4px 24px #FFD60055', background: '#222', display: 'inline-block', width: '180px', height: '260px', padding: 0, overflow: 'hidden' }}>
                <img
                  src={process.env.PUBLIC_URL + '/posters/' + posterMap[slug]}
                  alt={film.name + ' Poster'}
                  style={{ display: 'block', borderRadius: '7px', width: '100%', height: '100%', objectFit: 'cover', boxShadow: 'none', margin: 0 }}
                />
              </div>
            </div>
          )}
          <div className="film-detail-info">
            {film.crew && (
              <div style={{ marginTop: '1.2rem' }}><strong>Crew:</strong><br />{film.crew.split('\n').map((line, idx) => <span key={idx}>{line}<br /></span>)}</div>
            )}
            {film.cast && (
              <div style={{ marginTop: '1.2rem' }}><strong>Cast:</strong><br />{film.cast.split('\n').map((line, idx) => <span key={idx}>{line}<br /></span>)}</div>
            )}
            {film.trailerUrl && (
              <p style={{ marginTop: '1.2rem' }}><strong>Teaser:</strong> <a href={film.trailerUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#FFD600', textDecoration: 'underline', fontWeight: 'bold' }}>Click here to watch teaser</a></p>
            )}
            <p><strong>Watch:</strong> <a href={film.watchUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#FFD600', textDecoration: 'underline', fontWeight: 'bold' }}>Click here to watch</a></p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShortFilmDetail;
