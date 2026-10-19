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
    <nav className="navbar navbar-expand-lg navbar-kids navbar-dark sticky-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#accueil">
          <img
            src="/images/logo.png"
            alt="Logo Petits Anges"
            width="46"
            height="46"
            className="me-2 rounded-circle"
            style={{ objectFit: 'cover', background: '#fff' }}
          />
          {nom}
        </a>
        <button className="navbar-toggler" type="button"
          data-bs-toggle="collapse" data-bs-target="#menu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav mx-auto align-items-lg-center">
            <li className="nav-item"><a className="nav-link" href="#accueil">Accueil</a></li>
            <li className="nav-item"><a className="nav-link" href="#apropos">À propos</a></li>
            <li className="nav-item"><a className="nav-link" href="#services">Programmes</a></li>
            <li className="nav-item"><a className="nav-link"