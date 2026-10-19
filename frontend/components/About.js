export default function About() {
  const stats = [
    { n: '10+', t: "Années d'expérience" },
    { n: '120', t: 'Enfants accueillis' },
    { n: '15', t: 'Éducatrices diplômées' },
    { n: '100%', t: 'Parents satisfaits' },
  ];

  return (
    <section className="py-5 bg-soft" id="apropos">
      <div className="container py-4">
        <h2 className="section-title">Pourquoi nous choisir ?</h2>
        <p className="section-sub">Un environnement sûr, stimulant et plein d'amour</p>
        <div className="row text-center">
          {stats.map((s) => (
            <div className="col-6 col-md-3 mb-4 stat" key={s.t}>
              <h3 className="display-5">{s.n}</h3>
              <p className="text-muted">{s.t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}