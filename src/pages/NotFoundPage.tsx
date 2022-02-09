import React from 'react';
import { setTitle } from '../utils/functions';
import '../styles/notFoundPage.css'

const NotFoundPage = () => {
	setTitle('');

	return (
		<div className='page-container'>
			<div className='not-found__wrapper'>
				<span className="material-icons-round error-icon">
					error
				</span>
				<span>Страница не найдена</span>
			</div>
		</div>
	)
};

export default NotFoundPage;