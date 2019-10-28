/* eslint-disable no-useless-constructor */
import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './seasonDisplay';
import Spinner from './spinner';


class App extends React.Component {
    constructor(props){
        super(props); 
        //* this is the exeption for the rule written below
        //* this is the only time we do direct assignment to this.state
        this.state = {lat: null, errorMessage: ''};
       
    }
    state = { lat: null, errorMessage: '' };
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => {
                console.log(position);
                this.setState({ lat: position.coords.latitude });
                //* never do this kind of declaration
                //* this.setState.lat = position.coords.latitude;
            },
            err => {
                this.setState({ errorMessage: err.message });
                console.log(err)
            }
        );
        console.log('component was rerendered to the screen');   
    }
    componentDidUpdate(){
        console.log('component was updated ~ it rerendered');
        
    }
    renderContent(){
        if (this.state.errorMessage && !this.state.lat) {
            return <div> Error: {this.state.errorMessage} </div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        return <Spinner message="please Accept locaton request" />
    }
    

    render() {
        return(
            <div className="border red">
                {this.renderContent()}
            </div>
        )
        }
}

ReactDom.render(<App />, document.querySelector('#root'));

/* <SeasonDisplay></SeasonDisplay>   */

// <div>
//     Latitude: {this.state.lat}
//     <br />
//     Error: {this.state.errorMessage}
// </div>