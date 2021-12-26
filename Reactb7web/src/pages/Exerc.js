import React, { useState } from "react";
import * as Components from "../styles/pages/Exerc";

const Exerc = ()=>{
    const [ count, setCount ] = useState(0);
    const [ porc, setPorc ] = useState(0);

    function Calc(firstCount, firstPorc){
        return(firstCount*(firstPorc/100));
    }

    return(
        <Components.Container>
            <Components.Title>Calculadora de Gorjeta</Components.Title>
            <Components.AreaInputs>
                <Components.UnicAreaInput>
                    <Components.TextInput>Quanto deu a conta?</Components.TextInput>
                    <Components.Input
                        value = {count}
                        onChange = {(e=> setCount(e.target.value))}
                    />
                </Components.UnicAreaInput>
                <Components.UnicAreaInput>
                    <Components.TextInput>Qual a porcentagem de gorjeta?</Components.TextInput>
                    <Components.Input
                        value = {porc}
                        onChange = {e => setPorc(e.target.value)}
                    />
                </Components.UnicAreaInput>
            </Components.AreaInputs>
            <hr/>
            <Components.AreaDescription>
                <span>Sub-total: R${count}</span>
                <span>Gorjeta({porc}%): R${Calc(count, porc)}</span>
                <strong>Total: R${ parseFloat(count)+ parseFloat(Calc(count, porc))}</strong>
            </Components.AreaDescription>
        </Components.Container>
    );
}

export default Exerc;