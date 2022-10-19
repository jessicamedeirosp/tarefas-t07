import { createContext, useContext, useState } from "react";

const TarefaContexto = createContext({})

export function TarefaProvider({children}) {
    // criando o estado 
    const [tarefas, setTarefas] = useState([])  

    return <TarefaContexto.Provider value={{tarefas, setTarefas}}>
            {children}
    </TarefaContexto.Provider>
}

export function useTarefas() {
    return useContext(TarefaContexto)
}