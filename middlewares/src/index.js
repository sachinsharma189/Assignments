import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'ACTION_1': { return { ...state, [action.type]: action.data } }
        case 'ACTION_2': { return { ...state, [action.type]: action.data } }
        case 'ACTION_3': { return { ...state, [action.type]: action.data } }
        default: { return { ...state, [action.type]: action.data } }
    }
}

const logger = store => next => action => {
    console.log(action.type, "fired");
    next(action);
}

const handleMultipleActions = store => next => action => {
    if (Array.isArray(action)) {
        action.map(a => store.dispatch({ type: a.type, data: a.data }) )
    } else {
        next(action);
    }
}

const middlewares = applyMiddleware(handleMultipleActions,logger);

const store = createStore(reducer, middlewares);

store.subscribe(() => {
    console.log("Store has changed", store.getState());
});


store.dispatch([
    {type:"ACTION_1" , data:"Action 1"},
    {type:"ACTION_2" , data:"Action 2"},
    {type:"ACTION_3" , data:"Action 3"},
    {type:"ACTION" , data:"default action"},
]);