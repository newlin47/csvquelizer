import axios from 'axios';

const students = (state = [], action) => {
	if (action.type === 'SET_STUDENTS') {
		return action.students;
	}
	return state;
};

export const fetchStudents = () => {
	return async (dispatch) => {
		const response = await axios.get('/api/students');
		dispatch({ type: 'SET_STUDENTS', students: response.data });
	};
};

export default students;