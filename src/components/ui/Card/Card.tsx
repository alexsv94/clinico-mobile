import React, { FC } from 'react';
import './Card.css'

interface CardProps {
	title: string | undefined;
}

const Card: FC<CardProps> = ({ title, children }) => {
	return (
		<div className='card'>
			<div className="card__header">
				<span className='card__header-text'>{title}</span>
			</div>
			{children
				? <div className="card__body">
					{children}
				</div>
				: null
			}

		</div>
	);
};

export default Card;