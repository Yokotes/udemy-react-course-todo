import React from 'react'
import TodoItem from '../TodoItem/TodoItem';
import "./TodoList.css";

export default function TodoList({ todoArray, onDeleted, onToggleImportant, onToggleDone }) {

    return (
        <ul className="todo-list list-group">
            {
                todoArray.map(
                    (todo) => {
                        const {id, ...itemProps} = todo;
                        return (
                            <TodoItem
                                key={id}
                                {...itemProps}
                                onDeleted={() => onDeleted(id)}
                                onToggleDone={() => onToggleDone(id)}
                                onToggleImportant={() => onToggleImportant(id)}
                            />
                        )
                    }
                )
            }
        </ul>
    )
}
