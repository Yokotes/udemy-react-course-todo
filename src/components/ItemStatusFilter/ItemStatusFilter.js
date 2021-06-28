import React from 'react'

export default class ItemStatusFilter extends React.Component {
  buttons = [
    this.createNewButton('all', 'All'),
    this.createNewButton('active', 'Active'),
    this.createNewButton('done', 'Done'),
  ];

  createNewButton(name, label) {
    return {
      name,
      label
    }
  }

  render() {
    const { filter, onFilterChange } = this.props;

    const btns = this.buttons.map(({name, label}) => (
        <button type="button"
          className={`btn ${name === filter ? 'btn-info' : 'btn-outline-secondary'}`}
          key={name}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </button>
    ));

    return (
      <div className="btn-group">
        {btns}
      </div>
    )
  }
}