import React from 'react';
import { setTitle } from '../utils/functions';

const MedicationsPage = () => {
	setTitle('Лек. препараты');
	
	return (
		<div className='page-container'>
			лекарственные препараты
		</div>
	);
};

export default MedicationsPage;