import { useReducer } from "react";

type reducerState = {
    count: number;
}
type reducerAction = {
    type: string;

}

const initialState = { count: 1 };
const reducer = (state: reducerState, action: reducerAction)=>{
    switch(action.type){
        case 'ADD':
            return { ...state, count: state.count + 1 };
        break;
        case 'DEL':
            return { ...state, count: state.count -1 };
        break;
        case 'RESET':
            return initialState;
        break;
    }

    return state;
}

export const useCounter = ()=>{
    return useReducer(reducer, initialState);
}