import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {
                name: '',
                quantity: 0,
                price: 0,
            }
        }

    }
    getInputValue = event => {
        let newitem = {};
        let formInput = event.target.value.split("-");
        newitem.name = formInput[0];
        newitem.price = formInput[1];
        newitem.quantity = 1;
        newitem.total = newitem.price * newitem.quantity;
        this.setState({
            item: newitem
        })

    }
    render() {
        return (
            <div>
                <form
                    onSubmit={(event) => this.props.handleAddItem(event, this.state.item)}>
                    <input
                        type='textbox'
                        name='name'
                        onChange={this.getInputValue}
                        placeholder='Enter Name and Price seperated by a hyphen'>
                    </input>
                </form>
                <table>
                    <tr>
                        <td>Name</td>
                        <td>Quantity</td>
                        <td>Price</td>
                        <td>Total</td>
                        <td>Increase</td>
                        <td>Decrease</td>
                        <td>Delete</td>
                    </tr>
                    {this.props.cart.map((value, index) => {
                        return (
                            <tr>
                                <td>{value.name}</td>
                                <td>{value.quantity}</td>
                                <td>{value.price}</td>
                                <td>{value.total}</td>
                                <td>
                                    <button
                                        className="plus"
                                        onClick={() => this.props.plusItem(index)}>
                                        +
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="minus"
                                        onClick={() => this.props.minusItem(index)}>
                                        -
                                    </button>
                                </td>
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
export default Item;