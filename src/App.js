import React, { Component } from 'react';
import Ninjas from './ninjas';
class App extends Component {
  render(){

    return (
      <div className="App">
        <h1>My first React app</h1>
        <p>Welcome!</p>
        <Ninjas name="Ryu" age="25" belt="Black"/>
        <br/> 
        <Ninjas name="Yoshi" age="30" belt="Green"/>
      </div>
    );
  }

}

export default App;
