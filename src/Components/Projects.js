import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Typography } from '@mui/material';

const Projects = () => {
	const { projects } = useSelector((state) => state);
	return (
		<Container>
			<Typography variant='h2'>Current Projects</Typography>
			<Typography variant='ul'>
				{projects.map((project) => {
					return (
						<Typography variant='li' key={project.id}>
							<Link to={`/projects/${project.id}`}>{project.projectName}</Link>
						</Typography>
					);
				})}
			</Typography>
		</Container>
	);
};

export default Projects;
