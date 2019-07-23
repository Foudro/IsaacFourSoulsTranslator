import React, { Component } from 'react';
import './Card.css';

import { Card } from 'react-bootstrap';

class IsaacCard extends Component {
  render() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + '/cards/' + this.props.card.img} />
            <Card.Body>
                <Card.Title>{this.props.card.originalName}</Card.Title>
                <Card.Text>{this.props.card.translatedText}</Card.Text>
            </Card.Body>
        </Card>
    );
  }
}

export default IsaacCard;
