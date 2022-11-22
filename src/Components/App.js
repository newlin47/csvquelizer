import React, { Fragment } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Fileupload from './Fileupload';
import StudentsGraph from './StudentsGraph';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const App = () => {
	return (
		<Fragment>
			<Grid container direction='column' spacing={3} alignItems='center'>
				<Grid item>
					<Typography variant='h2'>CSV-quelizer</Typography>
				</Grid>
				<Grid item>
					<Link to={'/fileupload'}>Upload Files</Link>
				</Grid>
				<Grid item>
					<Link to={'/studentsgraph'}>Students Graph</Link>
				</Grid>
			</Grid>
			<Routes>
				<Route path='/fileupload' element={<Fileupload />}></Route>
				<Route path='/studentsgraph' element={<StudentsGraph />}></Route>
			</Routes>
		</Fragment>
	);
};

export default App;
