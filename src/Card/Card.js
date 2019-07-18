import React, { Component } from 'react';
import './Card.css';

import { Card, Button } from 'react-bootstrap';

class IsaacCard extends Component {
  render() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + '/' + this.props.card.filename} />
            <Card.Body>
                <Card.Title>{this.props.card.name}</Card.Title>
                <Card.Text>{'Text + ' + this.props.card.text}</Card.Text>
            </Card.Body>
        </Card>
    );
  }
}

export default IsaacCard;
