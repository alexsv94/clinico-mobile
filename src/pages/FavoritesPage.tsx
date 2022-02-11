import React, { useEffect, useState } from 'react';
import TabContainer from '../components/TabContainer/TabContainer';
import { fetchFavoriteDeseases, fetchFavoriteMedications } from '../http/favoritesApi';
import { IDesease, IMedication } from '../types/types';
import { setTitle } from '../utils/functions';

const FavoritesPage = () => {
	setTitle('Избранное');

	const [favoriteDeseases, setFavoriteDeseases] = useState<IDesease[]>([])
	const [favoriteMedications, setFavoriteMedications] = useState<IMedication[]>([])

	useEffect(() => {
		fetchFavoriteDeseases()
			.then(data => setFavoriteDeseases(data));

		fetchFavoriteMedications()
			.then(data => setFavoriteMedications(data));
	},[])

	return (
		<div className='page-container'>
			<TabContainer tabs={[
				{ title: 'Заболевания', items: favoriteDeseases },
				{ title: 'Лек. препараты', items: favoriteMedications }
			]} />
		</div>
	);
};

export default FavoritesPage;