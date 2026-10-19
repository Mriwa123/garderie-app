'use client';
import { useEffect, useState } from 'react';

export default function Services() {
  const [services, setServices] = useState([]);
  const [activites, setActivites] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/services')
      .then((r) => r.json())
      .then(setServices)
      .catch(console.error);
    fetch('http://localhost:5000/api/activites')
      .then((r) => r.json())
      .then(setActivites)
      .catch(console.error);
  }, []);

  return (
    <section className="container py-5" id="services">
      <h2 className="text-center mb-4">Nos services</h2>
      <div className="row">
        {services.map((s) => (
          <div className="col-md-4 mb-3" key={s.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">{s.titre}</h5>
                <p className="card-text">{s.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-center mt-5 mb-4">Nos activités</h2>
      <div className="row">
        {activites.map((a) => (
          <div className="col-md-4 mb-3" key={a.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">{a.nom}</h5>
                <p className="card-text">{a.horaire}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}