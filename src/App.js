import React, { Component } from 'react';
import Ninjas from './ninjas';
import AddNinja from './addNinja';
class App extends Component {

  state = {
    ninjas: [
      { name: "Ryu", age: 30, belt: "black", id: 1 },
      { name: "Yoshi", age: 20, belt: "green", id: 2 },
      { name: "Crystal", age: 25, belt: "pink", id: 3 },
    ]
  }


  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    });
  }

  deleteNinja = (id) => {
    let notId = (ninja) => { return !(id===ninja.id); }
    this.setState({
      ninjas: this.state.ninjas.filter( (ninja) => { return notId(ninja); } )
    });
  }

  render(){
    return (
      <div className="App">
        <h1>My first React app</h1>
        <p>Welcome!</p>
        <Ninjas ninjas={this.state.ninjas}
                deleteNinja={this.deleteNinja}/>
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
