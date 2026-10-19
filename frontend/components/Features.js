const items = [
  { icon: 'bi-puzzle-fill', color: '#ff9800', t: 'Jouer & Apprendre', s: 'Apprentissage par le jeu' },
  { icon: 'bi-shield-check', color: '#1e88e5', t: 'Environnement sûr', s: 'Sécurisé et rassurant' },
  { icon: 'bi-people-fill', color: '#1565c0', t: 'Équipe experte', s: 'Éducatrices diplômées' },
  { icon: 'bi-heart-fill', color: '#ff5c9d', t: 'Enfants heureux', s: 'Confiance et créativité' },
];

export default function Features() {
  return (
    <div className="container" id="apropos">
      <div className="features-bar">
        <div className="row">
          {items.map((x) => (
            <div className="col-6 col-md-3 feature-item" key={x.t}>
              <i className={`bi ${x.icon}`} style={{ color: x.color }}></i>
              <h6>{x.t}</h6>
              <small>{x.s}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}