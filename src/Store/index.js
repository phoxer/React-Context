import React,{ createContext,useReducer } from "react";
import { fromJS } from 'immutable';
import { counterState,counterReducers } from  '../counter/state';
import { userState,userReducers } from '../user/state';


export const StoreContext = createContext();


const initialState = fromJS({});

const combineStates = (initialState) =>{
    return initialState.merge(userState,counterState);
}

const combineReducers={
    ...counterReducers,
    ...userReducers
}

function storeReducer(state,action){
    return combineReducers[action.type](state,action);
}

const StoreProvider = ({children}) => {
    const [state,dispatchState] = useReducer(storeReducer,initialState,combineStates);
    
    console.log("StoreProvider",state.toJS())
    return (<StoreContext.Provider value={{state,dispatchState}}>
        {children}
    </StoreContext.Provider>)
}

export default StoreProvider;