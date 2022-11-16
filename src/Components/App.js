import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Fileupload from './Fileupload';

const App = () => {
	return (
		<div>
			<div>
				<h1>HELLO WORLD</h1>
			</div>
			<div>
				<nav>
					<Link to={'/fileupload'}>Upload Files</Link>
				</nav>
			</div>
			<Routes>
				<Route path='/fileupload' element={<Fileupload />}></Route>
			</Routes>
		</div>
	);
};

export default App;
