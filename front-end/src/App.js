import React, {useState} from 'react'
import Header from './Components/Header'

function App() {

  const [projects, setProjects] = useState(["Engenheira de Software","Designer","Dançarina"])

  function handleAddProjects(){

    //projects.push("Hello Word ")

    setProjects([...projects, `Projeto criado em: ${Date.now()}`])

  }

  return(

    <div>
      <Header title = "Lia Mariana">
        <ul>
          {projects.map(project => (
            <li key = {project}>
              {project}
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
