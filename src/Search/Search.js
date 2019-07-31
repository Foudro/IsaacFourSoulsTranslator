import React, { Component } from 'react';

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
        this.setState({ search });
    }

    render() {
        const search = this.getSearch();
        return (
            <AutoComplete dataSource={this.props.cards.filter(c => search && search !== '' && c.match(search)).map(c => <Option key={c}>{c}</Option>)} style={{ width: 200 }} onSearch={this.handleSearch} placeholder="Search">
            </AutoComplete>
        );
    }

    handleSearch(s) {
        this.setSearch(s);
    }
}

export default Search;