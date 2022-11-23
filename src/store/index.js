import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import students from './students';
import enrollments from './enrollments';
import sections from './sections';

const reducer = combineReducers({
	students,
	enrollments,
	sections,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
export * from './students';
export * from './enrollments';
export * from './sections';
