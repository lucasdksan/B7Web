import { useState } from "react";
import { Link } from "react-router-dom";
import { useCounter } from "../hooks/counter";
import { usePeopleList } from "../hooks/peopleList";

const Exemp2 = ()=>{
    const [ state, dispatch ] = useCounter();
    const [ list, dispatchPeopleList ] = usePeopleList();
    const [ nameInput, setNameInput ] = useState("");

    const handleAddButton = ()=>{
        if(nameInput){
            dispatchPeopleList({
                type: "ADD",
                payload: {
                    name: nameInput,
                }
            });
            setNameInput("");
        }
    }
    const handleOrderButton = ()=>{
        dispatchPeopleList({
            type: "ORDER",
        })
    }

    return(
        <div>
            Contagem: {state.count}
            <hr/>
            <button onClick={()=>dispatch({type: "ADD"})}>Adicionar</button>
            <hr/>
            <button onClick={()=>dispatch({type: "DEL"})}>Adicionar</button>
            <hr/>
            <button onClick={()=>dispatch({type: "RESET"})}>Adicionar</button>
            <Link to="/">EXEMP</Link>
            <h1>Novo Teste</h1>
            <div>
                <div>
                    <span>Adicionar pessoa</span>
                    <input 
                        type="text" 
                        name="name-test" 
                        id="nameInputs" 
                        value={nameInput}
                        onChange={(e)=>setNameInput(e.target.value)}
                    />
                    <button onClick={handleAddButton}>Adicionar</button>
                </div>
                Lista de pessoas <button onClick={handleOrderButton}>Ordenar</button>
                <ul>
                    {
                        list.map((item, index)=>{
                            return <li key={index}>
                                    {item.name}
                                    <button onClick={()=>{
                                        dispatchPeopleList({
                                            type:"DEL",
                                            payload: {
                                                id: item.id
                                            }
                                        })
                                    }}> [ Deletar ] </button>
                                </li>
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default Exemp2;