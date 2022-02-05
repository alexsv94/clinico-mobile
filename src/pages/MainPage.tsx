import React from 'react';
import { setTitle } from '../utils/functions';

const MainPage = () => {
	setTitle('Главная');
	
	return (
		<div className='page-container'>
			главная
		</div>
	);
};

export default MainPage;