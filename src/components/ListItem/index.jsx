/*Crie um componente para exibir as informações de cada tarefa. Ele deve ser chamado de ListItem. Ele deve receber como props a tarefa a ser exibida.
Nele adicione um useState para guardar o estado da tarefa que está sendo recebida como props (O valor de finalizado).
Em seguida crie uma função para finalizar a tarefa e um botão para chamar essa função.*/

import { useState } from "react"
import "./style.css"

function ListItem(props){

    const [finalizado, setFinalizado] = useState(props.finalizado)

    return (
        <div className="container">
            <input type="checkbox" checked={finalizado} />
            <h3 className={finalizado && 'marcar-finalizado'}>{props.textoTarefa}</h3>
            

        </div>
    )
}