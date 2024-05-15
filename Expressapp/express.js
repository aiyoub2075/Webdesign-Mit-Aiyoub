const express = require('express');
const app = express();
//const port = 3000;


const hobbys = ['Lesen', 'Kochen', 'Radfahren'];
const einkaufsliste = ['Aiyoub-Aufgabe2', 'Brot', 'Eier'];


app.get('/hobbys', (req, res) => {
    res.json(hobbys);
});


app.get('/einkaufsliste', (req, res) => {
    res.json(einkaufsliste);
});
app.listen(3000);

//app.listen(port, () => {
 //   console.log(`Server läuft auf http://localhost:${port}`);
//});