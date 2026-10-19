export default function Home() {
  return (
    <>
      {/* NAVBAR */}
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
            Petits Anges
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

      {/* HERO */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <h1 className="display-4 fw-bold">Bienvenue chez Petits Anges</h1>
              <p className="lead">
                Une garderie chaleureuse où vos enfants jouent, apprennent et grandissent
                en toute sécurité.
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

      {/* SERVICES */}
      <section className="container py-5" id="services">
        <h2 className="text-center mb-4">Nos services</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Garde journalière</h5>
                <p className="card-text">Accueil de vos enfants de 7h à 18h.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Repas équilibrés</h5>
                <p className="card-text">Des repas sains et variés chaque jour.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Éveil pédagogique</h5>
                <p className="card-text">Jeux et activités éducatives adaptés à chaque âge.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}