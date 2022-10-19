import { useTarefas } from "../../contexts/TarefaContexto"

export function ListarTarefa() {
    const {tarefas} = useTarefas()
    return <ul>
        {tarefas && tarefas.map(item => {
            return (
                <li key={item}>{item}</li>
            )
        })}
    </ul>
}