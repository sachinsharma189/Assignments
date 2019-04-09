import React, { Component } from 'react';
import booksJSON from './booksJson.json';
import BooksPrint from './BooksPrint';

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [...booksJSON.books]
        }

    }
    render() {
        let {books} = this.state;
        return (
            <div>
                {
                    books.map((item, index) => {
                        return <BooksPrint key={index} item={item} id={index}/>
                    })
                }
            </div>
        )
    }
}
export default BookList;