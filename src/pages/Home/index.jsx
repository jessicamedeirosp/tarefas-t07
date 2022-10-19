import { useState } from 'react'
import { CriarTarefa } from '../../components/CriarTarefa'
import { ListarTarefa } from '../../components/ListarTarefa'
import { TarefaContexto } from '../../contexts/TarefaContexto'
import './index.css'

export function Home()  {

    const [tarefas, setTarefas] = useState([])  

    return (
        <TarefaContexto.Provider value={{tarefas, setTarefas}}>
            <main className="conteudo-principal">
                <CriarTarefa />
                <ListarTarefa />
            </main>
        </TarefaContexto.Provider>
    )
}