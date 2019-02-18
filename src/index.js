import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StoreProvider from './Store';

import Counter from './counter';

const App = () =>{

    return(<StoreProvider>
        <Counter />
    </StoreProvider>)
}


ReactDOM.render(<App />, document.getElementById('root'));