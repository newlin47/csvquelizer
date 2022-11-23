// import React, { useState, useEffect, Fragment } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchSections } from '../store/sections';
// import Typography from '@mui/material/Typography';
// import {
// 	BarChart,
// 	Bar,
// 	XAxis,
// 	YAxis,
// 	CartesianGrid,
// 	Tooltip,
// 	Legend,
// 	ResponsiveContainer,
// } from 'recharts';

// const SectionsGraph = () => {
// 	const dispatch = useDispatch();
// 	const { sections } = useSelector((state) => state);
// 	const [data, setData] = useState([]);

// 	useEffect(() => {
// 		dispatch(fetchSections());
// 	}, []);

// 	useEffect(() => {
// 		if (sections) {
// 			setData([
// 				{
// 					name: '',
// 					total: sixth,
// 				},
// 			]);
// 		}
// 	}, [sections]);

// 	return (
// 		<Fragment>
// 			<br />
// 			<Typography variant='h2' align='center'>
// 				Total Enrollment by Section
// 			</Typography>
// 			<br />
// 			<ResponsiveContainer width='100%' height='100%'>
// 				<BarChart
// 					width={500}
// 					height={300}
// 					data={data}
// 					margin={{
// 						top: 5,
// 						right: 30,
// 						left: 20,
// 						bottom: 5,
// 					}}
// 				>
// 					<CartesianGrid strokeDasharray='3 3' />
// 					<XAxis dataKey='name' />
// 					<YAxis />
// 					<Tooltip />
// 					<Legend />
// 					<Bar dataKey='total' fill='#1c6f02' />
// 				</BarChart>
// 			</ResponsiveContainer>
// 		</Fragment>
// 	);
// };

// export default StudentsGraph;
