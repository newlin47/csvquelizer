import React, { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStudents } from '../store/students';
import Typography from '@mui/material/Typography';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';

const StudentsGraph = () => {
	const dispatch = useDispatch();
	const { students } = useSelector((state) => state);
	const [data, setData] = useState([]);

	useEffect(() => {
		dispatch(fetchStudents());
	}, []);

	useEffect(() => {
		if (students) {
			const sixth = students.filter(
				(student) => student.gradelevel === '6'
			).length;
			const seventh = students.filter(
				(student) => student.gradelevel === '7'
			).length;
			const eighth = students.filter(
				(student) => student.gradelevel === '8'
			).length;
			const ninth = students.filter(
				(student) => student.gradelevel === '9'
			).length;
			const tenth = students.filter(
				(student) => student.gradelevel === '10'
			).length;
			const eleventh = students.filter(
				(student) => student.gradelevel === '11'
			).length;
			const twelfth = students.filter(
				(student) => student.gradelevel === '12'
			).length;
			setData([
				{
					name: 'Grade 6',
					total: sixth,
				},
				{
					name: 'Grade 7',
					total: seventh,
				},
				{
					name: 'Grade 8',
					total: eighth,
				},
				{
					name: 'Grade 9',
					total: ninth,
				},
				{
					name: 'Grade 10',
					total: tenth,
				},
				{
					name: 'Grade 11',
					total: eleventh,
				},
				{
					name: 'Grade 12',
					total: twelfth,
				},
			]);
		}
	}, [students]);

	return (
		<Fragment>
			<br />
			<Typography variant='h2' align='center'>
				Total Enrollment by Grade
			</Typography>
			<br />
			<ResponsiveContainer width='100%' height='100%'>
				<BarChart
					width={500}
					height={300}
					data={data}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='name' />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey='total' fill='#1c6f02' />
				</BarChart>
			</ResponsiveContainer>
		</Fragment>
	);
};

export default StudentsGraph;
