import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers/rootReducer'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

const middleware = applyMiddleware(
  thunk,
  createLogger({
    predicate: (getState, action) => process.env.NODE_ENV === `development` && false
  })
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composeEnhancersMiddleware = composeEnhancers(middleware);

export default function configureStore() {
  return createStore(
    rootReducer,
    composeEnhancersMiddleware
  );
}
