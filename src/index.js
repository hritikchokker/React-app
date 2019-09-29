import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './commentDetails';
const App = () => {
    return (
        <div className="ui container comments">
          <CommentDetail />
        </div>

    )
};
ReactDom.render(<App />, document.querySelector('#root'));



// {/* <div>
//     <label htmlFor="name">{labelText}</label>
//     <input id="name" type="text" />
//     <button style={{ backgroundColor: 'blue', color: 'white' }} >{buttonText}</button>
// </div> */}