import React, { Component } from 'react';

export default class Counter extends Component {


render() {
let { counter, index } = this.props;

const { pluscounter, minuscounter } = this.props;


return (
<div className='counter'>

<button className='btn' onClick={() => pluscounter(index+1)}>+</button>
<span> {counter} </span>
<button className='btn' onClick={() => minuscounter(index+1)}>-</button>
</div>

);
}


}