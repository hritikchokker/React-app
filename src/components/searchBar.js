import React from 'react';

class SearchBar extends React.Component{
    state ={ term: ''};
    
    onFormSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state.term);
        this.props.onSubmit(this.state.term);
    }
    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label> Image Search 
                    <input value={this.state.term} onChange={(e)=> this.setState({term: e.target.value})} type="text" />
                    </label>
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchBar;
/* <input onChange={this.onInputChange} type="text" /> */

// onInputChange(event){
    //     console.log(event.target.value);
    // }
    // onFormSubmit(event){
    //     event.preventDefault();
    //     console.log(this.state.term); 
    // }