import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// domains: List of all club domains.
const domains = [
  { name: 'MARKETING', slug: 'marketing' },
  { name: 'ACTING', slug: 'acting' },
  { name: 'PRODUCTION', slug: 'production' },
  { name: 'SOCIAL MEDIA', slug: 'social-media' },
  { name: 'DESIGN', slug: 'design' },
  { name: 'DIRECTION', slug: 'direction' },
  { name: 'CONTENT', slug: 'content' },
  { name: 'EDITING', slug: 'editing' },
  { name: 'CINEMATOGRAPHY', slug: 'cinematography' },
  { name: 'OPERATIONS', slug: 'operations' },
  { name: 'CULTURAL', slug: 'cultural' },
];

const sortedDomains = [...domains].sort((a, b) => a.name.localeCompare(b.name));

// Domains: Displays all club domains with navigation links.
const Domains = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: false });
    AOS.refresh();
  }, []);

  return (
    <div className="page-container">
      <h2 data-aos="fade-down">Domains</h2>
      <ul className="domain-heads-list" style={{ marginTop: '2rem' }} data-aos="fade-up">
        {sortedDomains.map(domain => (
          <li key={domain.slug}>
            <Link className="film-link" to={`/domains/${domain.slug}`}>{domain.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Domains;