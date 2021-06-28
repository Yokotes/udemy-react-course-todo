import React, { Component } from 'react'
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter'
import "./Search.css";

export default class Search extends Component {
  state = {
    searchValue: '',
  }

  onSearchChange = ({target: {value}}) => {
    this.setState({
      searchValue: value
    });
    this.props.onSearch(value);
  }

  render() {
    return (
      <input
        type="input"
        placeholder="Search"
        className="search"
        value={this.state.searchValue}
        onChange={this.onSearchChange}
      ></input>
    )
  }
}
