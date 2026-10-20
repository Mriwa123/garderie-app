'use client';
import { useEffect, useState } from 'react';

const styles = [
  { cls: 'p-yellow', emoji: '🐯' },
  { cls: 'p-blue', emoji: '🐰' },
  { cls: 'p-pink', emoji: '🐘' },
  { cls: 'p-green', emoji: '🦛' },
];

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services`)
      .then((r) => r.json()).then(setServices).catch(console.error);
  }, []);

  return (
    <section className="container py-5" id="services">
      <h2 className="title-kids">Nos services</h2>
      <p className="sub-kids">Tout pour le bien-être de votre enfant</p>
      <div className="row g-4">
        {services.map((s, i) => (
          <div className="col-md-6 col-lg-4" key={s.id}>
            <div className={`program-card ${styles[i % 4].cls}`}>
              <div className="emoji">{styles[i % 4].emoji}</div>
              <h5>{s.titre}</h5>
              <p className="text-muted mb-0">{s.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}