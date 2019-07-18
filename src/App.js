import React, { Component } from 'react';
import cards from './cards-data.json';
import './App.css';
import IsaacCard from './Card/Card'

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          cards.map(card => {
            return <IsaacCard card={card}></IsaacCard>
          })
        }
      </div>
    );
  }
}

export default App;
