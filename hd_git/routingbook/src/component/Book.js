import React, { Component } from 'react';


class Book extends Component {

    render() {
        console.log("hello");
        console.log(this.state.userdetails);
        return (
            <div>
                <h1> Listing of Books </h1>
            </div>
        );
    }
}
export default Book;