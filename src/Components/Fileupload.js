import React, { useState } from 'react';
const csv = require('csvtojson');

function Fileupload() {
	const [file, setFile] = useState(null);
	let csvArray = null;
	const fileReader = new FileReader();

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
					console.log(csvArray);
				}
			};
		}
	};

	return (
		<div style={{ textAlign: 'center' }}>
			<h1>REACTJS CSV IMPORT EXAMPLE </h1>
			<form>
				<input
					type={'file'}
					id={'csvFileInput'}
					accept={'.csv'}
					onChange={handleOnChange}
				/>
				<button
					onClick={(e) => {
						handleOnSubmit(e);
					}}
				>
					IMPORT CSV
				</button>
			</form>
		</div>
	);
}

export default Fileupload;
