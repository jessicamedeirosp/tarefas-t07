import { CriarTarefa } from '../../components/CriarTarefa'
import { ListarTarefa } from '../../components/ListarTarefa'
import { TarefaProvider } from '../../contexts/TarefaContexto'
import './index.css'

export function Home() {  

    return (      
        <TarefaProvider>
            <main className="conteudo-principal">
                <CriarTarefa  className="content-flex"/>
                <ListarTarefa />
            </main>
        </TarefaProvider>      
    )
}

