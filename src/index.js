import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import {createBrowserHistory} from "history";
import './index.css';
import "antd/dist/antd.css";
import Routes from './Routes';
import rootReducer from './redux/mainReducer';

const store = createStore(
	rootReducer,
	composeWithDevTools(),
);

export const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <Routes history={history}/>
    </Provider>,
    document.getElementById('root')
);
