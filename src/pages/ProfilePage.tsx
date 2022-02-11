import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import LoginForm from '../components/ui/LoginForm/LoginForm';
import { setTitle } from '../utils/functions';

const BaseComponent = () => {
	setTitle('Профиль');

	const { user } = useContext(Context);

	return (
		<div className='page-container'>
			{user.isAuth
				? ''
				: <LoginForm />
			}
		</div>
	);
};

const ProfilePage = observer(BaseComponent);

export default ProfilePage;