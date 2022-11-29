import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Dropboxes = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const { projects } = useSelector((state) => state);
	const [project, setProject] = useState({});
	// const [tasks, setTasks] = useState([]);
	const [todo, setTodo] = useState([]);
	const [progress, setProgress] = useState([]);
	const [done, setDone] = useState([]);

	useEffect(() => {
		if (projects.length) {
			const project = projects.find((project) => project.id === id);
			setProject(project);
			setTodo(project.tasks.filter((task) => task.status === 'To Do'));
			setProgress(
				project.tasks.filter((task) => task.status === 'In Progress')
			);
			setDone(project.tasks.filter((task) => task.status === 'Done'));
		}
	}, [projects]);

	return (
		<Container
			sx={{ display: 'flex', justifyContent: 'center', height: '100%' }}
		>
			<DragDropContext>
				<Droppable droppableId={'To Do'}>
					{(provided, snapshot) => {
						<div
							{...provided.droppableProps}
							ref={provided.innerRef}
							style={{
								background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
								padding: 4,
								width: 250,
								minHeight: 500,
							}}
						>
							{todo.map((task, index) => {
								return (
									<Draggable key={task.id} draggableId={task.id} index={index}>
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
													{task.taskName}
												</div>
											);
										}}
									</Draggable>
								);
							})}
						</div>;
					}}
				</Droppable>
				{/* <Droppable droppableId={'In Progress'}></Droppable>
				<Droppable droppableId={'Done'}></Droppable> */}
			</DragDropContext>
		</Container>
	);
};

export default Dropboxes;

// return (
//     <Container
//         sx={{ display: 'flex', justifyContent: 'center', height: '100%' }}
//     >
//         <DragDropContext onDragEnd={(result) => console.log(result)}>
//             {Object.entries(columns).map(([id, column]) => {
//                 return (
//                     <Droppable droppableId={id}>
//                         {(provided, snapshot) => {
//                             return (
//                                 <div
//                                     {...provided.droppableProps}
//                                     ref={provided.innerRef}
//                                     style={{
//                                         background: snapshot.isDraggingOver
//                                             ? 'lightblue'
//                                             : 'lightgrey',
//                                         padding: 4,
//                                         width: 250,
//                                         minHeight: 500,
//                                     }}
//                                 >
//                                     {column.items.map((item, index) => {
//                                         return (
//                                             <Draggable
//                                                 key={item.id}
//                                                 draggableId={item.id}
//                                                 index={index}
//                                             >
//                                                 {(provided, snapshot) => {
//                                                     return (
//                                                         <div
//                                                             ref={provided.innerRef}
//                                                             {...provided.draggableProps}
//                                                             {...provided.dragHandleProps}
//                                                             style={{
//                                                                 userSelect: 'none',
//                                                                 padding: 16,
//                                                                 margin: '0 0 8px 0',
//                                                                 minHeight: '50px',
//                                                                 backgroundColor: snapshot.isDragging
//                                                                     ? '#263B4A'
//                                                                     : '#456C86',
//                                                                 color: 'white',
//                                                                 ...provided.draggableProps.style,
//                                                             }}
//                                                         >
//                                                             {item.content}
//                                                         </div>
//                                                     );
//                                                 }}
//                                             </Draggable>
//                                         );
//                                     })}
//                                 </div>
//                             );
//                         }}
//                     </Droppable>
//                 );
//             })}
//         </DragDropContext>
//     </Container>
// );
