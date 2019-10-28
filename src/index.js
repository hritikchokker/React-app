/* eslint-disable no-useless-constructor */
import React from 'react';
import ReactDom from 'react-dom';
// import SeasonDisplay from './seasonDisplay';


class App extends React.Component {
    constructor(props){
        super(props); 
        //* this is the exeption for the rule written below
        //* this is the only time we do direct assignment to this.state
        this.state = {lat: null, errorMessage: ''};
        window.navigator.geolocation.getCurrentPosition(
            position => {
                console.log(position);
                this.setState({lat: position.coords.latitude});
                //* never do this kind of declaration
                //* this.setState.lat = position.coords.latitude;
            },
            err =>{
                this.setState({errorMessage: err.message});
                 console.log(err)
                }
        );
    }
    render() {
     if(this.state.errorMessage && !this.state.lat){
         return <div> Error: {this.state.errorMessage} </div>
     }
    if (!this.state.errorMessage && this.state.lat) {
      return <div> Latitude: {this.state.lat} </div>
     }
     return <div> Loading ...</div>
    }
}

ReactDom.render(<App />, document.querySelector('#root'));

/* <SeasonDisplay></SeasonDisplay>   */

// <div>
//     Latitude: {this.state.lat}
//     <br />
//     Error: {this.state.errorMessage}
// </div>