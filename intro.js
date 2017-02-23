var aTableau = [
	"QC - Québec",
	"AZ - Azeria",
	"IN - Inarca",
	"TX - Texas",
	"NY - Nyu York",
	"ON - Ontario",
	"M9 - Maisonneuve"

]

aTableau.forEach(function(elm, i){

	console.log(i + " + " + elm)
})

console.log("-----------------------------------")

aTableau.push("NB - Nouveau Brunswick")


aTableau.forEach(function(elm, i){

	console.log(i + " + " + elm)
})