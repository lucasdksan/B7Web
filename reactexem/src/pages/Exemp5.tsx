import React from "react";
import { setAge, setName } from "../redux/reducers/useReducer";
import { setThemeStatus } from "../redux/reducers/themeReducer";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/hooks/useAppSelector";

const Exemp5 = ()=>{
    const user = useAppSelector( state => state.user );
    const theme = useAppSelector(state => state.theme);

    const dispatch = useDispatch();

    const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>)=>{
        dispatch(setName(e.target.value));
    }
    const handleAgeInput = (e:React.ChangeEvent<HTMLInputElement>)=>{
        dispatch(setAge(e.target.value));
    }
    const handleSwitchTheme = ()=>{
        dispatch(setThemeStatus(theme.status === "light" ? "dark" : "light"));
    }

    return(
        <div>
            Meu nome é: {user.name} e tenho {user.age} anos. <br />
            <hr />

            Theme: {theme.status}

            <hr />
            <input type="text" name="" id="" value={user.name} onChange={handleNameInput}/>
            <input type="number" name="" id="" value={user.age} onChange={handleAgeInput}/>
        
            <hr />
            <button onClick={handleSwitchTheme}>Switch Theme</button>
        </div>
    );
}

export default Exemp5;