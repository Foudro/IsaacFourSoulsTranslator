import React, { Component } from 'react';
import IsaacCard from '../Card/Card'
import { Pagination, Row, Col } from 'antd';
import './CardCategory.css';

class IsaacCardCategory extends Component {

  constructor(props) {
    super(props);
    this.changePage = this.changePage.bind(this);
    this.state = {
      page: 1
    };
  }

  render() {
    const pageSize = 6;
    const filteredCards = this.props.cards.filter(c => this.props.search && c.originalName.toLowerCase().match(this.props.search));
    const cards = 
    filteredCards.slice((this.state.page - 1) * pageSize, (this.state.page) * pageSize).map(card => {
        return <IsaacCard card={card} search={this.props.search}></IsaacCard>
      });
    return (
      <div>
        { 
          this.props.search
          ? <Row type="flex" justify="space-around"><Col><div class="pagination" ><Pagination defaultCurrent={1} total={filteredCards.length} onChange={this.changePage} pageSize={pageSize} /></div></Col></Row>
          : null
        }
        <Row type="flex" justify="space-around">{cards}</Row>
      </div>
    );
  }

  changePage(page) {
    this.setState({page});
  }
}

export default IsaacCardCategory;
