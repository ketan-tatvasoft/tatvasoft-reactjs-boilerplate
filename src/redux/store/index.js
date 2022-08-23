import { createStore, compose } from 'redux';

// Reducer
import rootReducers from '../reducers';

const store = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Remove this line in production to disable redux dev-tools
)(createStore)(rootReducers);

export default store;
