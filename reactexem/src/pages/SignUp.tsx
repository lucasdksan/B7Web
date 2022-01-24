import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { Context } from "../contexts/Context";

const SignUp = ()=>{
    const { state, dispatch } = useContext(Context);
    const [ name, setName ] = useState('');
    const [ ageNumber, setAgeNumber ] = useState(0);

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setName(e.target.value);
    }
    const handleChangeAgeNumber = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setAgeNumber(Number(e.target.value));
    }
    const handleSave = () =>{
        dispatch({
            type: "CHANGE_NAME",
            payload: {
                name
            }
        });
        dispatch({
            type: "CHANGE_AGE",
            payload: {
                age: ageNumber
            }
        });
    }

    return(
        <div>
            <h3>Tela SignUp</h3>
            <fieldset>
                <form>
                    <input 
                        type="text"
                        placeholder="Digite um nome"
                        value={name}
                        onChange={handleChangeName}
                    />
                    <input 
                        type="number"
                        placeholder="Digite sua idade"
                        value={ageNumber}
                        onChange={handleChangeAgeNumber}
                    />
                    <button onSubmit={handleSave}>Salvar</button>
                </form>
            </fieldset>
            <Link to="showdata">Me toque</Link>
        </div>
    );
}

export default SignUp;