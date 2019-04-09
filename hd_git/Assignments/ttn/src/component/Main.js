import React, { Component} from 'react';
import './Main.css';

class Main extends Component{

        // state={
        //     name:'Rahul'
        // }

    render(){
        return(
            <div className="main">
            <main>
                Main Section
                <br/>
                <button onClick={this.props.counter}> Count </button>
                {/* <button onClick={()=>{this.props.counter(this.state.name)}}> Name</button> */}
            </main>
            <aside>
                Aside Component
            </aside>
            </div>
        );
    }
}

export default Main;