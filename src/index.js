const express = require ("express")//importou
const app = express()//atribui a função a variavel
const { uuid } = require ( "uuidv4" )

//query params(listar,filtrar as minhas informações)
//route params (identificador recursos -> atualizar e deletar)
//request body

app.use(express.json())

const projetos = []

app.get('/projeto', (request, response) => {()

    return response.json(projetos)
})

app.post('/projeto:id', (request, response) => {
    const {title, dev} =request.body
    const projeto = {id: uuid(), title, dev}

    projetos.push(projeto)

    return response.json(projeto)
})

app.put('/projeto:id', (request, response) => {
    const {id} = request.params
    const projectIndex = projetos.findIndex(project => project.id == id)
    
    return response.json([
        "Projeto 4", 
        "Projeto 2",
        "Projeto 3"
    ])
})

app.delete('/projeto/:id', (request, response) => {
    return response.json([
        "projeto 2",
        "projeto 3"
    ])
})

app.listen(3333, () => {
    console.log("Back-end started ")
})