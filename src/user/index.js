import React,{ useContext } from 'react';
import { StoreContext } from '../Store';

const User = (props) =>{
    const {state,dispatchState} = useContext(StoreContext);
    const { id,name,email } = state.get('user').toJS();

    const logUser = () =>{
        dispatchState({type:"SET_USER_DATA",user:{id:3,name:"Roberto Baglieri",email:"phoxer@gmail.com"}});
    }
    

    return (<div className="card p-3 m-2">
        <p>{`User ID: ${id}`}</p>
        <p>{`User Name: ${name}`}</p>
        <p>{`User Email: ${email}`}</p>
        <div className="btn-group">
            <button type="button" className="btn btn-info" onClick={logUser}>LOG USER</button>
        </div>
    </div>)
}



export default User;