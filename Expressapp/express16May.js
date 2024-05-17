//const express = require('express');
//const app = express();
//const port = 3000;
//const hobbys = ['Lesen', 'Kochen', 'Radfahren'];
//const einkaufsliste = ['Aiyoub-Aufgabe2', 'Brot', 'Eier'];
//app.get('/hobbys', (req, res) => {
//    res.send(hobbys);
//});
//app.get('/einkaufsliste', (req, res) => {
//    res.send(einkaufsliste);
//});
//app.listen(3000);
//app.listen(port, () => {
 //   console.log(`Server läuft auf http://localhost:${port}`);
//});
const express = require("express");
const app = express();
const PORT = 3000;

const fs = require("fs");

// das hier wird benötigt um das Attribut req.body zu befüllen
//Ansonsten wäre req.body undefined
app.use(express.urlencoded({ extended: true }));

// Middleware
// app.use((req, res, next) => {
//   console.log(req.method);
//   console.log("Hallo aus der Middleware");
//   next();
// });

app.get("/", (req, res) => {
  
  // __dirname ist eine globale Variabel die den aktuellen Ordner als Wert beinhaltet
  res.sendFile(__dirname + "/16.May24.html");
});

app.post("/submit", (req, res) => {
  let meineListe = []
  meineListe.push(req.body.name)
  meineListe.push(req.body.email)
  meineListe.push(req.body.passwort)
  meineListe.push(req.body.dob)
  meineListe.push(req.body.Country)
  meineListe.push(req.body.gender)

    fs.appendFile("users.txt", meineListe.join("\n"), (err) => {

  })

  console.log(req.body);

  res.send(201);
});
//fs.appendFile('users.txt', <Daten die in die Datei geschrieben werden sollen>, (err) => {
  //  if (err) {
    //console.error('Fehler beim Schreiben der Datei', err);
    //return res.status(500).send('Fehler beim Schreiben der Datei');
    // }
    //res.send('Registrierung erfolgreich!');
    //});


app.listen(PORT, () => {
  console.log(`Der Server wurde gestartet auf Port: ${PORT}`);
});