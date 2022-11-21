import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import Box from '@mui/material/Box';

const StudentsGraph = () => {
	const { students } = useSelector((state) => state);
	const [data, setData] = useState([]);
	const options = {
		title: {
			display: true,
			text: 'Students Per Grade',
			fontSize: 20,
		},
		legend: {
			display: true,
			position: 'right',
		},
	};

	useEffect(() => {
		if (students) {
			setData(students);
		}
	}, []);

	return (
		<Box sx={{ width: '100%' }}>
			<Bar options={options} data={data} />
		</Box>
	);
};

export default StudentsGraph;
