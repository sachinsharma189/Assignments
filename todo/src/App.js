import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import Login from './component/Login';
import userDetails from './component/UserDetails';
import ToDo from './component/ToDo';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    }
  }

  handleOnSubmit = (item,event) => {
    event.preventDefault();
    for (let i in userDetails) {
        if (item.loginUser.username == userDetails[i].username && item.loginUser.password == userDetails[i].password) {
           
            this.setState({
              isLogin:true
            })
            break;
        }
    }
}
  render() {
    return (
      <div className="App">
      <Router>
          <Link to="/login">
            Go to Login
          </Link>

          <Route
            exact
            path="/login"
            render={(props) =>  <Login {...props} handleOnSubmit={this.handleOnSubmit}/> }
          />
          <PrivateRoute
            isLogin={this.state.isLogin}
            path="/todo"
            component={ToDo}
          />
        </Router>
      </div>
    );
  }
}

export default App;


const PrivateRoute = ({ component: Component, isLogin, ...restProps }) => {
  return (
    <Route {...restProps} render={(props) => isLogin ?  <Component {...props} /> : <Redirect to={'/'} />} />
  ) 
}