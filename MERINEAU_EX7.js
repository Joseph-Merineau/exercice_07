var http = require("http"); // Importe le module serveur http

var fs = require("fs"); //Importation du module de gestion de fichiers

var data = fs.readFileSync('province.json');

//var obj = JSON.parse(data.responseText);



    /*var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'province.json', true); 
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  */


http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(data);
  response.end();
}).listen(3000);