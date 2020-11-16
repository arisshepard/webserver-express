const express = require('express');
const app = express();
// const port = 3000;

const hbs = require('hbs');
require('./hbs/helpers');

// heroku
// En local process.env.PORT no existe
const port = process.env.PORT || 3000;

// middleware para interpretar las url de las páginas
app.use(express.static(__dirname + '/public'));

// Express - HBS engine
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
	// pintar la página web
	res.render('home.hbs', { nombre: 'María' });
	// res.send(salida);
});

app.get('/about', (req, res) => {
	// pintar la página web
	res.render('about.hbs');
	// res.send(salida);
});

app.listen(port, () => {
	console.log(`Escuchando peticiones en ${port}`);
});
