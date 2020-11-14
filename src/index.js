const { request, response } = require("express")
const express = require ("express")//importou
const app = express()//atribui a função a variavel


//query params(listar,filtrar as minhas informações)
//route params (identificador recursos -> atualizar e deletar)
//request body

app.get("/projeto", (request, response) => {
    return response.json([
        "Projeto 1", 
        "Projeto 2" 
    ])
})

app.post("/projeto", (request, response) => {
    const body = request.body
    console.log(params)

    return response.json([
        "Projeto 1", 
        "Projeto 2",
        "Projeto 3"
    ])
})

app.put("/projeto/:id", (request, response) => {
    const params  = request.params
    console.log(params)
    
    return response.json([
        "Projeto 4", 
        "Projeto 2",
        "Projeto 3"
    ])
})

app.listen(3333, () => {
    console.log("Back-end started")
})