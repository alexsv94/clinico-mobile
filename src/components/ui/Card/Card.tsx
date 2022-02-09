import React, { FC } from 'react';
import './Card.css'

interface CardProps {
	title: string;
}

const Card:FC<CardProps> = ({title, children}) => {
	return (
		<div className='card'>
			<div className="card__header">
				<span className='card__header-text'>{title}</span>
			</div>
			<div className="card__body">
				{children}
			</div>
		</div>
	);
};

export default Card;