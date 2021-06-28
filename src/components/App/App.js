import React from 'react'
import AddForm from '../AddForm/AddForm';
import Header from '../Header/Header';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import Search from '../Search/Search';
import TodoList from '../TodoList/TodoList';

export default class App extends React.Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem("Make a coffee"),
            this.createTodoItem("Buy bread")
        ],
        term: '',
        filter: 'all'
    };

    createTodoItem (name) {
        return {
            id: this.maxId++,
            name,
            done: false,
            important: false
        };
    }

    addItem = (name) => {
        this.setState(({todoData}) => {
            return {
                todoData: [...todoData, this.createTodoItem(name)]
            };
        })
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const newTodoData = todoData.filter((el) => el.id !== id);

            return {
                todoData: newTodoData
            };
        });
    };

    changeTerm = (value) => {
        this.setState({
            term: value
        })
    }

    changeFilter = (value) => {
        this.setState({
            filter: value,
        });
    }

    toggleProperty(arr, id, propName) {
        const index = arr.findIndex((el) => el.id === id);
        const oldItem = arr[index];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        return [
            ...arr.slice(0, index),
            newItem,
            ...arr.slice(index + 1),
        ]
    }

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important'),
            }
        })
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done'),
            }
        })
    }

    search(items, term) {
        return items.filter((el) => el.name.toLowerCase().includes(term.toLowerCase()));
    }

    filter(items, filter) {
        switch (filter) {
            case 'all':
                return items;
            case 'done':
                return items.filter((el) => el.done);
            case 'active':
                return items.filter((el) => !el.done);
            default:
                return items;
        }
    }

    render() {
        const { todoData, term, filter } = this.state;

        const visibleItems = this.filter(this.search(todoData, term), filter);

        return (
            <>
                <Header />
                <div className="search-container">
                    <Search
                        onSearch={this.changeTerm}
                    />
                    <ItemStatusFilter 
                        filter={this.state.filter}
                        onFilterChange={this.changeFilter}
                    />
                </div>
                <TodoList
                    todoArray={visibleItems}
                    onDeleted={this.deleteItem}
                    onToggleDone={this.onToggleDone}
                    onToggleImportant={this.onToggleImportant}
                />
                <AddForm
                    onItemAdded={this.addItem}
                />
            </>
        )
    }
}