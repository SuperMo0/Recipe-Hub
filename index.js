const express = require('express');
const app = express();
const path = require('node:path');



app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./public'));
app.use(express.static('./node_modules/@fortawesome/fontawesome-free'))


const homeCont = require('./controllers/home');
const createCont = require('./controllers/create');

app.get('/', homeCont.renderHome);
app.get('/categories', homeCont.renderCatergories);
app.get('/create', createCont.renderCreate);

app.listen(3000);