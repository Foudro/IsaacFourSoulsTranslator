import React, { Component } from 'react';

import searchSubject from '../Subjects/search';

import { Input } from 'antd';
const { Search } = Input;

class SearchCard extends Component {
    constructor(props) {
        super(props);
        this.setSearch = this.setSearch.bind(this);
        this.state = { search: '' };
    }

    getSearch() {
        return this.state.search;
    }

    setSearch(event) {
        const search = event.target.value;
        searchSubject.next(search.toLowerCase());
        this.setState({search});
    }

    render() {
        return (
            <Search
                placeholder="Search Card"
                onChange={this.setSearch}
                style={{ width: 200 }}
            />
        );
    }

}

export default SearchCard;