'use client';
import { useEffect, useState } from 'react';

export default function Contact() {
  const [garderie, setGarderie] = useState(null);
  const [envoye, setEnvoye] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/api/garderie')
      .then((r) => r.json()).then(setGarderie).catch(console.error);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setEnvoye(true);
  }

  return (
    <section className="py-5 bg-soft" id="contact">
      <div className="container py-4">
        <h2 className="section-title">Contactez-nous</h2>
        <p className="section-sub">Nous répondons sous 24h</p>
        <div className="row g-4">
          <div className="col-lg-5">
            {garderie && (
              <ul className="list-unstyled fs-5">
                <li className="mb-3"><i className="bi bi-geo-alt-fill text-danger me-2"></i>{garderie.adresse}</li>
                <li className="mb-3"><i className="bi bi-telephone-fill text-danger me-2"></i>{garderie.telephone}</li>
                <li className="mb-3"><i className="bi bi-envelope-fill text-danger me-2"></i>{garderie.email}</li>
              </ul>
            )}
          </div>
          <div className="col-lg-7">
            {envoye ? (
              <div className="alert alert-success">Merci ! Votre message a bien été envoyé.</div>
            ) : (
              <form onSubmit={handleSubmit}>
                <input className="form-control mb-3 py-2" placeholder="Votre nom" required />
                <input type="email" className="form-control mb-3 py-2" placeholder="Votre email" required />
                <textarea className="form-control mb-3" rows="4" placeholder="Votre message" required></textarea>
                <button type="submit" className="btn btn-brand">Envoyer</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}