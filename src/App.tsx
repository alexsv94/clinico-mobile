import { observer } from 'mobx-react-lite';
import React, { Suspense, useContext, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Context } from '.';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar/NavBar';
import { useTheme } from './hooks/useTheme';
import { check } from './http/userAPI';

const App = observer(() => {
	const { theme, setTheme } = useTheme(localStorage.getItem('colorTheme') || 'light')
	const { user } = useContext(Context);

	useEffect(() => {
		check()
			.then(data => {
				user.setUser(data)
				user.setIsAuth(true)
			})
			.catch(() => {})
	}, [user])

	return (
		<BrowserRouter>
			<Suspense fallback={<div>Загрузка...</div>}>
				<NavBar theme={theme} setTheme={setTheme} />
				<AppRouter />
			</Suspense>
		</BrowserRouter>
	);
})

export default App;