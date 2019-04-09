import React, { Component } from 'react';

class Form extends Component {
    state={
       dish: {}
    };
    getInputValue = (e) => {
        let newdish={}
        newdish[e.target.name]=e.target.value
        this.setState({
            dish:{
                ...this.state.dish,
                ...newdish
            }
        })
        };
    render() {
        return (
            <form onSubmit={(event)=>this.props.handleAddDish(event,this.state.dish)}>
                <input type='textbox' placeholder='Dishname' value={this.state.dish.name} name='name' onChange={this.getInputValue}></input>
                <input type='textbox' placeholder='Cost' value={this.state.dish.price} name='price' onChange={this.getInputValue}></input>
                <input type='submit'></input>
                <br/>
            </form>
        );
    }
}
export default Form;