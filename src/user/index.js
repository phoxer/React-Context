import React,{ useContext } from 'react';
import { StoreContext } from '../Store';
import {  userActions } from './state'; 

const User = (props) =>{
    const {state,setGlobalState} = useContext(StoreContext);
    const { SET_USER_DATA,SET_USER_LOG_OUT } = userActions;
    const { id,name,email } = state.get('user').toJS();

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



export default User;