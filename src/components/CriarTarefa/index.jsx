import { useContext, useRef } from "react"
import { TarefaContexto } from "../../contexts/TarefaContexto"

export function CriarTarefa() {
    const {tarefas, setTarefas} = useContext(TarefaContexto)
    const tarefa = useRef('')

    function adicionarTarefa() {
        const valorInput = tarefa.current.value
        setTarefas([...tarefas, valorInput])
    }

    return <>
        <h2>Criar tarefa</h2>
        <input type="text" ref={tarefa} />
        <button onClick={adicionarTarefa}>Adicionar</button>
    </>
}