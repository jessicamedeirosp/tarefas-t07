import { useContext } from "react"
import { TarefaContexto } from "../../contexts/TarefaContexto"

export function ListarTarefa() {
    const {tarefas} = useContext(TarefaContexto)
    return <ul>
        {tarefas && tarefas.map(item => {
            return (
                <li key={item}>{item}</li>
            )
        })}
    </ul>
}