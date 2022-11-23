import React, { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const EnrollmentsGrid = () => {
	const { enrollments } = useSelector((state) => state);
	const [rows, setRows] = useState([]);
	const [columns, setColumns] = useState([]);

	useEffect(() => {
		if (enrollments) {
			setColumns([
				{ field: 'id', headerName: 'ID', width: 150 },
				{ field: 'sectionId', headerName: 'Section ID', width: 150 },
				{ field: 'teacher', headerName: 'Teacher', width: 150 },
				{ field: 'studentId', headerName: 'Student ID', width: 150 },
				{ field: 'firstName', headerName: 'First Name', width: 150 },
				{ field: 'lastName', headerName: 'Last Name', width: 150 },
				{
					field: 'coursecode',
					headerName: 'Course Code',
					width: 90,
				},
				{ field: 'coursename', headerName: 'Course Name', width: 150 },
			]);

			console.log(enrollments);
			setRows(
				enrollments.map((enrollment) => {
					return {
						id: enrollment.id,
						sectionId: enrollment.sectionId,
						teacher: enrollment.section.teacher.lastName,
						studentId: enrollment.studentId,
						firstName: enrollment.student.firstName,
						lastName: enrollment.student.lastName,
						coursecode: enrollment.section.course.coursecode,
						coursename: enrollment.section.course.coursename,
					};
				})
			);
		}
	}, [enrollments]);

	return (
		<Fragment>
			<Typography variant='h4'>Current Enrollments</Typography>
			<Box sx={{ height: '400', width: '100%', padding: '2rem' }}>
				<DataGrid
					rows={rows}
					columns={columns}
					pageSize={10}
					rowsPerPageOptions={[10]}
					checkboxSelection
					disableSelectionOnClick
					getRowId={(row) => row.id}
				/>
			</Box>
		</Fragment>
	);
};

export default EnrollmentsGrid;
