import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar/NavBar';
import { useTheme } from './hooks/useTheme';
import { AppRoutes } from './utils/enums';

function App() {
	const { theme, setTheme } = useTheme(localStorage.getItem('colorTheme') || 'light')

	return (
		<BrowserRouter>
			<Suspense fallback={<div>Загрузка...</div>}>
				<NavBar theme={theme} setTheme={setTheme} />
				<AppRouter />
			</Suspense>
		</BrowserRouter>
	);
}

export default App;