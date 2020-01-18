const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://iidutra:igordutra17@cluster0-2sbff.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json())
app.use(routes); 

app.listen(3333)

//MÉTODOS HTTP (GET, POST, PUT, DELETE)

//tipos de parametros: 

//query params: req.query (Filtros, ordenação, paginação...)
//route params: req.params (identificar um recurso, remoção)
//body: request.body (dados para criação ou alteração de registro)

//MongoDB (não-relacional)





