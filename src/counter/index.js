import React,{ useContext } from 'react';
import { StoreContext } from '../Store';
import { counterActions } from './state';

const Counter = (props) =>{
    const {state,setGlobalState} = useContext(StoreContext);
    const { ADD,REST,ADD_NUM } = counterActions;
    const { nums,clicks } = state.get('counter').toJS();

    const add = () =>{
        setGlobalState(ADD);
    }
    const rest = () =>{
        setGlobalState(REST);
    }
    const addFive = () =>{
        setGlobalState(ADD_NUM,{num:5});
    }

    return (<div className="card p-3 m-2">
        <p>{`Counter: Nums ${nums} - Clicks ${clicks}`}</p>
        <div className="btn-group">
            <button type="button" className="btn btn-info" onClick={add}>Add</button>
            <button type="button" className="btn btn-info" onClick={rest}>Rest</button>
            <button type="button" className="btn btn-info" onClick={addFive}>Add +5</button>
        </div>
    </div>)
}



export default Counter;