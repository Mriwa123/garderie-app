'use client';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [garderie, setGarderie] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/garderie')
      .then((r) => r.json())
      .then(setGarderie)
      .catch(console.error);
  }, []);

  return (
    <section className="hero" id="accueil">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <span className="badge rounded-pill text-bg-light mb-3 px-3 py-2">
              <i className="bi bi-heart-fill text-danger me-1"></i> Garderie agréée
            </span>
            <h1 className="display-4">
              Bienvenue chez <span className="highlight">{garderie ? garderie.nom : '...'}</span>
            </h1>
            <p className="lead my-4">
              {garderie ? garderie.description : 'Chargement...'}
            </p>
            <a href="#services" className="btn btn-brand btn-lg">Nos services</a>
          </div>
          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800"
              alt="Enfants qui jouent"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}