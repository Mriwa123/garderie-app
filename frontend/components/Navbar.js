'use client';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [nom, setNom] = useState('Petits Anges');

  useEffect(() => {
    fetch('http://localhost:5000/api/garderie')
      .then((r) => r.json())
      .then((g) => setNom(g.nom))
      .catch(console.error);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3069/3069172.png"
            alt="logo"
            width="40"
            height="40"
            className="me-2"
          />
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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#">Accueil</a></li>
            <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}