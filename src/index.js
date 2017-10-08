import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import 'bulma/css/bulma.css';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
