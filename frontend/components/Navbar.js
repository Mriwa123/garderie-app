'use client';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [nom, setNom] = useState('Petits Anges');

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/garderie`)
      .then((r) => r.json())
      .then((g) => setNom(g.nom))
      .catch(console.error);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-kids navbar-dark sticky-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#accueil">
          <span
            className="me-2 d-flex align-items-center justify-content-center rounded-circle"
            style={{ width: 46, height: 46, background: '#ffc928', color: '#1f3a8a', fontSize: '1.5rem' }}
          >
            <i className="bi bi-balloon-heart-fill"></i>
          </span>
          {nom}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav mx-auto align-items-lg-center">
            <li className="nav-item"><a className="nav-link" href="#accueil">Accueil</a></li>
            <li className="nav-item"><a className="nav-link" href="#apropos">À propos</a></li>
            <li className="nav-item"><a className="nav-link" href="#services">Programmes</a></li>
            <li className="nav-item"><a className="nav-link" href="#activites">Activités</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
          <a className="btn btn-yellow" href="#contact">
            Inscription <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}