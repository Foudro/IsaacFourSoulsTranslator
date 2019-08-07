import React, { Component } from 'react';

import searchStore from '../stores/search';

import { AutoComplete } from 'antd';
const { Option } = AutoComplete;

class Search extends Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.state = { search: '' };
    }

    getSearch() {
        return this.state.search;
    }

    setSearch(search) {
        searchStore.dispatch({
            type: 'UPDATE_SEARCH',
            text: search.toLowerCase()
        })
        this.setState({ search: search.toLowerCase() });
    }

    render() {
        const search = this.getSearch();
        return (
            <AutoComplete dataSource={this.props.cards.filter(c => search && search !== '' && c.toLowerCase().match(search)).map(c => <Option key={c}>{c}</Option>)} style={{ width: 200 }} onSearch={this.handleSearch} placeholder="Search">
            </AutoComplete>
        );
    }

    handleSearch(s) {
        this.setSearch(s);
    }
}

export default Search;