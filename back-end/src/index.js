const express = require ("express") //importou
const cors = require("cors")//importou 
const app = express()//atribui a função a variavel
const { uuid } = require ( "uuidv4" )

//query params(listar,filtrar as minhas informações)
//route params (identificador recursos -> atualizar e deletar)
//cors pede a conexão com o back-end
//axios faz a conexão 

app.use(cors())//proteger os dados 
app.use(express.json())

const projetos = []

app.get('/projeto', (request, response) => {
    const {title} = request.query

    const resultados = title 
        ? projetos.filter(projeto => projeto.title.includes(title))
        : projetos

    return response.json(resultados)
})

app.post('/projeto/:id', (request, response) => {
    const {title, dev} = request.body
    const projeto = {id: uuid(), title, dev}

    projetos.push(projeto)

    return response.json(projeto)
})

app.put('/projeto/:id', (request, response) => {
    const {id} = request.params
    const {title, dev} = request.body

    const projectIndex = projetos.findIndex(project => project.id == id)
    
    if(projectIndex < 0){
        return response.status(400).json({error: 'Projeto não encotrado!'})
    }

    const projeto = {
        id,
        title,
        dev
    }

    projetos[projectIndex] = projeto
    
    return response.json(projeto)
})

app.delete('/projeto/:id', (request, response) => {
    const {id} = request.params

    const projectIndex = projetos.findIndex(project => project.id == id)
    
    if(projectIndex < 0){
        return response.status(400).json({error: 'Projeto não encotrado!'})
    }

    projetos.splice(projectIndex, 1)
    //splice=remover o item de dentro do meu array
    //coloca o numero apos a virgula pois vc só quer remover 1

    return response.status(204).send()
})

app.listen(3333, () => {
    console.log("Back-end started ")
})