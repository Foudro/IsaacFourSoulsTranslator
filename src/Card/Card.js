import React, { Component } from 'react';
import './Card.css';

import { Card } from 'antd';
const { Meta } = Card;

class IsaacCard extends Component {
  render() {
    return (
        <Card 
          hoverable
          className="IsaacCard"
          cover={<img alt="example" src={process.env.PUBLIC_URL + '/cardsIcon/' + this.props.card.img[0]} style={{width: '100%'}}/>}
        >
            <Meta title={this.props.card.originalName} description={<div><div>{this.props.card.translatedTextMonster ? <span style={{fontWeight: 'bold'}}>{this.props.card.translatedText}</span> : this.props.card.translatedText.split('<br/>').map(t => <div className="separator">{t}</div>)}</div><div>{this.props.card.translatedTextMonster}</div></div>} />
        </Card>
    );
  }
}

export default IsaacCard;