/*Vamos criar um componente para criar uma tarefa. Ele deve ser chamado de CardAdicionar. 
Siga os passos do checklist abaixo para finalizar a tarefa.
1 - Crie um useState para guardar o texto da tarefa;
2 - Crie um input do tipo text que será usado para receber o texto da tarefa a ser criada;
3 - crie um botão para chamar a função de adicionar a tarefa;
4 - faça o botão chamar a função de adicionar tarefa*/

import { useState } from "react"

function CardAdicionar(props){

    const [textoTarefa, setTextoTarefa] = useState("")

    const handleAdicionarTarefa = () => {
        props.adicionarTarefa(textoTarefa)
        setTextoTarefa("")
    }

    return (
        <div>
            <input type="text"
             value={textoTarefa}
             onChange={(evento) => setTextoTarefa(evento.target.value)}
             placeholder="Inserir tarefa"
            />
            <button onClick={() => handleAdicionarTarefa()}>Adicionar</button>
        </div>
    )
}

export default CardAdicionar