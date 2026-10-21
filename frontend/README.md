# Garderie App - Petits Anges

Application web pour une garderie d'enfants : landing page responsive connectée à une API REST.

## Technologies utilisées
- Frontend : Next.js (React), Bootstrap 5, Bootstrap Icons
- Backend : Node.js, Express, CORS
- Versioning : Git et GitHub
- Déploiement : Ubuntu 22.04 (VMware), PM2, Nginx

## Structure des dossiers
```
garderie-app/
├── backend/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── app/
│   │   ├── layout.js
│   │   ├── page.js
│   │   └── globals.css
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── Features.js
│   │   ├── Services.js
│   │   ├── Activities.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── public/images/hero.jpg
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
Créer le fichier `frontend/.env.local` :
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```
Puis :
```bash
cd frontend
npm install
npm run dev
```
Ouvrir http://localhost:3000

## Documentation des API

Base URL : `http://localhost:5000`

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
[
  { "id": 1, "nom": "Peinture", "horaire": "9h00" },
  { "id": 2, "nom": "Musique et chants", "horaire": "11h00" },
  { "id": 3, "nom": "Jeux en plein air", "horaire": "15h00" }
]
```

## Déploiement

Application hébergée sur une machine virtuelle Ubuntu 22.04 (VMware) :
- Backend Express géré par PM2 (port 5000)
- Frontend Next.js (build de production) géré par PM2 (port 3000)
- Nginx en reverse proxy (port 80) : `/api` vers le backend, le reste vers le frontend
- URL : http://192.168.154.136 (réseau local)

## Workflow Git
Une branche par étape, suivie d'un commit et d'une fusion dans `main` :
`feature/landing-page`, `feature/components`, `feature/backend`, `feature/api-integration`, `docs/readme`, `feature/deploy`.

## Auteur
Marwa