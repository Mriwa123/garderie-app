'use client';
import { useEffect, useState } from 'react';

const serviceIcons = ['bi-sun', 'bi-egg-fried', 'bi-lightbulb'];
const activiteIcons = ['bi-palette', 'bi-music-note-beamed', 'bi-tree'];

export default function Services() {
  const [services, setServices] = useState([]);
  const [activites, setActivites] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/services')
      .then((r) => r.json()).then(setServices).catch(console.error);
    fetch('http://localhost:5000/api/activites')
      .then((r) => r.json()).then(setActivites).catch(console.error);
  }, []);

  return (
    <section className="container py-5" id="services">
      <h2 className="section-title">Nos services</h2>
      <p className="section-sub">Tout pour le bien-être de votre enfant</p>
      <div className="row">
        {services.map((s, i) => (
          <div className="col-md-4 mb-4" key={s.id}>
            <div className="card service-card h-100 text-center">
              <div className="card-body">
                <div className="icon-circle"><i className={`bi ${serviceIcons[i % 3]}`}></i></div>
                <h5 className="fw-bold">{s.titre}</h5>
                <p className="text-muted mb-0">{s.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="section-title mt-5">Nos activités</h2>
      <p className="section-sub">Une journée rythmée par le jeu et la découverte</p>
      <div className="row">
        {activites.map((a, i) => (
          <div className="col-md-4 mb-4" key={a.id}>
            <div className="card service-card h-100 text-center">
              <div className="card-body">
                <div className="icon-circle"><i className={`bi ${activiteIcons[i % 3]}`}></i></div>
                <h5 className="fw-bold">{a.nom}</h5>
                <p className="text-muted mb-0"><i className="bi bi-clock me-1"></i>{a.horaire}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}