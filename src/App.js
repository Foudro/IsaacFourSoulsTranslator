import React, { Component } from 'react';
import cards from './cards-data.json';

import "antd/dist/antd.css";
import './App.css';

import IsaacCardCategory from './CardCategory/CardCategory';
import Search from './Search/Search';
import { Row, Col } from 'antd';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search cards={[[]].concat(cards).reduce((a,c) => a.concat(c.cards.map(card => card.originalName)))}></Search>
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
