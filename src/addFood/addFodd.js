import React, { Component } from 'react';
import App from '../App';


class AddFood extends Component {
    state= {
        name: "",
        calories: '',
        image: "",
        quantity: 0,
        message: true
    }

    handleChange(event) {
        let {name, value} = event.target;

        this.setState({[name] : value});
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
        this.props.addFood(this.state);
        this.props.windowMess(this.state)
    }

   

    render(){
        return(
            <div>
            
                <form onSubmit={this.handleFormSubmit}>
                    <label>Name</label>
                    <input type='text' name='name' value={this.state.name} onChange={(e) => this.handleChange(e)}/>
                    <label>Calories</label>
                    <input type='text' name='calories' value={this.state.calories} onChange={(e) => this.handleChange(e)}/>
                    <label>Image</label>
                    <input type='text' name='image' value={this.state.image} onChange={(e) => this.handleChange(e)}/>
                    <button>Submit</button>
                </form>
            
            </div>
        )
    }

}

export default AddFood;