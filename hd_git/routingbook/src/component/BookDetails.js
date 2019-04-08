import React, { Component } from 'react';
import booksJSON from './booksJson.json';

class BookDetails extends Component {

    render() {
        let { name, author, cost, description, rating } = booksJSON.books[this.props.match.params.id];
        return (
            <div className="detail-card">
                <h2>
                    <b>Name: </b>  {name}
                </h2>

                <p>
                    <b>Author: </b>    {author}
                </p>

                <p>
                    <b>Description: </b> {description}
                </p>

                <p>
                    <b>Cost: </b>    {cost}
                </p>

                <p>
                    <b>Rating: </b> {rating}
                </p>
            </div>
        )
    }
}
export default BookDetails;