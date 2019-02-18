import React,{ createContext,useState } from "react";
import { ConterState } from  '../counter/state';
export const StoreContext = createContext();

const initialState = {
    counter: ConterState,
    user:{id:0,name:""}
}

const StoreProvider = ({children}) => {
    const [state,setState] = useState(initialState);

    return (<StoreContext.Provider value={{...state}}>
        {children}
    </StoreContext.Provider>)
}

export default StoreProvider;