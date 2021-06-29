import React from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './foodbox/FoodBox';
import './App.css';
import AddFood from './addFood/addFodd';


class App extends React.Component{
  
  state = {
    message : false,
    foodsArr : foods,
    query  :''
  }

  

  addFoodHandler = (theFood) => {
    const foodCopy = [...this.state.foodsArr];
    console.log(foodCopy)
    foodCopy.push(theFood);
    this.setState({
      foodsArr : foodCopy
    })
  }

  windowMess = () => {
    console.log(this.state.message)
    this.setState({
      message : !this.state.message
    })
  }

  handleFiltre = (event) =>{
    let {name, value} = event.target;
    this.setState({[name] : value});
  }

  render(){
    return (
      <div className="App">
        <input type='text' name='query' value={this.state.name} onChange={(e) => this.handleFiltre(e)}/>
        <button onClick={() => this.windowMess()}>AddFood</button>
         {this.state.message && <AddFood addFood={this.addFoodHandler} windowMess={this.windowMess} />}
          <div>
          {this.state.foodsArr.filter((food)=>{
            let foodCompare = food.name[0].toLowerCase() + food.name.substr(1)
            console.log(foodCompare)
            if(foodCompare.startsWith(this.state.query.toLowerCase())){
              return true
            }
          })
          .map(item =>(
            <FoodBox {...item} />
            
           ))}
          </div>
      </div>
    );
  }
}



export default App;
