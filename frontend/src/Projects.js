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
  const [page, setPage] = useState(1);
  const [pageAnim, setPageAnim] = useState(false);
  const [slide, setSlide] = useState('slide-in-right');

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

  const FILMS_PER_PAGE = 5;
  const totalPages = Math.ceil(filteredShortFilms.length / FILMS_PER_PAGE);
  const paginatedShortFilms = filteredShortFilms.slice((page - 1) * FILMS_PER_PAGE, page * FILMS_PER_PAGE);

  const handlePrevPage = () => {
    if (page > 1) {
      setSlide('slide-out-right');
      setTimeout(() => {
        setPage((prev) => prev - 1);
        setSlide('slide-in-left');
        setPageAnim(true);
        setTimeout(() => setPageAnim(false), 400);
      }, 350);
    }
  };
  const handleNextPage = () => {
    if (page < totalPages) {
      setSlide('slide-out-left');
      setTimeout(() => {
        setPage((prev) => prev + 1);
        setSlide('slide-in-right');
        setPageAnim(true);
        setTimeout(() => setPageAnim(false), 400);
      }, 350);
    }
  };
  useEffect(() => {
    setPage(1); // Reset to first page on search
    setSlide('slide-in-right');
  }, [searchTerm]);

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
        <ul className={`films-list ${slide}`}>
          {paginatedShortFilms.map(film => (
            <li key={film.slug}>
              <Link className="film-link" to={`/projects/short-films/${film.slug}`}>{film.name}</Link>
            </li>
          ))}
        </ul>
        {filteredShortFilms.length === 0 && searchTerm && (
          <p style={{ color: '#888', fontStyle: 'italic' }}>No short films found matching "{searchTerm}"</p>
        )}
        {filteredShortFilms.length > FILMS_PER_PAGE && (
          <div className="pagination-controls">
            <button onClick={handlePrevPage} disabled={page === 1} className="pagination-arrow">
              &lt;
            </button>
            <span className={`pagination-page${pageAnim ? ' page-number-animate' : ''}`}>
              {page} of {totalPages}
            </span>
            <button onClick={handleNextPage} disabled={page === totalPages} className="pagination-arrow">
              &gt;
            </button>
          </div>
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
