import React, { Component } from 'react';
import cards from './cards-data.json';

import "antd/dist/antd.css";
import './App.css';

import IsaacCardCategory from './CardCategory/CardCategory';
import { Row, Col } from 'antd';

class App extends Component {
  render() {
    console.log(cards);
    return (
      <div className="App">
        {
          cards.map(category => {
            return <div>
              <Row><Col span={8} offset={8}><h1>{category.category}</h1></Col></Row>
              <Row type="flex" justify="space-around"><IsaacCardCategory cards={category.cards}></IsaacCardCategory></Row>
            </div>;
          })
        }
      </div>
    );
  }
}

export default App;
