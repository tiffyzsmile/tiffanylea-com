import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'containers/App';
// autotrack is used for google analytics in SPA's
// https://bit.ly/1Ehpwbf
import 'autotrack';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import * as serviceWorker from './serviceWorker';

Amplify.configure(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
