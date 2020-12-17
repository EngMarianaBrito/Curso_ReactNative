import React, {useState,useEffect} from 'react'
import Header from './Components/Header'
import api from './services/api'

function App() {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    api.get('projeto').then(response => {
      setProjects(response.data)
    })
  }, [] )

  async function handleAddProjects(){

    //setProjects([...projects, `Projeto criado em: ${Date.now()}`])
    const response =  await api.post('projeto', {
      title: `Projeto estático: ${Date.now()}`,
      dev: "Lia"
    })

    const  projeto = response.data
    setProjects([...projects, projeto ])

  }

  return(

    <div>
      <Header title = "React">
        <ul>
          {projects.map(project => (
            <li key = {project.id}>
              {project.title}
            </li>
          ))}
        </ul>
      </Header>

      <button type = "button" onClick={handleAddProjects}>
        Adicionar Projeto
      </button>

    </div>
   )
}

export default App;

