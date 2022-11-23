import axios from 'axios';

const sections = (state = [], action) => {
	if (action.type === 'SET_SECTIONS') {
		return action.sections;
	}
	return state;
};

export const fetchSections = () => {
	return async (dispatch) => {
		const response = await axios.get('/api/sections');
		dispatch({ type: 'SET_SECTIONS', sections: response.data });
	};
};

export default sections;
