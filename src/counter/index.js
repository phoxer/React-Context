import React,{ useContext } from 'react';
import { StoreContext } from '../Store';

const Counter = (props) =>{
    const {counter:{nums,clicks}} = useContext(StoreContext);
    //console.log("Counter",props,counter)

    return (<div className="card p-3 m-2">
        <p>{`Counter: Nums ${nums} - Clicks ${clicks}`}</p>
        <div className="btn-group">
            <button type="button" className="btn btn-info">Add +1</button>
            <button type="button" className="btn btn-info">Rest -1</button>
        </div>
    </div>)
}

export default Counter;