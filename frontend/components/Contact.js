'use client';
import { useEffect, useState } from 'react';

export default function Contact() {
  const [garderie, setGarderie] = useState(null);
  const [envoye, setEnvoye] = useState(false);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/garderie`)
      .then((r) => r.json()).then(setGarderie).catch(console.error);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setEnvoye(true);
  }

  return (
    <section className="py-5" id="contact" style={{ background: 'var(--sky)' }}>
      <div className="container py-4">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <h2 className="fw-bold" style={{ color: 'var(--navy)' }}>
              Restons en <span className="c-pink">contact</span>
            </h2>
            {garderie && (
              <ul className="list-unstyled fs-5 mt-4">
                <li className="mb-3"><i className="bi bi-geo-alt-fill text-danger me-2"></i>{garderie.adresse}</li>
                <li className="mb-3"><i className="bi bi-telephone-fill text-primary me-2"></i>{garderie.telephone}</li>
                <li className="mb-3"><i className="bi bi-envelope-fill text-success me-2"></i>{garderie.email}</li>
              </ul>
            )}
          </div>
          <div className="col-lg-5 ms-auto">
            <div className="tour-card">
              <h3>⭐ Réservez une visite gratuite</h3>
              {envoye ? (
                <div className="alert alert-success mt-3 mb-0">Merci ! Nous vous contactons très vite.</div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-3">
                  <input className="form-control mb-3" placeholder="Votre nom" required />
                  <input type="email" className="form-control mb-3" placeholder="Votre email" required />
                  <input className="form-control mb-3" placeholder="Votre téléphone" required />
                  <button type="submit" className="btn btn-navy">Réserver</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}