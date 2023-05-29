const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');

//Configuração do express para arquivos estáticos
app.use(express.static('public'));

//Definição da view engine
app.set('view engine', 'ejs');

//Configuração do BodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Database connection
connection
  .authenticate()
  .then(() => {
    console.log('Conexão com o db feita com sucesso.');
  })
  .catch((err) => {
    console.log(err.message);
  });

app.get('/', (req, res) => {
  res.send('Bem-vindo ao meu site!');
});

app.listen(8080, () => {
  console.log('Servidor iniciado com secesso!');
});
