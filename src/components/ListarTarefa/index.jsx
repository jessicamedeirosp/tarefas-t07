import { useTarefas } from "../../contexts/TarefaContexto"


export function ListarTarefa() {
    const {tarefas} = useTarefas()
  
    return <ul>
        {tarefas && tarefas.map(item => {
            return (
                <li key={item.id}>{item.tarefa}</li>
            )
        })}
    </ul>
}