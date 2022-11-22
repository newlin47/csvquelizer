import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { fetchEnrollments, addEnrollments } from '../store/enrollments';
import EnrollmentsGrid from './EnrollmentsGrid';
import { CSVLink } from 'react-csv';
import { useSnackbar } from 'notistack';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';

const csv = require('csvtojson');

const EnrollmentUpload = () => {
	const dispatch = useDispatch();
	const { enqueueSnackbar } = useSnackbar();
	const inputRef = useRef(null);
	const [file, setFile] = useState(null);
	let csvArray = null;
	const fileReader = new FileReader();

	useEffect(() => {
		dispatch(fetchEnrollments());
	}, []);

	const handleOnChange = (e) => {
		setFile(e.target.files[0]);
	};

	const resetFileInput = () => {
		inputRef.current.value = null;
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		if (file) {
			fileReader.readAsText(file);
			fileReader.onload = async function (event) {
				const csvOutput = event.target.result;
				if (csvOutput) {
					csvArray = await csv().fromString(csvOutput);
					dispatch(addEnrollments(csvArray));
					resetFileInput();
					enqueueSnackbar('You uploaded your new enrollments!', {
						variant: 'success',
					});
				}
			};
		}
	};

	const headers = [
		{ label: 'sectionId', key: 'sectionId' },
		{ label: 'studentId', key: 'studentId' },
	];

	const data = [{ sectionId: '', studentId: '' }];

	return (
		<Grid container spacing={3} direction='column' alignItems='center'>
			<br />
			<br />
			<br />
			<Typography variant='h2'>Import Enrollment CSV File</Typography>
			<br />
			<FormControl>
				<Input
					inputRef={inputRef}
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
					filename={'enrollmenttemplate.csv'}
					style={{ textDecoration: 'none', color: 'white' }}
				>
					Download CSV Enrollment Template
				</CSVLink>
			</Button>
			<br />
			<EnrollmentsGrid />
			<br />
		</Grid>
	);
};

export default EnrollmentUpload;
