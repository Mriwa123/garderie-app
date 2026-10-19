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
    <section className="hero-kids" id="accueil">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <div className="hero-text">
              <h1>
                Là où les petits esprits{' '}
                <span className="c-yellow">grandissent</span> vers de{' '}
                <span className="c-pink">grands rêves</span>
              </h1>
              <p className="my-4 text-muted">
                {garderie ? garderie.description : 'Chargement...'}
              </p>
              <a href="#services" className="btn btn-yellow me-2 mb-2">
                Découvrir <i className="bi bi-arrow-right"></i>
              </a>
              <a href="#contact" className="btn btn-outline-blue mb-2">
                <i className="bi bi-play-circle-fill me-1"></i> Nous contacter
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <img
  src="/images/hero.jpg"
  alt="Notre garderie"
  className="hero-img"
  style={{ objectFit: 'cover', maxHeight: 420 }}
/>
          </div>
        </div>
      </div>
      <div className="wave-bottom">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" width="100%" height="80">
          <path fill="#ffffff" d="M0,40 C240,100 480,0 720,40 C960,80 1200,10 1440,50 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}