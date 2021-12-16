import React from 'react';
import ReactDOM from 'react-dom';
import '../src/css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Reducer from './store/reducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(Reducer)
store.dispatch({type: 'GET_COMPANY_DATA'})
store.dispatch({type: 'GET_OFFICE_DATA'})

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
