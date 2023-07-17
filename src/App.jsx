/*No app.jsx crie um useState para armazenar um array de objetos(que serão as tarefas).*/
/*No App.jsx crie a função de criar uma tarefa como um objeto com os atributos:
id - number
texto - string
finalizado - booleano
Em seguida adicione a tarefa no array de lista de tarefas.
*/

import { useState } from 'react'
import './App.css'
import CardAdicionar from './components/CardAdicionar'
import 

function App() {
  const [listaTarefas, setListaTarefas] = useState([])

  const adicionarTarefa = (texto) => {
    if(texto == ""){
      alert("É necessário digitar uma tarefa")
      return
    } 

    const novaTarefa = {id: listaTarefas.length +1, textoTarefa: texto, finalizado: false}

    setListaTarefas([...listaTarefas, novaTarefa])
  }

  return (
    <>
      <CardAdicionar adicionarTarefa={adicionarTarefa}/>
      <div>{listaTarefas.map(tarefa => (
        <ListItem 
      ))}</div>
    </>
  )
}

export default App
