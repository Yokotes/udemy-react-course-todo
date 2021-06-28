import React from 'react';
import "./TodoItem.css";

export default class TodoItem extends React.Component {

    render () {
        const {
                name,
                important,
                done,
                onDeleted,
                onToggleDone,
                onToggleImportant
            } = this.props;

        let classNames = `todo-list-item-label ${done ? 'done': ''} ${important ? 'important': ''}`;

        return (
            <li
                className="todo-list-item list-group-item"
            >
                <span
                    className={classNames}
                    onClick={onToggleDone}
                >
                    {name}
                </span>
                <span>
                    <button type="button"
                        className="btn btn-outline-success btn-sm btn-margin"
                        onClick={onToggleImportant}
                    >
                        <i className="fas fa-exclamation"></i>
                    </button>
                    <button type="button"
                        className="btn btn-outline-danger btn-sm"
                        onClick={onDeleted}
                    >
                        <i className="fas fa-trash"></i>
                    </button>
                </span>
            </li>
        )
    }
}