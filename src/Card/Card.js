import React, { Component } from 'react';
import './Card.css';

import { Card, Col, Divider } from 'antd';
const { Meta } = Card;


class IsaacCard extends Component {
  render() {
    return (
          <Col><Card 
            hoverable
            className="IsaacCard"
            cover={<img alt="example" src={process.env.PUBLIC_URL + '/cardsIcon/' + this.props.card.img[0]} style={{width: '100%'}}/>}
          >
              <Meta title={this.props.card.originalName} description={
                <div>
                  <div>
                  {
                    this.props.card.translatedTextMonster ? 
                    <span style={{fontWeight: 'bold'}}>{this.props.card.translatedText.split('<br/>').reduce((a,t) => { return <div>{a}<Divider type="vertical"/>{t}</div> })}</span> : 
                    this.props.card.translatedText.split('<br/>').reduce((a,t) => { return <div>{a}<div>{t}</div></div> })
                  }
                  </div>
                    {
                      this.props.card.translatedTextMonster ?
                      <div>
                        <Divider />
                        {this.props.card.translatedTextMonster}
                      </div>:
                      null
                    }
                </div>
              } />
          </Card></Col>
    );
  }
}

export default IsaacCard;