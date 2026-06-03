import express from 'express'
//const express = required ('express') forma antigua de importar express

//hago una instancia de express
const app = express()
//creo un puerto
const PORT = 3000

console.log("El segundo mensaje de este backend")

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})