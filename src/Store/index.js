import React,{ createContext,useReducer } from "react";
import { fromJS } from 'immutable';
import { counterState,counterReducers } from  '../counter/state';
import { userState,userReducers } from '../user/state';

//CREAMOS EL STORE
export const StoreContext = createContext();

//IMPORTAMOS ESTADOS Y LOS COMBINAMOS
const initialState = fromJS({});

const combineStates = (initialState) =>{
    return initialState.merge(userState,counterState);
}

//IMPORTAMOS REDUCERS Y LOS COMBINAMOS
const combineReducers={
    ...counterReducers,
    ...userReducers
}

//EJECUTAMOS LOS REDUCERS
const storeReducer = (state,action) =>{
    return combineReducers[action.type](state,action.data);
}

const StoreProvider = ({children}) => {
    const [state,dispatchState] = useReducer(storeReducer,initialState,combineStates);
    
    const setGlobalState = (action,data) =>{
        dispatchState({type:action,data:data})
    }
    
    console.log("NEW STATE->",state.toJS())
    return (<StoreContext.Provider value={{state,setGlobalState}}>
        {children}
    </StoreContext.Provider>)
}

export default StoreProvider;