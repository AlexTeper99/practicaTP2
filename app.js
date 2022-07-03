//Importaciones
const express = require('express')
const app = express()
require('dotenv').config()

//Configuracion de las rutas

//Definir el puerto de escucha
app.listen(process.env.PORT)

app.get('/hola', async function(req, res){
    return res.status(201).send('hola')
})