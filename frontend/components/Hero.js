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
    <section className="bg-light py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <h1 className="display-4 fw-bold">
              Bienvenue chez {garderie ? garderie.nom : '...'}
            </h1>
            <p className="lead">
              {garderie ? garderie.description : 'Chargement...'}
            </p>
            <a href="#services" className="btn btn-primary btn-lg">
              Découvrir nos services
            </a>
          </div>
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800"
              alt="Enfants qui jouent"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}