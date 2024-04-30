function bewertePunktzahl(punktzahl) {
    if (punktzahl > 90) {
        console.log("sehr gut");
    } else if (punktzahl >= 80 && punktzahl <= 90) {
        console.log("gut");
    } else if (punktzahl >= 70 && punktzahl < 80) {
        console.log("befriedigend");
    } else if (punktzahl >= 60 && punktzahl < 70) {
        console.log("ausreichend");
    } else {
        console.log("nicht bestanden");
    }
}

// Beispielaufruf mit einer Punktzahl von 85
bewertePunktzahl(85);

function ermittleFahrkartenpreis(alter) {
    if (alter < 6) {
        console.log("Die Fahrt ist kostenlos.");
    } else if (alter >= 6 && alter <= 17) {
        console.log("Kinderpreis.");
    } else if (alter >= 18 && alter <= 66) {
        console.log("Vollpreis.");
    } else if (alter > 67) {
        console.log("Seniorenpreis.");
    } else {
        console.log("Ungültiges Alter.");
    }
}
