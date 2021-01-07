require('dotenv').config();
const path = require('path');
const express = require('express');
const Routes = require('./routes.js');
const PORT = process.env.API_PORT;
const app = express();

app.use(express.json());
app.use(Routes);

if(process.env.NODE_ENV == 'development'){
  app.use(express.static(path.join(__dirname, '..', 'web', 'build')));
  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '..', 'web', 'build', 'index.html')));
}


app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
