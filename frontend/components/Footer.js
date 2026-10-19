export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3">
            <h5 className="text-white fw-bold">Petits Anges</h5>
            <p>Un lieu chaleureux où chaque enfant grandit en toute sécurité.</p>
          </div>
          <div className="col-md-6 mb-3 text-md-end">
            <a href="#accueil" className="me-3">Accueil</a>
            <a href="#services" className="me-3">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <hr />
        <p className="text-center small mb-0">© 2026 Petits Anges. Tous droits réservés.</p>
      </div>
    </footer>
  );
}