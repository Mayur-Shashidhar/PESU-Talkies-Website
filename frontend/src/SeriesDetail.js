import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// seriesData: Contains details for all series.
const seriesData = {
  'missed-connections-in-taxi': {
    name: 'MISSED CONNECTIONS IN TAXI',
    releaseDate: '2025',
    story: `In a city of chaos and cabs, two strangers reach for the same ride — and miss it. But sometimes, a missed cab can lead to a story worth catching.`,
    crew: `Written & Directed by: Mohithanjan\nAssistant Director & DOP: Rishi Bharadwaj\nProduction Design: Snigdha Bhattacharya, Avanish Karthikeyan\nStyling & Storyboarding: Pulkit Handa\nEditing: Jagadeeshwar\nDubbing & Mixing: Mohithanjan`,
    cast: `Ananya P Sogali, Anthariksh, Jatin Poojari`,
    episodes: [
      { title: 'Episode 1 : First meet', url: 'https://www.instagram.com/pesutalkies/reel/DLrr_CQSb85/' },
      { title: 'Episode 2 : Just Miss', url: 'https://www.instagram.com/pesutalkies/reel/DL1_DIZSe4E/' },
      { title: 'Episode 3 : Day Out', url: 'https://www.instagram.com/pesutalkies/reel/DL9taQSSyXX/' },
      { title: 'Episode 4 : Endless Step', url: 'https://www.instagram.com/pesutalkies/reel/DMIApLgSFPK/' },
      { title: 'Behind the Scenes (BTS)', url: 'https://www.instagram.com/p/DMNKPDlSKM4/' },
    ],
  },
};

// formatStory: Formats the story text for display in the series detail page.
const formatStory = (story) => {
  return story.split('\n').map((line, idx) => <p key={idx}>{line}</p>);
};

// SeriesDetail: Displays details for a selected series, including premise, crew, cast, and episodes.
const SeriesDetail = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: false });
    AOS.refresh();
  }, []);

  const { slug } = useParams();
  const series = seriesData[slug];

  if (!series) {
    return (
      <div className="page-container">
        <Link to="/projects" style={{ color: '#FFD600', textDecoration: 'none', fontWeight: 'bold' }} data-aos="fade-down">&larr; Back to Projects</Link>
        <h2 style={{ color: '#FFD600', marginTop: '1.5rem' }} data-aos="fade-up">Series Not Found</h2>
      </div>
    );
  }

  return (
    <div className="page-container">
      <Link to="/projects" style={{ color: '#FFD600', textDecoration: 'none', fontWeight: 'bold' }} data-aos="fade-down">&larr; Back to Projects</Link>
      <h2 style={{ color: '#FFD600', marginTop: '1.5rem' }} data-aos="fade-down">{series.name}</h2>
      <div className="film-detail-flex" style={{ marginTop: '1.5rem', background: '#181818', borderRadius: 16, padding: '1.5rem 1.2rem', color: '#fff' }} data-aos="fade-up">
        <div className="film-detail-info">
          <p><strong>Release Date:</strong> <span style={{ color: '#FFD600' }}>{series.releaseDate || '[TBA]'}</span></p>
          <div><strong>Premise:</strong> {formatStory(series.story)}</div>
          {slug === 'missed-connections-in-taxi' && series.crew && (
            <div style={{ marginTop: '1.2rem' }}><strong>Crew:</strong><br />{series.crew.split('\n').map((line, idx) => <span key={idx}>{line}<br /></span>)}</div>
          )}
          {slug === 'missed-connections-in-taxi' && series.cast && (
            <div style={{ marginTop: '1.2rem' }}><strong>Cast:</strong><br />{series.cast.split('\n').map((line, idx) => <span key={idx}>{line}<br /></span>)}</div>
          )}
          {series.episodes && (
            <div style={{ marginTop: '1.2rem' }}>
              <strong>Episodes:</strong>
              <ul style={{ margin: '0.5rem 0 0 1rem', padding: 0 }}>
                {series.episodes.map((ep, idx) => (
                  <li key={idx} style={{ marginBottom: '0.5rem' }}>
                    <a href={ep.url} target="_blank" rel="noopener noreferrer" style={{ color: '#FFD600', textDecoration: 'underline', fontWeight: 'bold' }}>{ep.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {slug === 'missed-connections-in-taxi' && (
          <div className="film-poster-screen">
            <div className="film-screen-curtain">
              <img
                src={process.env.PUBLIC_URL + '/posters/MISSED CONNECTIONS IN TAXI.jpg'}
                alt={series.name + ' Poster'}
                className="film-screen-img"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SeriesDetail;