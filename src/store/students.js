import axios from 'axios';

const students = (state = [], action) => {
	if (action.type === 'SET_STUDENTS') {
		return action.students;
	}
	if (action.type === 'ADD_STUDENTS') {
		return [...action.students, ...state];
	}
	return state;
};

export const fetchStudents = () => {
	return async (dispatch) => {
		const response = await axios.get('/api/students');
		dispatch({ type: 'SET_STUDENTS', students: response.data });
	};
};

export const addStudents = (csvArray) => {
	return async (dispatch) => {
		const response = await axios.post('/api/students', csvArray);
		dispatch({ type: 'ADD_STUDENTS', students: response.data });
	};
};

export default students;
