var http = require("http"); // Importe le module serveur http

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<ul><li>QC - Quebec</li><li>On - Ontario</li></ul>");
  response.write("<p>Nya! .w.</p>");
  response.end();
}).listen(3000);