import React, { useContext } from "react";
import { Context } from "../contexts/Context";

const ShowData = ()=>{
    const { state, dispatch } = useContext(Context);
    return(
        <div>
            <h3>Tela ShowData</h3>
            MEU NOME É {state.user.name} <br /> 
            EU TENHO {state.user.age} DE IDADE.
        </div>
    );
}

export default ShowData;