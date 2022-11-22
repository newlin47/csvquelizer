import React, { Fragment } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Fileupload from './Fileupload';
import StudentsGraph from './StudentsGraph';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const App = () => {
	const pages = [
		{ name: 'Upload Student File', url: '/fileupload' },
		{ name: 'View Student Graph', url: '/studentsgraph' },
	];

	return (
		<Fragment>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position='static'>
					<Toolbar>
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
								color: 'white',
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
										style={{ textDecoration: 'none', color: '#1c6f02' }}
										underline='hover'
									>
										{page.name}
									</Link>
								</Button>
							))}
						</Box>
					</Toolbar>
				</AppBar>
			</Box>
			<Routes>
				<Route path='/fileupload' element={<Fileupload />}></Route>
				<Route path='/studentsgraph' element={<StudentsGraph />}></Route>
			</Routes>
		</Fragment>
	);
};

export default App;
