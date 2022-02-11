import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import LoginForm from '../components/LoginForm/LoginForm';
import UserInfo from '../components/UserInfo/UserInfo';
import { setTitle } from '../utils/functions';

const BaseComponent = () => {
	setTitle('Профиль');

	const { user } = useContext(Context);

	return (
		<div className='page-container'>
			{user.isAuth
				? <UserInfo user={user} />
				: <LoginForm />
			}
		</div>
	);
};

const ProfilePage = observer(BaseComponent);

export default ProfilePage;