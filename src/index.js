import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './Components/App';
import { Provider } from 'react-redux';
import store from './store';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { SnackbarProvider } from 'notistack';

export const Theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#1c6f02',
		},
		secondary: {
			main: '#f50057',
		},
	},
});

const root = createRoot(document.querySelector('#root'));

root.render(
	<Provider store={store}>
		<HashRouter>
			<ThemeProvider theme={Theme}>
				<CssBaseline />
				<SnackbarProvider maxSnack={3}>
					<App />
				</SnackbarProvider>
			</ThemeProvider>
		</HashRouter>
	</Provider>
);
