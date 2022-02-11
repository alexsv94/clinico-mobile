import React, { FC, useContext } from 'react';
import { Context } from '../../..';
import './AddFavoritesTitle.css'

interface AddFavoritesTitleProps {
	title: string | undefined;	
	isFavorite: boolean | undefined;
	onChange?(value: boolean): void | undefined;
}

const AddFavoritesTitle: FC<AddFavoritesTitleProps> = ({ title, onChange, isFavorite }) => {
	const { user } = useContext(Context);
	
	function switchIsFavoriteHandler() {
		if (onChange) onChange(!isFavorite);
	}

	return (
		<div className='add-favorites-title'>
			<div>{title}</div>
			<div onClick={switchIsFavoriteHandler} style={{display: user.isAuth ? 'block' : 'none'}}>
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