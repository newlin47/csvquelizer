import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './Components/App';
import { Provider } from 'react-redux';
import store from './store';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const Theme = createTheme({
	palette: {
		mode: 'dark',
		text: {
			primary: '#4caf50',
		},
	},
	typography: {
		fontFamily: ['"Courier New"', 'monospace'].join(','),
	},
});

const root = createRoot(document.querySelector('#root'));

root.render(
	<Provider store={store}>
		<HashRouter>
			<ThemeProvider theme={Theme}>
				<CssBaseline />
				<App />
			</ThemeProvider>
		</HashRouter>
	</Provider>
);
