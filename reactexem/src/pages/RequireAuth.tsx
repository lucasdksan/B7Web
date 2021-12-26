import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
    children: JSX.Element;
}

const RequireAuth = ({ children }:Props)=>{
    const navigate = useNavigate();
    const isAuth = false;

    if(isAuth){
        return children;
    } else {
        navigate("/login");
        return null;
    }
}

export default RequireAuth;