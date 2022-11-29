import axios from 'axios';

const projects = (state = [], action) => {
	if (action.type === 'SET_PROJECTS') {
		return action.projects;
	}
	return state;
};

export const fetchProjects = () => {
	return async (dispatch) => {
		const response = await axios.get('/api/projects');
		dispatch({ type: 'SET_PROJECTS', projects: response.data });
	};
};

export default projects;
