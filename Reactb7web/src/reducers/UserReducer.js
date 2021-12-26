const initialState = {
    name: 'Lucas',
    count: 0,
}

const UserReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'SET_NAME':
            return { ...state, name: action.payload.name };
        break;
        case 'INCREMENT_COUNT':
            let newCount = state.count + 1;
            return {...state, count:newCount};
        break;
    }
    
    return state;
}

export default UserReducer;