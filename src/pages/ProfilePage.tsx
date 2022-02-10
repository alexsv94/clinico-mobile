import React, { useContext, useState } from 'react';
import { Context } from '..';
import { login } from '../http/userAPI';
import { setTitle } from '../utils/functions';

const ProfilePage = () => {
	setTitle('Профиль');

	//caches.keys().then(keys => keys.forEach(key => caches.delete(key)));

	const { user } = useContext(Context);

	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const signIn = async () => {
		try {
			let decodedUser = await login(email, password);

			user.setUser(decodedUser);
			user.setIsAuth(true);
		} catch (e) {
			alert(e);
		}
	}

	return (
		<div className='page-container'>
			<input value={email} onChange={(e) => setEmail(e.target.value)}></input>
			<input value={password} onChange={(e) => setPassword(e.target.value)}></input>
			<button onClick={signIn}>Войти</button>
		</div>
	);
};

export default ProfilePage;