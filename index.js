import express from 'express'
//const express = required ('express') forma antigua de importar express
import cors from 'cors'
import morgan from 'morgan'

//hago una instancia de express
const app = express()
//creo un puerto
const PORT = 3000

//middlewares
app.use(cors()) //permite conexiones remotas
app.use(express.json()) //permite interpretar los datos que llegan en la solicitud o request en formato json
app.use(morgan('dev')) //es mas para el desarrollador para saber si los endpoint que mande en postman se ejecuto y que se devolvio

//area de logica
console.log("El segundo mensaje de este backend")

//diseñamos los endpoints, a donde nos haran las solicitudes
app.get('/api/saludo', (req, res) =>{
    //logica para crear borrar o eliminar un producto, esta parte es el controlador
    //en este caso el endpoint es solo un saludo
    res.json('Bienvenidos mi Backend')
})

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})