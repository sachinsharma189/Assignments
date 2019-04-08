import React, { Component } from 'react';
import Item from './Item';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [
                {
                    name: 'Apple',
                    quantity: 5,
                    price: 100,
                    total: 500
                },
                {
                    name: 'Mango',
                    quantity: 10,
                    price: 100,
                    total: 1000
                },
                {
                    name: 'Strawberry',
                    quantity: 5,
                    price: 200,
                    total: 1000
                }
            ]
        }
    }
    handleAddItem = (event, item) => {
        event.preventDefault();
        this.state.cart.push(item);
        this.setState({
            cart: this.state.cart,
        })
    }
    plusItem = (index) => {
        let cart = [...this.state.cart];
        cart[index].quantity = cart[index].quantity + 1;
        cart[index].total = cart[index].quantity * cart[index].price;
        this.setState({
            cart: cart
        })
        this.sumtotal();
    }
    minusItem = (index) => {
        let cart = [...this.state.cart];
        cart[index].quantity = cart[index].quantity - 1;
        cart[index].total = cart[index].quantity * cart[index].price;
        this.setState({
            cart: cart
        }) 
        this.sumtotal();
    }
    sumtotal = () => {
        let total = 0;
        this.state.cart.forEach(item => {
            total = total + item.total;
            this.setState({
                total: total
            });
        });
    };
    deleteItem = index => {
        let cart = this.state.cart;
        cart.splice(index, 1);
        if (cart.length === 0) {
          this.setState({
            cart: cart,
            total: 0
          });
        } else {
          this.setState({
            cart: cart
          });
        }
        this.sumtotal();
      };

    render() {
        return (
            <div>
                <Item
                    cart={this.state.cart}
                    handleAddItem={this.handleAddItem}
                    plusItem={this.plusItem}
                    minusItem={this.minusItem}
                    deleteItem = {this.deleteItem} />
                <h4> Total : {this.state.total}</h4>
            </div>
        );
    }
}
export default Cart;