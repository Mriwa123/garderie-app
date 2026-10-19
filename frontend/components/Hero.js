export default function Hero() {
  return (
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
  );
}