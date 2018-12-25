import 'bootstrap/dist/css/bootstrap.min.css';
import Popper from 'popper.js';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Moment from 'react-moment';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <App />, document.getElementById('root'));
registerServiceWorker();
