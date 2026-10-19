# Garderie App - Petits Anges

Application web pour une garderie d'enfants: landing page responsive connectée à une API REST.

## Technologies utilisées
- Frontend: Next.js (React), Bootstrap 5
- Backend: Node.js, Express, CORS
- Versioning: Git et GitHub

## Structure des dossiers
```
garderie-app/
├── backend/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── app/
│   │   ├── layout.js
│   │   └── page.js
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   └── Services.js
│   └── package.json
└── README.md
```

## Installation et exécution

### 1. Cloner le projet
```bash
git clone https://github.com/Mriwa123/garderie-app.git
cd garderie-app
```

### 2. Backend (port 5000)
```bash
cd backend
npm install
npm start
```

### 3. Frontend (port 3000), dans un autre terminal
```bash
cd frontend
npm install
npm run dev
```
Ouvrir http://localhost:3000

## Documentation des API

Base URL: `http://localhost:5000`

### GET /api/garderie
Informations générales de la garderie.
```json
{
  "nom": "Petits Anges",
  "adresse": "Tunis, Tunisie",
  "telephone": "71 000 000",
  "email": "contact@petitsanges.tn",
  "description": "Une garderie chaleureuse pour enfants de 1 à 6 ans."
}
```

### GET /api/services
Liste des services proposés.
```json
[
  { "id": 1, "titre": "Garde journalière", "description": "Accueil de vos enfants de 7h à 18h." },
  { "id": 2, "titre": "Repas équilibrés", "description": "Des repas sains et variés chaque jour." },
  { "id": 3, "titre": "Éveil pédagogique", "description": "Jeux et activités éducatives adaptés à chaque âge." }
]
```

### GET /api/activites
Liste des activités pour les enfants.
```json
[# garderie-app