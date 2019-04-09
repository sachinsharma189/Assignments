import React, { Component } from 'react';

class Disheslist extends Component {
    additionaldetails=()=>{
        console.log(this.props.data.price);
    }
    render() {
       return (
           <div>
             <h2 onClick={this.additionaldetails}>{this.props.data.name}</h2>
             <h2>{this.props.data.price}</h2>
             </div>
       );
    }
 }
 export default Disheslist;