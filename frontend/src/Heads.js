import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Heads.css';

// domainHeads: List of all domain heads with their domains and slugs.
const domainHeads = [
  { domain: 'Acting', heads: [{ name: 'Archi', slug: 'archi' }] },
  { domain: 'Marketing', heads: [{ name: 'Mayur', slug: 'mayur' }] },
  { domain: 'Cinematography', heads: [{ name: 'Rishi', slug: 'rishi' }] },
  { domain: 'Content', heads: [{ name: 'Sourish', slug: 'sourish' }] },
  { domain: 'Cultural', heads: [{ name: 'Yatharth', slug: 'yatharth' }] },
  { domain: 'Direction', heads: [{ name: 'Somesh', slug: 'somesh' }] },
  { domain: 'Design', heads: [{ name: 'Baasanthi', slug: 'baasanthi' }] },
  { domain: 'Editing', heads: [
    { name: 'Pratham', slug: 'pratham' },
  ] },
  { domain: 'Production', heads: [
    { name: 'Apurv', slug: 'apurv' },
    { name: 'Kushal', slug: 'kushal' },
  ] },
  { domain: 'Operations', heads: [{ name: 'Vineeth', slug: 'vineeth' }] },
  { domain: 'Social media', heads: [{ name: 'Bhanavi', slug: 'bhanavi' }] },
];

// clubHeads: List of all club heads with their slugs.
const clubHeads = [
  { name: 'Jayaram', slug: 'jayaram' },
  { name: 'Sharvani', slug: 'sharvani' },
  { name: 'Saumyaa', slug: 'saumyaa' },
  { name: 'Yatharth', slug: 'yatharth' },
];

// Heads: Displays all domain and club heads with navigation links.
const Heads = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: false });
    AOS.refresh();
  }, []);

  // Sort domainHeads by domain name
  const sortedDomainHeads = [...domainHeads].sort((a, b) => a.domain.localeCompare(b.domain));
  // Sort clubHeads by name
  const sortedClubHeads = [...clubHeads].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="page-container">
      <h2 data-aos="fade-down">Domain Heads</h2>
      <ul className="domain-heads-list" data-aos="fade-up">
        {sortedDomainHeads.map(({ domain, heads }) => (
          <li key={domain}>
            <strong>{domain}:</strong>{' '}
            {heads.map((head, idx) => (
              <span key={head.slug}>
                <Link className="film-link" to={`/heads/${head.slug}`}>{head.name}</Link>
                {idx < heads.length - 1 ? ', ' : ''}
              </span>
            ))}
          </li>
        ))}
      </ul>
      <h2 style={{ marginTop: '2.5rem' }} data-aos="fade-down">Club Heads</h2>
      <ul className="club-heads-list" data-aos="fade-up">
        {sortedClubHeads.map(head => (
          <li key={head.slug}>
            <Link className="film-link" to={`/heads/${head.slug}`}>{head.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Heads;