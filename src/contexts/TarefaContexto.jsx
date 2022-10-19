import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";
import { headers } from "../utils/headers";
const TarefaContexto = createContext({})

export function TarefaProvider({children}) {
    // criando o estado 
    const [tarefas, setTarefas] = useState([])  

    async function carregarTarefas() {
        try {
            const resposta = await api.get('/listarTarefa', {headers})         
            setTarefas(resposta.data)

        }catch(e) {
            alert(e)
        }
    }
    useEffect(() => {
        carregarTarefas()
    }, [])

    return <TarefaContexto.Provider value={{tarefas, setTarefas}}>
            {children}
    </TarefaContexto.Provider>
}

export function useTarefas() {
    return useContext(TarefaContexto)
}