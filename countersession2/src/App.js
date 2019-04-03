import React, { Component } from 'react';
import './App.css';
import Counter from './component/Counter';

class App extends Component {

state = {
counters: [0, 0, 0]
}

pluscounter = index => {
let temp_counter = [...this.state.counters];
if (index) {
temp_counter[index-1]++;
}

else {
temp_counter = temp_counter.map(e => ++e);
}

this.setState({
counters: temp_counter
});

}

minuscounter = index => {
let temp_counter = [...this.state.counters];
if (index) {
temp_counter[index-1]--;
}

else {
temp_counter = temp_counter.map(e => --e);
}

this.setState({
counters: temp_counter
});

}


render() {
return (
<div className="App" >
{
this.state.counters.map((counter, index) => {
return (
<Counter
counter={counter}
index={index}
pluscounter={this.pluscounter}
minuscounter={this.minuscounter}
/>);
})
}
< button className='btn' onClick={() => this.pluscounter()} > +</button >
<button className='btn' onClick={() => this.minuscounter()}>-</button>
</div >
);
}
}

export default App;