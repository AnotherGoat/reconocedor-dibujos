const path = require('path');
const express = require('express');
const port = process.env.PORT || 8080;

const app = express();
// Desactiva el header x-powered-by
app.disable("x-powered-by");

app.use(express.static(path.join(__dirname, "dist")));

app.listen(port);
console.log('Servidor iniciado...')
