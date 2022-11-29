import React, { Fragment, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Fileupload from './Fileupload';
import EnrollmentUpload from './EnrollmentUpload';
import GraphsDashboard from './GraphsDashboard';
import Dropboxes from './Dropboxes';
import Projects from './Projects';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { fetchProjects } from '../store/projects';

const App = () => {
	const pages = [
		{ name: 'Upload Student File', url: '/fileupload' },
		{ name: 'View Student Graph', url: '/studentsgraph' },
		{ name: 'Upload Student Enrollments', url: '/enrollmentupload' },
		{ name: 'Projects', url: '/projects' },
	];
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProjects());
	}, []);

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
				<Route path='/graphsdashboard' element={<GraphsDashboard />}></Route>
				<Route path='/enrollmentupload' element={<EnrollmentUpload />}></Route>
				<Route path='/projects/:id' element={<Dropboxes />}></Route>
				<Route path='/projects' element={<Projects />}></Route>
			</Routes>
		</Fragment>
	);
};

export default App;
