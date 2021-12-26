import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Post } from "../types/Post";
import { api } from "../services/api";

const Exemp = ()=>{
    const [ posts, setPosts ] = useState<Post[]>([]);
    const [ loading, setLoading ] = useState(false);
    const [ addTitleText, setAddTitleText ] = useState("");
    const [ addBodyText, setAddBodyText ] = useState("");

    useEffect(()=>{
        loadPosts();
    },[]);

    const loadPosts = async ()=>{
        setLoading(true);
        let json = await api.getAllPost();
        setLoading(false);
        setPosts(json);
    }
    const handleAddClick = async ()=>{
        if(addBodyText && addTitleText){
            let json = await api.addNewPost(addTitleText, addBodyText, 1);
            console.log(json);
            if(json.id){
                alert(`Post adicionado com sucesso!`);
            }else{
                alert("Ocorreu os Dados!");
            }
        } else {
            alert("Preencha os dados!!");
        }
    }

    return(
        <div>
            {
                loading && <div>Carregando...</div>
            }
            <fieldset>
                <legend>Adicionar Novo Post</legend>
                <input 
                    value={addTitleText} 
                    type="text" 
                    placeholder="Digite um título"
                    onChange={(e)=>setAddTitleText(e.target.value)}
                />
                <textarea 
                    name="Exemplo" 
                    id="" 
                    value={addBodyText}
                    cols={30} 
                    rows={15}
                    onChange={(e)=>setAddBodyText(e.target.value)}
                ></textarea>
                <button onClick={handleAddClick}>Adicionar</button>
            </fieldset>
            
            <Link to="/exemp2">EXEMP2</Link>
            {
                !loading && posts.length > 0 && 
                <>
                    <div>Total de Filmes: {posts.length}</div>
                    <div>
                        {
                            posts.map((item, index)=>{
                                return(
                                    <div key={index}>  
                                        <h4>{item.title}</h4>
                                        <small>#{item.id} - Usuário: {item.userId}</small>
                                        <p>{item.body}</p>
                                    </div>
                                );
                            })
                        }
                    </div>
                </>
            }
            {
                !loading && posts.length == 0 && 
                <div>Não há posts para exibir</div>
            }
        </div>
    )
}

export default Exemp;