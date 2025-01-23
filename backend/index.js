const express = require('express');
const dotenv = require('dotenv');

// Charger les variables d'environnement
dotenv.config();

// Créer une application Express
const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Route d'exemple
app.get('/', (req, res) => {
    res.send('Bienvenue sur le backend de DelishAfrica!');
});

// Définir le port à utiliser (peut être récupéré dans les variables d'environnement)
const PORT = process.env.PORT || 3000;

// Lancer le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});

