import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const Exemp3 = ()=>{
    const params = useParams();
    const [ searchParams, setSearchParams ] = useSearchParams();
    const setOrder = (order: string)=>{
        searchParams.set('order', order);
        setSearchParams(searchParams);
    }

    return(
        <div>
            <h1>Filter: {searchParams.get('filter')}</h1>
            <h1> Nome - {params.slug}</h1>
            <hr/>
            <button onClick={()=>setOrder("dec")}>Dec</button>
            <button onClick={()=>setOrder("ace")}>Ace</button>
        </div>
    );
}

export default Exemp3;