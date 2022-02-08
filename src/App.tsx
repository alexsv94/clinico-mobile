import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import { useTheme } from './hooks/useTheme';

const DeseasesPage = lazy(() => import('./pages/DeseasesPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage'));
const MainPage = lazy(() => import('./pages/MainPage'));
const MedicationsPage = lazy(() => import('./pages/MedicationsPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));

function App() {
	const { theme, setTheme } = useTheme(localStorage.getItem('colorTheme') || 'light')

	return (
		<BrowserRouter>
			<Suspense fallback={<div>Загрузка...</div>}>
				<NavBar theme={theme} setTheme={setTheme} />
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/profile' element={<ProfilePage />} />
					<Route path='/deseases' element={<DeseasesPage />} />
					<Route path='/medications' element={<MedicationsPage />} />
					<Route path='/favorites' element={<FavoritesPage />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}

export default App;