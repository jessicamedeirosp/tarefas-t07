export function ListarTarefa({ tarefas}) {

    return <ul>
        {tarefas && tarefas.map(item => {
            return (
                <li key={item}>{item}</li>
            )
        })}
    </ul>
}