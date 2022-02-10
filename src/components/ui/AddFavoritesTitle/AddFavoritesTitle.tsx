import React, { FC } from 'react';
import './AddFavoritesTitle.css'

interface AddFavoritesTitleProps {
	title: string | undefined;	
	isFavorite: boolean;
	onChange?(value: boolean): void;
}

const AddFavoritesTitle: FC<AddFavoritesTitleProps> = ({ title, onChange, isFavorite }) => {
	function switchIsFavoriteHandler() {
		if (onChange) onChange(!isFavorite);
	}

	return (
		<div className='add-favorites-title'>
			<div>{title}</div>
			<div onClick={switchIsFavoriteHandler}>
				<span
					className='material-icons-round'
					style={isFavorite ? { color: 'orange' } : {}}
				>
					{isFavorite
						? 'star'
						: 'star_border'
					}
				</span>
			</div>
		</div>
	);
};

export default AddFavoritesTitle;