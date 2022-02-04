import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import { useTheme } from './hooks/useTheme';
import DeseasesPage from './pages/DeseasesPage';
import FavoritesPage from './pages/FavoritesPage';
import MainPage from './pages/MainPage';
import MedicationsPage from './pages/MedicationsPage';
import ProfilePage from './pages/ProfilePage';

function App() {
	const { theme, setTheme } = useTheme(localStorage.getItem('colorTheme') || 'light')
	
	return (
		<BrowserRouter>
			<NavBar theme={theme} setTheme={setTheme} />
			<Routes>
				<Route path='/' element={<MainPage />}/>
				<Route path='/profile' element={<ProfilePage />}/>
				<Route path='/deseases' element={<DeseasesPage />}/>
				<Route path='/medications' element={<MedicationsPage />}/>
				<Route path='/favorites' element={<FavoritesPage />}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;