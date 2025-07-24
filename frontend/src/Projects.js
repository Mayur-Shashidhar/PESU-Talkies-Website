import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// shortFilms: List of all short films for the Projects page.
const shortFilms = [
  { name: 'KID-NAF', slug: 'kid-naf' },
  { name: 'BHRAME', slug: 'bhrame' },
  { name: 'HA', slug: 'ha' },
  { name: 'LAST PAGE PREETHI', slug: 'last-page-preethi' },
  { name: 'VAM TV', slug: 'vam-tv' },
  { name: "THE DEVIL'S LULLABY", slug: 'the-devils-lullaby' },
  { name: 'SAMARPANE', slug: 'samarpane' },
  { name: 'SHADOWS', slug: 'shadows' },
];

// seriesList: List of all series for the Projects page.
const seriesList = [
  { name: 'MISSED CONNECTIONS IN TAXI', slug: 'missed-connections-in-taxi' },
];

// Projects: Displays all short films and series with search and navigation functionality.
const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    AOS.init({ duration: 900, once: false });
    AOS.refresh();
  }, []);

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  const filteredShortFilms = shortFilms.filter(film =>
    film.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredSeries = seriesList.filter(series =>
    series.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 data-aos="fade-down">Projects</h2>
        <div className="search-container" data-aos="fade-down">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search films and series..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button
                onClick={handleClearSearch}
                className="clear-button"
                title="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>
      
      <div className="films-section" data-aos={searchTerm ? "" : "fade-up"}>
        <h3>Short Films</h3>
        <ul className="films-list">
          {filteredShortFilms.map(film => (
            <li key={film.slug}>
              <Link className="film-link" to={`/projects/short-films/${film.slug}`}>{film.name}</Link>
            </li>
          ))}
        </ul>
        {filteredShortFilms.length === 0 && searchTerm && (
          <p style={{ color: '#888', fontStyle: 'italic' }}>No short films found matching "{searchTerm}"</p>
        )}
      </div>
      
      <div className="series-section" data-aos={searchTerm ? "" : "fade-up"} data-aos-delay={searchTerm ? "" : "200"}>
        <h3>Series</h3>
        <ul className="series-list">
          {filteredSeries.map(series => (
            <li key={series.slug}>
              <Link className="film-link" to={`/projects/series/${series.slug}`}>{series.name}</Link>
            </li>
          ))}
        </ul>
        {filteredSeries.length === 0 && searchTerm && (
          <p style={{ color: '#888', fontStyle: 'italic' }}>No series found matching "{searchTerm}"</p>
        )}
      </div>
    </div>
  );
};

export default Projects;