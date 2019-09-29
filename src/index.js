import React from 'react';
import ReactDom from 'react-dom';

const App = () =>{
    return (
            <h1>From React</h1>
    )
}
ReactDom.render(<App />, document.querySelector('#root'));