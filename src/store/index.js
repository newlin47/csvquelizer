import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import students from './students';

const reducer = combineReducers({
	students,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
export * from './students';
