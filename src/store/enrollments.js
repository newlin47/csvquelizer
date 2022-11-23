import axios from 'axios';

const enrollments = (state = [], action) => {
	if (action.type === 'SET_ENROLLMENTS') {
		return action.enrollments;
	}
	if (action.type === 'ADD_ENROLLMENTS') {
		return [...action.enrollments, ...state];
	}
	return state;
};

export const fetchEnrollments = () => {
	return async (dispatch) => {
		const response = await axios.get('/api/enrollments');
		dispatch({ type: 'SET_ENROLLMENTS', enrollments: response.data });
	};
};

export const addEnrollments = (csvArray) => {
	return async (dispatch) => {
		const response = await axios.post('/api/enrollments', csvArray);
		dispatch(fetchEnrollments());
	};
};

export default enrollments;
