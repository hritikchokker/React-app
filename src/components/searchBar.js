import React from 'react';

class SearchBar extends React.Component{
    state ={ term: ''};
    // onInputChange(event){
    //     console.log(event.target.value);
    // }

    render(){
        return(
            <div className="ui segment">
                <form className="ui form">
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