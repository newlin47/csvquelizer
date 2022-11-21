import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchStudents } from '../store/students';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';

const csv = require('csvtojson');

function Fileupload() {
	const dispatch = useDispatch();
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
				}
			};
		}
	};

	return (
		<Grid container spacing={3} direction='column' alignItems='center'>
			<br />
			<br />
			<br />
			<Typography variant='h2'>Import CSV File</Typography>
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
		</Grid>
	);
}

export default Fileupload;
