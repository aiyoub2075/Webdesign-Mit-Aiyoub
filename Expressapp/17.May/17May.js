const express = require('express');
const path = require('path');
const app = express();
const port = 4000;

// Statische Dateien bereitstellen
app.use(express.static(path.join(__dirname, '17.May')));

// Routen definieren
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/kontakt', (req, res) => {
    res.sendFile(path.join(__dirname, 'kontakt.html'));
});

app.get('/ueber-uns', (req, res) => {
    res.sendFile(path.join(__dirname, 'ueber-uns.html'));
});

app.get('/impressum', (req, res) => {
    res.sendFile(path.join(__dirname, 'impressum.html'));
});

app.get('/datenschutz', (req, res) => {
    res.sendFile(path.join(__dirname, 'datenschutz.html'));
});

// Server starten
app.listen(port, () => {
    console.log(`Server läuft unter http://localhost:${port}`);
});
