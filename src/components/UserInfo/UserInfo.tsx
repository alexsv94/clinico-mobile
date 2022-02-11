import React, { FC } from 'react';
import { logout } from '../../http/userAPI';
import UserStore from '../../store/userStore';

interface UserInfoProps {
	user: UserStore;
}

const UserInfo:FC<UserInfoProps> = ({user}) => {
	
	function signOut() {
		logout();
		user.setIsAuth(false);
	}

	return (
		<div>
			<button style={{padding: 10}} onClick={signOut}>Выйти</button>
		</div>
	);
};

export default UserInfo;