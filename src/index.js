import React from 'react';
import ReactDom from 'react-dom';


class App extends React.Component{
    render() {
         window.navigator.geolocation.getCurrentPosition(
             (pos) => console.log(pos, "u r here"),
             (err) => console.log(err, "something wrong happened")
         )
        return <div>Latitude: </div>
    }
}

ReactDom.render(<App />, document.querySelector('#root'));



// const App = () => {

//     return ( <
//         div > Latitude: < /div>
//     )
// }
