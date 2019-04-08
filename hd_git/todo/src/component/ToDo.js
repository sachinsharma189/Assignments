import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: [
                {
                    description:'ToDo item 1'
                },
                {
                    description:'ToDo item 2'
                }
            ]
        }
    }
    handleAddItem = (event, item) => {
        event.preventDefault();
        this.state.todo.push(item);
        this.setState({
            todo: this.state.todo,
        })
    }
    
    deleteItem = index => {
        let todo = this.state.todo;
        todo.splice(index, 1);
        if (todo.length === 0) {
          this.setState({
            todo: todo,
          });
        } else {
          this.setState({
            todo: todo
          });
        }
      };

    render() {
        return (
            <div>
                <ToDoItem
                    todo={this.state.todo}
                    handleAddItem={this.handleAddItem}
                    deleteItem = {this.deleteItem} />
            </div>
        );
    }
}
export default ToDo;