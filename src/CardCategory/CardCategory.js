import React, { Component } from 'react';
import IsaacCard from '../Card/Card'

class IsaacCardCategory extends Component {
  render() {
    return (
      this.props.cards.map(card => {
        return <IsaacCard card={card} search={this.props.search}></IsaacCard>
      })
    );
  }
}

export default IsaacCardCategory;
