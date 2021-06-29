import React, { Component } from 'react';

class Search extends React.Component{
    state={
        name:''

    }

    handleSort(event) {
        let {name, value} = event.target;
        this.setState({[name] : value});
        event.preventDefault()
    }

    render(){
        return(
            <div>
                <input type='text' value={this.state.name} onChange={(e) => this.handleSort(e)}/>
            </div>
        )
    }
}


export default Search;
