import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchStudents, addStudents } from '../store/students';
import StudentsGrid from './StudentsGrid';
import { CSVLink } from 'react-csv';
import { useSnackbar } from 'notistack';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';

const csv = require('csvtojson');

function Fileupload() {
	const dispatch = useDispatch();
	const { enqueueSnackbar } = useSnackbar();
	const [file, setFile] = useState(null);
	let csvArray = null;
	const fileReader = new FileReader();

	useEffect(() => {
		dispatch(fetchStudents());
	}, []);

	const handleOnChange = (e) => {
		setFile(e.target.files[0]);
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		if (file) {
			fileReader.readAsText(file);
			fileReader.onload = async function (event) {
				const csvOutput = event.target.result;
				if (csvOutput) {
					csvArray = await csv().fromString(csvOutput);
					dispatch(addStudents(csvArray));
					enqueueSnackbar('You uploaded your students!', {
						variant: 'success',
					});
				}
			};
		}
	};

	const headers = [
		{ label: 'id', key: 'id' },
		{ label: 'firstName', key: 'firstName' },
		{ label: 'lastName', key: 'lastName' },
		{ label: 'gradelevel', key: 'gradelevel' },
	];

	const data = [{ id: '', firstName: '', lastName: '', gradelevel: '' }];

	return (
		<Grid container spacing={3} direction='column' alignItems='center'>
			<br />
			<br />
			<br />
			<Typography variant='h2'>Import CSV File</Typography>
			<br />
			<FormControl>
				<Input
					type={'file'}
					id={'csvFileInput'}
					accept={'.csv'}
					onChange={handleOnChange}
				/>
				<Button
					variant='contained'
					onClick={(e) => {
						handleOnSubmit(e);
					}}
				>
					IMPORT CSV
				</Button>
			</FormControl>
			<br />
			<Button variant='contained'>
				<CSVLink
					data={data}
					headers={headers}
					filename={'studenttemplate.csv'}
					style={{ textDecoration: 'none', color: 'white' }}
				>
					Download CSV Student Template
				</CSVLink>
			</Button>
			<br />
			<br />
			<StudentsGrid />
		</Grid>
	);
}

export default Fileupload;
