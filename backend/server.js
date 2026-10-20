const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/garderie', (req, res) => {
  res.json({
    nom: 'Petits Anges',
    adresse: 'Tunis, Tunisie',
    telephone: '71 000 000',
    email: 'contact@petitsanges.tn',
    description: "Une garderie chaleureuse pour enfants de 1 à 6 ans."
  });
});

app.get('/api/services', (req, res) => {
  res.json([
    { id: 1, titre: 'Garde journalière', description: 'Accueil de vos enfants de 7h à 18h.' },
    { id: 2, titre: 'Repas équilibrés', description: 'Des repas sains et variés chaque jour.' },
    { id: 3, titre: 'Éveil pédagogique', description: 'Jeux et activités éducatives adaptés à chaque âge.' }
  ]);
});

app.get('/api/activites', (req, res) => {
  res.json([
    { id: 1, nom: 'Peinture', horaire: '9h00' },
    { id: 2, nom: 'Musique et chants', horaire: '11h00' },
    { id: 3, nom: 'Jeux en plein air', horaire: '15h00' }
  ]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API sur http://localhost:${PORT}`));