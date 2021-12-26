import React, { useState, useEffect } from "react";

const Exemp = ()=>{
    const [ name, setName ] = useState("");
    const [ download, setDownload ] = useState(localStorage.getItem("@name"));
    
    useEffect(()=>{
        localStorage.setItem("@name",name);
        setDownload(localStorage.getItem("@name"));
    },[name]);
    
    return(
        <>
            <div>
                <input 
                    type="text" 
                    name="Name" 
                    id="name" 
                    value={name}
                    onChange={e=>setName(e.target.value)}
                />
                <h1>{download}</h1>
            </div>
        </>
    );
}

export default Exemp;