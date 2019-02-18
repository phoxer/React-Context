import React,{ useContext } from 'react';
import { StoreContext } from '../Store';

const Counter = (props) =>{
    const {state,dispatchState} = useContext(StoreContext);
    const { nums,clicks } = state.get('counter').toJS();

    const add = () =>{
        dispatchState({type:"ADD"});
    }
    const rest = () =>{
        dispatchState({type:"REST"});
    }
    const addFive = () =>{
        dispatchState({type:"ADD_FIVE",nums:5});
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