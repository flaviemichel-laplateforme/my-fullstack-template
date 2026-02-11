# Mon Template Fullstack (Node.js + React)

Un template fullstack moderne combinant un backend Node.js avec un frontend React, conçu pour démarrer rapidement vos projets web.

## 🚀 Technologies Utilisées

### Backend
- **Node.js** - Environnement d'exécution JavaScript
- **Express.js** - Framework web minimaliste
- **MySQL** - Base de données relationnelle
- **JWT** - Authentification par tokens

### Frontend
- **React** - Bibliothèque JavaScript pour interfaces utilisateur
- **Vite** - Build tool moderne et rapide
- **ESLint** - Linter pour maintenir la qualité du code

## 📁 Structure du Projet

```
my-fullstack-template/
├── backend/                 # Application serveur
│   ├── config/             # Configuration (base de données, etc.)
│   ├── controllers/        # Logique métier
│   ├── middlewares/        # Middlewares (auth, validation, etc.)
│   ├── models/             # Modèles de données
│   ├── routes/             # Définition des routes API
│   ├── server.js           # Point d'entrée du serveur
│   ├── shema.sql           # Schéma de la base de données
│   └── package.json
│
├── frontend/               # Application cliente
│   ├── public/            # Fichiers statiques
│   ├── src/
│   │   ├── assets/        # Images, fonts, etc.
│   │   ├── components/    # Composants réutilisables
│   │   ├── contexts/      # Contextes React
│   │   ├── hooks/         # Hooks personnalisés
│   │   ├── pages/         # Pages de l'application
│   │   ├── services/      # Services API
│   │   ├── App.jsx        # Composant principal
│   │   └── main.jsx       # Point d'entrée React
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

## ⚙️ Prérequis

- [Node.js](https://nodejs.org/) (v14 ou supérieur)
- [MySQL](https://www.mysql.com/) (v5.7 ou supérieur)
- npm ou yarn

## 🔧 Installation

### 1. Cloner le projet

```bash
git clone <url-du-repo>
cd my-fullstack-template
```

### 2. Configuration de la base de données

Créez une base de données MySQL et importez le schéma :

```bash
mysql -u root -p
```

```sql
CREATE DATABASE nom_de_votre_db;
USE nom_de_votre_db;
SOURCE backend/shema.sql;
```

### 3. Installation du Backend

```bash
cd backend
npm install
```

Créez un fichier `.env` dans le dossier `backend/` :

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=votre_mot_de_passe
DB_NAME=nom_de_votre_db
JWT_SECRET=votre_secret_jwt
```

### 4. Installation du Frontend

```bash
cd ../frontend
npm install
```

Créez un fichier `.env` dans le dossier `frontend/` (si nécessaire) :

```env
VITE_API_URL=http://localhost:5000
```

## 🚀 Démarrage

### Démarrer le Backend

```bash
cd backend
npm start
```

Le serveur démarre sur `http://localhost:5000`

### Démarrer le Frontend

Dans un nouveau terminal :

```bash
cd frontend
npm run dev
```

L'application React démarre sur `http://localhost:5173`

## 📝 Scripts Disponibles

### Backend

- `npm start` - Démarre le serveur
- `npm run dev` - Démarre le serveur en mode développement (avec nodemon)

### Frontend

- `npm run dev` - Démarre le serveur de développement
- `npm run build` - Compile l'application pour la production
- `npm run preview` - Prévisualise la version de production
- `npm run lint` - Vérifie le code avec ESLint

## 🔐 Authentification

Le template inclut un système d'authentification basique avec :
- Inscription d'utilisateur
- Connexion
- Protection des routes avec JWT
- Middleware d'authentification

## 🛣️ Routes API

### Authentification
- `POST /api/auth/register` - Inscription
- `POST /api/auth/login` - Connexion
- `GET /api/auth/profile` - Profil utilisateur (protégé)

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📄 Licence

MIT

## 👤 Auteur

Votre Michel Flavie

---

**Bon développement ! 🎉**
