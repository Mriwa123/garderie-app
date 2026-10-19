export default function Services() {
  return (
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
  );
}