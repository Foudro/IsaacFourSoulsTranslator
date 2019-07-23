import React, { Component } from 'react';
import cards from './cards-data.json';
import './App.css';
import IsaacCardCategory from './CardCategory/CardCategory';
import { Row } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          cards.map(category => {
            return <div>
              <Row><h1>{category.category}</h1></Row>
              <Row><IsaacCardCategory cards={category.cards}></IsaacCardCategory></Row>
            </div>;
          })
        }
      </div>
    );
  }
}

export default App;
