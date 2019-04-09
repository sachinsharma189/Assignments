import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class BooksPrint extends Component{
    render(){
        const{name,thumbnail} = this.props.item;
        return(
            <div className="card">
                <Link to={"/bookDetails/"+this.props.id}>
                    <h2>{name}</h2>
                    <img src={thumbnail} alt=""/>
                </Link>
            </div>
        )
    }
}
export default BooksPrint;