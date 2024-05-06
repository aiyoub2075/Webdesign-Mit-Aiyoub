// Nehmen wir an, du hast eine traditionelle Funktion, die zwei Zahlen addiert.
// Deine Aufgabe ist es, diese Funktion in eine Arrow Function umzuwandeln.
// const add = (a, b) => a + b;


function add(a, b) {
   return a + b;
 }
  console.log(add)

// Verwende eine Arrow Function in Kombination mit der Array-Methode .filter(),
// um ein Array von Zahlen zu filtern und nur diejenigen Zahlen zurückzugeben, die größer als 10 sind.
let numbers = [5, 11, 8, 20, 7, 15];
const fNum = numbers.filter(number => number > 10);
document.getElementById("demo").innerHTML = fNum;


const animal = ["Lion", "Tiger", "Elephant", "Giraffe", "Zebra"];
const anim = animal.map(tier => tier.toUpperCase());
document.getElementById("demo").innerHTML = anim;


let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ];
let namen = people.map(person => person.name);
document.getElementById("demo").innerHTML = namen;
  console.log(namen); 