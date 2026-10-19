'use client';
import { useEffect, useState } from 'react';

const looks = [
  { bg: '#ffd54f', emoji: '🎨' },
  { bg: '#ff8ab8', emoji: '🎵' },
  { bg: '#9be37a', emoji: '🛝' },
  { bg: '#80d8ff', emoji: '📚' },
];

export default function Activities() {
  const [activites, setActivites] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/activites')
      .then((r) => r.json()).then(setActivites).catch(console.error);
  }, []);

  return (
    <section className="activities" id="activites">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-4">
            <h2 className="fw-bold">Activités amusantes, apprentissage heureux</h2>
            <p>Chaque activité est un pas de plus vers l'épanouissement.</p>
            <a href="#contact" className="btn btn-yellow">Nous contacter</a>
          </div>
          <div className="col-lg-8">
            <div className="row text-center g-3">
              {activites.map((a, i) => (
                <div className="col-6 col-md-4" key={a.id}>
                  <div className="activity-circle" style={{ background: looks[i % 4].bg }}>
                    {looks[i % 4].emoji}
                  </div>
                  <h6 className="fw-bold mb-0">{a.nom}</h6>
                  <small>{a.horaire}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}