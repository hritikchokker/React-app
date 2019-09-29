import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './commentDetails';
import faker from "faker";
import ApprovalCard from './approvalCard'

const App = () => {
    return (
        <div className="ui container comments">
        <ApprovalCard>
          <CommentDetail
           author="Dwight" 
           timeAgo="Today at 4:45 am"
            blog="it was fun" imgSrc={faker.image.avatar()} />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail 
          author = "Michael Scott" 
          timeAgo = "Today at 6:20 pm" 
          blog="it was a good experience" imgSrc={faker.image.avatar()} />
       </ApprovalCard>
        </div>
    )
};
ReactDom.render(<App />, document.querySelector('#root'));



// {/* <div>
//     <label htmlFor="name">{labelText}</label>
//     <input id="name" type="text" />
//     <button style={{ backgroundColor: 'blue', color: 'white' }} >{buttonText}</button>
// </div> */}