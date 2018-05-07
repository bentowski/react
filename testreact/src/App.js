import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    paragraphes:[
      {id:1, texte:'petits tests1'},
      {id:2, texte:'petits tests2'},
      {id:3, texte:'petits tests3'}
    ]
  }
  render() {
    return (
      <div>
        <div className="tests">
          <p>{this.state.paragraphes[0].texte}</p>
        </div>
        <div className="tests">
          <p>{this.state.paragraphes[1].texte}</p>
        </div>
        <div className="tests">
          <p>{this.state.paragraphes[2].texte}</p>
        </div>
      </div>
    );
  }
}

export default App;
