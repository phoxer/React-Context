import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StoreProvider from './Store';

import Counter from './counter';
import User from './user';

const App = () =>{

    return(<StoreProvider>
        <User />
        <Counter />
    </StoreProvider>)
}


ReactDOM.render(<App />, document.getElementById('root'));