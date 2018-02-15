var express = require('express');
var app = express();
var server = app.listen(3000, listening);

function listening() {
  console.log('Listennig ...');
}

// La misma configuracion pero con es6 :)

/* const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Server running on port '+port+'!');
}); */


// Desde la carpeta public vamos a servir nuestra pagina web
app.use(express.static('public'));