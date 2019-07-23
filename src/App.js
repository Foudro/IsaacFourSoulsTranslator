import React, { Component } from 'react';
import cards from './cards-data.json';
import './App.css';
import IsaacCardCategory from './CardCategory/CardCategory';
import { Row, Col } from 'react-bootstrap';

class App extends Component {
  render() {
    console.log(cards);
    return (
      <div className="App">
        {
          cards.map(category => {
            return <div>
              <Row><Col><h1>{category.category}</h1></Col></Row>
              <Row><IsaacCardCategory cards={category.cards}></IsaacCardCategory></Row>
            </div>;
          })
        }
      </div>
    );
  }
}

export default App;
