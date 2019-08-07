import React, { Component } from 'react';
import cards from './cards-data.json';

import "antd/dist/antd.css";
import './App.css';

import IsaacCardCategory from './CardCategory/CardCategory';
import SearchCard from './Search/Search';

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
          <Row type="flex" justify="space-around"><Col><h1>{category.category}</h1></Col></Row>
          <Row type="flex" justify="space-around"><IsaacCardCategory cards={category.cards} search={(this.state || {}).search}></IsaacCardCategory></Row>
        </div>
      })
    }
    return (
      <div className="App">
        <Row type="flex" justify="space-around"><Col><img alt="index" src={process.env.PUBLIC_URL + '/index2.png'} style={{width: '80%'}}></img></Col></Row>
        <Row type="flex" justify="space-around"><Col><SearchCard cards={[[]].concat(cards).reduce((a,c) => a.concat(c.cards.map(card => card.originalName)))}></SearchCard></Col></Row>
        {cardsDisplay}
      </div>
    );
  }
}

export default App;
