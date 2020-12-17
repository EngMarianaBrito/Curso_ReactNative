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

  function handleAddProjects(){

    //projects.push("Hello Word ")

    setProjects([...projects, `Projeto criado em: ${Date.now()}`])

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

