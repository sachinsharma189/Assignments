import React, { Component } from 'react';

class ToDoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {
                description:''
            }
        }

    }
    getInputValue = e => {
        e.preventDefault();
        this.setState({
            item: { ...this.state.item, [e.target.name]: [e.target.value] }
        })

    }
    render() {
        return (
            <div>
                <form
                    onSubmit={(event) => this.props.handleAddItem(event, this.state.item)}>
                    <input
                        type='textbox'
                        name='description'
                        onChange={this.getInputValue}
                        placeholder='Enter ToDo List Description'>
                    </input>
                </form>
                <table>
                    {this.props.todo.map((value, index) => {
                        return (
                            <tr>
                                <td>{value.description}</td>
                                <td>
                                    <button
                                        className="delete"
                                        onClick={() => this.props.deleteItem(index)}>
                                        X
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        );
    }
}
export default ToDoItem;