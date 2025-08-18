import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Projects.css';

// shortFilms: List of all short films for the Projects page.
const shortFilms = [
  { name: 'KID-NAF', slug: 'kid-naf', poster: 'Kid-Naf.jpg' },
  { name: 'BHRAME', slug: 'bhrame', poster: 'Bhrame.jpg' },
  { name: 'HA', slug: 'ha', poster: 'Ha.jpg' },
  { name: 'LAST PAGE PREETHI', slug: 'last-page-preethi', poster: 'Last Page Preethi.jpg' },
  { name: 'VAM TV', slug: 'vam-tv', poster: 'VAM TV.jpg' },
  { name: "THE DEVIL'S LULLABY", slug: 'the-devils-lullaby', poster: "The Devil's Lullaby.jpg" },
  { name: 'SAMARPANE', slug: 'samarpane', poster: 'SAMARPANE.jpg' },
  { name: 'SHADOWS', slug: 'shadows', poster: 'Shadows.jpg' },
];

// seriesList: List of all series for the Projects page.
const seriesList = [
  { name: 'MISSED CONNECTIONS IN TAXI', slug: 'missed-connections-in-taxi', poster: 'MISSED CONNECTIONS IN TAXI.jpg' },
];

// Projects: Displays all short films and series with search and navigation functionality.
const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredSeries = seriesList.filter(series =>
    series.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const navigate = useNavigate();
  const filteredShortFilms = shortFilms.filter(film =>
    film.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // ...existing code...

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    AOS.refresh();
  }, []);

  const handleClearSearch = () => setSearchTerm('');

  // ...existing code...

  // Placard click handler
  const handlePlacardClick = (type, slug) => {
    if (type === 'film') navigate(`/projects/short-films/${slug}`);
    else navigate(`/projects/series/${slug}`);
  };

  return (
    <div className="page-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 data-aos="fade-down">Projects</h2>
        <div className="search-container" data-aos="fade-down">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search short films and series..."
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
        {!searchTerm ? (
          <div className="marquee-wrapper">
            <div className="marquee-content">
              {[...shortFilms, ...shortFilms].map((film, idx) => (
                <div
                  key={film.slug + '-' + idx}
                  className="placard marquee-card"
                  onClick={() => handlePlacardClick('film', film.slug)}
                  tabIndex={0}
                  role="button"
                  aria-label={`View details for ${film.name}`}
                >
                  <img
                    src={`/posters/${film.poster}`}
                    alt={film.name + ' poster'}
                    className="placard-poster"
                    loading="lazy"
                  />
                  <div className="placard-title">{film.name}</div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="search-results-container">
            {filteredShortFilms.length > 0 ? (
              filteredShortFilms.map(film => (
                <div
                  key={film.slug}
                  className="placard marquee-card"
                  onClick={() => handlePlacardClick('film', film.slug)}
                  tabIndex={0}
                  role="button"
                  aria-label={`View details for ${film.name}`}
                >
                  <img
                    src={`/posters/${film.poster}`}
                    alt={film.name + ' poster'}
                    className="placard-poster"
                    loading="lazy"
                  />
                  <div className="placard-title">{film.name}</div>
                </div>
              ))
            ) : (
              <p style={{ color: '#888', fontStyle: 'italic' }}>No short films found matching "{searchTerm}"</p>
            )}
          </div>
        )}
      </div>

      <div className="series-section" data-aos={searchTerm ? "" : "fade-up"} data-aos-delay={searchTerm ? "" : "200"}>
        <h3>Series</h3>
        <div className="placards-container">
          {filteredSeries.map(series => (
            <div
              key={series.slug}
              className="placard marquee-card"
              onClick={() => handlePlacardClick('series', series.slug)}
              tabIndex={0}
              role="button"
              aria-label={`View details for ${series.name}`}
            >
              <img
                src={`/posters/${series.poster}`}
                alt={series.name + ' poster'}
                className="placard-poster"
                loading="lazy"
              />
              <div className="placard-title">{series.name}</div>
            </div>
          ))}
        </div>
        {filteredSeries.length === 0 && searchTerm && (
          <p style={{ color: '#888', fontStyle: 'italic' }}>No series found matching "{searchTerm}"</p>
        )}
      </div>
    </div>
  );
};

export default Projects;
