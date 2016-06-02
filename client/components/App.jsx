import React from 'react';
import ReactDom from 'react-dom';
import {browserHistory, Router, hashHistory, Route} from 'react-router';
import routes from './routes.js';

ReactDOM.render((<Router history={hashHistory} routes={routes} />), document.getElementById('app'));