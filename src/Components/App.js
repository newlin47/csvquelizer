import React, { Fragment } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Fileupload from './Fileupload';
import EnrollmentUpload from './EnrollmentUpload';
import StudentsGraph from './StudentsGraph';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const App = () => {
	const pages = [
		{ name: 'Upload Student File', url: '/fileupload' },
		{ name: 'View Student Graph', url: '/studentsgraph' },
		{ name: 'Upload Student Enrollments', url: '/enrollmentupload' },
	];

	return (
		<Fragment>
			<AppBar position='static'>
				<Toolbar disableGutters>
					<Typography
						variant='h4'
						noWrap
						component='a'
						href='/'
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: '#1c6f02',
							textDecoration: 'none',
						}}
					>
						CSV-quelizer
					</Typography>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'flex-end',
						}}
					>
						{pages.map((page) => (
							<Button
								variant='standard'
								key={page.name}
								sx={{ margin: '1rem' }}
							>
								<Link
									to={page.url}
									style={{ textDecoration: 'none', color: 'white' }}
									underline='hover'
								>
									{page.name}
								</Link>
							</Button>
						))}
					</Box>
				</Toolbar>
			</AppBar>
			<Routes>
				<Route path='/fileupload' element={<Fileupload />}></Route>
				<Route path='/studentsgraph' element={<StudentsGraph />}></Route>
				<Route path='/enrollmentupload' element={<EnrollmentUpload />}></Route>
			</Routes>
		</Fragment>
	);
};

export default App;
