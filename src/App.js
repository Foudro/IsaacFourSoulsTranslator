import React, { Component } from 'react';
import cards from './cards-data.json';

import "antd/dist/antd.css";
import './App.css';

import IsaacCardCategory from './CardCategory/CardCategory';
import Search from './Search/Search';

import searchStore from './stores/search';

import { Row, Col } from 'antd';

class App extends Component {
  constructor(props) {
    super(props);
    searchStore.subscribe(() => {
      this.setState({ search: searchStore.getState() });
    });
  }
  render() {
    let cardsDisplay;
    if(!(this.state || {}).all) {
      cardsDisplay = <div>
        <Row type="flex" justify="space-around">
          {
            cards.map(category => {
              return <IsaacCardCategory cards={category.cards} search={(this.state || {}).search}></IsaacCardCategory>
            })
          }
        </Row>
      </div>
    } else {
      cardsDisplay = cards.map(category => {
        return <div>
          <Row><Col span={8} offset={8}><h1>{category.category}</h1></Col></Row>
          <Row type="flex" justify="space-around"><IsaacCardCategory cards={category.cards} search={(this.state || {}).search}></IsaacCardCategory></Row>
        </div>
      })
    }
    return (
      <div className="App">
        <Search cards={[[]].concat(cards).reduce((a,c) => a.concat(c.cards.map(card => card.originalName)))}></Search>
        {cardsDisplay}
      </div>
    );
  }
}

export default App;
