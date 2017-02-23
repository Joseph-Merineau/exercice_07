var fs = require("fs"); //Importation du module de gestion de fichiers

var data = fs.readFileSync('04_fichier.txt');

console.log(data.toString());
console.log("Program Ended");