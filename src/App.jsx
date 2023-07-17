/*No app.jsx crie um useState para armazenar um array de objetos(que serão as tarefas).*/
/*No App.jsx crie a função de criar uma tarefa como um objeto com os atributos:
id - number
texto - string
finalizado - booleano
Em seguida adicione a tarefa no array de lista de tarefas.
*/
/*No App.jsx crie uma função para remover a tarefa. 
Essa função deve receber como parâmetro a tarefa a ser removida e deve ser passada como prop para o componente de ListItem que chamará essa função.*/

import { useState } from 'react'
import './App.css'
import CardAdicionar from './components/CardAdicionar'
import ListItem from './components/ListItem'

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

  const removerTarefa = (id) => {
    const novaLista = listaTarefas.filter(item => item.id !=id)

    setListaTarefas(novaLista)
  }

  return (
    <>
      <CardAdicionar adicionarTarefa={adicionarTarefa}/>
      <div>{listaTarefas.map(tarefa => (
        <ListItem key={tarefa.id} id={tarefa.id} removerTarefa={removerTarefa} textoTarefa={tarefa.textoTarefa} finalizado={tarefa.finalizado}/>
      ))}</div>
    </>
  )
}

export default App
