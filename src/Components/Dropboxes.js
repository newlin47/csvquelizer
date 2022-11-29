// import React, { useState, useEffect } from 'react';
// import Container from '@mui/material/Container';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';

// const Dropboxes = () => {
// 	const dispatch = useDispatch();
// 	const { id } = useParams();
// 	const { projects } = useSelector((state) => state);
// 	const [project, setProject] = useState({});
// 	// const [tasks, setTasks] = useState([]);
// 	const [todo, setTodo] = useState([]);
// 	const [progress, setProgress] = useState([]);
// 	const [done, setDone] = useState([]);

// 	useEffect(() => {
// 		if (projects.length) {
// 			const project = projects.find((project) => project.id === id);
// 			setProject(project);
// 			setTodo(project.tasks.filter((task) => task.status === 'To Do'));
// 			setProgress(
// 				project.tasks.filter((task) => task.status === 'In Progress')
// 			);
// 			setDone(project.tasks.filter((task) => task.status === 'Done'));
// 		}
// 	}, [projects]);

// 	return (
// 		<Container
// 			sx={{ display: 'flex', justifyContent: 'center', height: '100%' }}
// 		>
// 			<DragDropContext>
// 				<Droppable droppableId={'To Do'}>
// 					{(provided, snapshot) => {
// 						<div
// 							{...provided.droppableProps}
// 							ref={provided.innerRef}
// 							style={{
// 								background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
// 								padding: 4,
// 								width: 250,
// 								minHeight: 500,
// 							}}
// 						>
// 							{todo.map((task, index) => {
// 								return (
// 									<Draggable key={task.id} draggableId={task.id} index={index}>
// 										{(provided, snapshot) => (
// 											<div
// 												ref={provided.innerRef}
// 												{...provided.draggableProps}
// 												{...provided.dragHandleProps}
// 												style={{
// 													userSelect: 'none',
// 													padding: 16,
// 													margin: '0 0 8px 0',
// 													minHeight: '50px',
// 													backgroundColor: snapshot.isDragging
// 														? '#263B4A'
// 														: '#456C86',
// 													color: 'white',
// 													...provided.draggableProps.style,
// 												}}
// 											>
// 												{task.taskName}
// 											</div>
// 										)}
// 									</Draggable>
// 								);
// 							})}
// 							{provided.placeholder}
// 						</div>;
// 					}}
// 				</Droppable>
// 			</DragDropContext>
// 		</Container>
// 	);
// };

// export default Dropboxes;

import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';

const itemsFromBackend = [
	{ id: uuidv4(), content: 'First task' },
	{ id: uuidv4(), content: 'Second task' },
	{ id: uuidv4(), content: 'Third task' },
	{ id: uuidv4(), content: 'Fourth task' },
	{ id: uuidv4(), content: 'Fifth task' },
];

const columnsFromBackend = {
	['1']: {
		name: 'Requested',
		items: itemsFromBackend,
	},
	['2']: {
		name: 'To do',
		items: [],
	},
	['3']: {
		name: 'In Progress',
		items: [],
	},
	['4']: {
		name: 'Done',
		items: [],
	},
};

const onDragEnd = (result, columns, setColumns) => {
	if (!result.destination) return;
	const { source, destination } = result;

	if (source.droppableId !== destination.droppableId) {
		const sourceColumn = columns[source.droppableId];
		const destColumn = columns[destination.droppableId];
		const sourceItems = [...sourceColumn.items];
		const destItems = [...destColumn.items];
		const [removed] = sourceItems.splice(source.index, 1);
		destItems.splice(destination.index, 0, removed);
		setColumns({
			...columns,
			[source.droppableId]: {
				...sourceColumn,
				items: sourceItems,
			},
			[destination.droppableId]: {
				...destColumn,
				items: destItems,
			},
		});
	} else {
		const column = columns[source.droppableId];
		const copiedItems = [...column.items];
		const [removed] = copiedItems.splice(source.index, 1);
		copiedItems.splice(destination.index, 0, removed);
		setColumns({
			...columns,
			[source.droppableId]: {
				...column,
				items: copiedItems,
			},
		});
	}
};

const Dropboxes = () => {
	const [columns, setColumns] = useState(columnsFromBackend);
	return (
		<div style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
			<DragDropContext
				onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
			>
				{Object.entries(columns).map(([columnId, column], index) => {
					return (
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}
							key={columnId}
						>
							<h2>{column.name}</h2>
							<div style={{ margin: 8 }}>
								<Droppable droppableId={columnId} key={columnId}>
									{(provided, snapshot) => {
										return (
											<div
												{...provided.droppableProps}
												ref={provided.innerRef}
												style={{
													background: snapshot.isDraggingOver
														? 'lightblue'
														: 'lightgrey',
													padding: 4,
													width: 250,
													minHeight: 500,
												}}
											>
												{column.items.map((item, index) => {
													return (
														<Draggable
															key={item.id}
															draggableId={item.id}
															index={index}
														>
															{(provided, snapshot) => {
																return (
																	<div
																		ref={provided.innerRef}
																		{...provided.draggableProps}
																		{...provided.dragHandleProps}
																		style={{
																			userSelect: 'none',
																			padding: 16,
																			margin: '0 0 8px 0',
																			minHeight: '50px',
																			backgroundColor: snapshot.isDragging
																				? '#263B4A'
																				: '#456C86',
																			color: 'white',
																			...provided.draggableProps.style,
																		}}
																	>
																		{item.content}
																	</div>
																);
															}}
														</Draggable>
													);
												})}
												{provided.placeholder}
											</div>
										);
									}}
								</Droppable>
							</div>
						</div>
					);
				})}
			</DragDropContext>
		</div>
	);
};

export default Dropboxes;
