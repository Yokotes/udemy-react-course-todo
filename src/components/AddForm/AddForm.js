import React, { Component } from 'react';
import "./AddForm.css";

export default class AddForm extends Component {

  state = {
    itemName: ''
  }

  onLabelChange = ({ target: {value} }) => {
    this.setState({
      itemName: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.itemName);
    this.setState({
      itemName: ''
    })
  }

  render() {
    return (
      <form
        className="add-form"
        onSubmit={this.onSubmit}
      >
        <input
          className="input"
          placeholder="Item name"
          onChange={this.onLabelChange}
          value={this.state.itemName}
        ></input>
        <button
          className="btn btn-success"
        >
          Add Item
        </button>
      </form>
    )
  }
}
