## Sample of Global State with React createContext Hook
This is a sample of how to use the new React Context and manage a global state with hooks and Object Literal.

## Create a Global Store with createContext (Store file)
```JavaScript
import React,{ createContext,useReducer } from "react";
import { userState,userReducers } from '../user/state';

//CREAMOS EL STORE
export const StoreContext = createContext();

//IMPORTAMOS ESTADOS Y LOS COMBINAMOS
const initialState = {
    ...userState
}

//IMPORTAMOS REDUCERS Y LOS COMBINAMOS
const combineReducers={
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
    
    return (<StoreContext.Provider value={{state,setGlobalState}}>
        {children}
    </StoreContext.Provider>)
}
```

## Sample of Initial State, Actions, and Reducers 
You can build a separate Initial State, Actions and reducers and then combine them in the Store file.

```JavaScript
export const userActions ={
    SET_USER_DATA : "SET_USER_DATA",
    SET_USER_LOG_OUT: "SET_USER_LOG_OUT"
}

export const userState = {
    user:{
        id: 0,
        name: "",
        email: ""
    }
};

export const userReducers = {
    [userActions.SET_USER_DATA] : (state,user) =>{
        state.user=user;
        return state;
    },
    [userActions.SET_USER_LOG_OUT]: (state) =>{
        state.user=userState
        return state;
    },
};
```

## Acces to Global State with useContext Hook
Then you can access to the global data with useContext Hook
```JavaScript

import React,{ useContext } from 'react';
import { StoreContext } from '../Store';
import {  userActions } from './state'; 

const User = (props) =>{
    const {state,setGlobalState} = useContext(StoreContext);
    const { SET_USER_DATA,SET_USER_LOG_OUT } = userActions;
    const { id,name,email } = state;

    const logUser = () =>{
        if (id>0){
            setGlobalState(SET_USER_LOG_OUT);
        }else{
            setGlobalState(SET_USER_DATA,{id:3,name:"Roberto Baglieri",email:"phoxer@gmail.com"});
        }
    }
    
    const LogButton = () =>{
        const clss = (id>0)? "btn-danger":"btn-info";
        const text = (id>0)? "LOG OUT":"LOG IN";
        return <button type="button" className={`btn ${clss}`} onClick={logUser}>{text}</button>;
    }

    return (<div className="card p-3 m-2">
        <p className="mb-0"><b>User ID:</b> {id}</p>
        <p className="mb-0"><b>User Name:</b> {name}</p>
        <p className="mb-0"><b>User Email:</b> {email}</p>
        <div className="btn-group">
            <LogButton />
        </div>
    </div>)
}
```

This sample was developed by http://www.phoxer.com
