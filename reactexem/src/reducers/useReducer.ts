import { reducerActionType } from "../types/reducerActionType";

export type UserType = {
    name: string,
    age: number
}

export const userInitialState: UserType = {
    name: 'Lucas',
    age: 50
}

export const userReducer = (state: UserType, action: reducerActionType) => {
    switch(action.type){
        case "CHANGE_NAME":
            return { ...state, name: action.payload.name };
        case "CHANGE_AGE":
            return { ...state, age: action.payload.age }
    }
    
    return state;
}