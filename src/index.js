import React from 'react';
import ReactDom from 'react-dom';

const App = () => {
    const labelText = "Enter Your Name";
    const buttonText = "click to Submit";
    return (
        <div>
            <label htmlFor="name">{labelText}</label>
            <input id="name" type="text" />
            <button style={{backgroundColor: 'blue',color: 'white'}} >{buttonText}</button>
        </div>

    )
};
ReactDom.render(<App />, document.querySelector('#root'));