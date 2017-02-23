var aTableau = [
	"QC - Québec",
	"AZ - Azeria",
	"IN - Inarca",
	"TX - Texas",
	"NY - Nyu York",
	"ON - Ontario",
	"M9 - Maisonneuve"

]

aTableau["NB"] = "NOUVEAU-BRUNSWIQUE";

var monObjet = aTableau

function affiche_object(monObjet)
{

	for (propriete in monObjet){

		console.log(propriete + " - " + monObjet[propriete])

	}

}

affiche_object(aTableau);