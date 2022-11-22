import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

const StudentsGrid = () => {
	const { students } = useSelector((state) => state);
	const [rows, setRows] = useState([]);
	const [columns, setColumns] = useState([]);

	useEffect(() => {
		if (students) {
			setColumns([
				{ field: 'id', headerName: 'ID', width: 150 },
				{ field: 'firstName', headerName: 'First Name', width: 225 },
				{ field: 'lastName', headerName: 'Last Name', width: 255 },
				{ field: 'gradelevel', headerName: 'Grade Level', width: 90 },
			]);
			setRows(students);
		}
	}, [students]);

	return (
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
	);
};

export default StudentsGrid;
