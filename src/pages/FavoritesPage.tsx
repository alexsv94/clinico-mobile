import React, { useEffect, useState } from 'react';
import TabContainer from '../components/TabContainer/TabContainer';
import { fetchFavoriteDeseases, fetchFavoriteMedications } from '../http/favoritesApi';
import { IDesease, IMedication } from '../types/types';
import { setTitle } from '../utils/functions';
import { IFavoriteLink } from '../components/TabContainer/TabContainer'
import { AppRoutes } from '../utils/enums';

function generateFavoriteArray(route: AppRoutes, collection: IDesease[] | IMedication[]): IFavoriteLink[] {
	let arr: IFavoriteLink[] = []

	for (let i = 0; i < collection.length; i++) {
		arr.push({
			id: collection[i].id,
			name: collection[i].name,
			collectionRoute: route
		})
	}

	return arr;
}

const FavoritesPage = () => {
	setTitle('Избранное');

	const [favoriteDeseases, setFavoriteDeseases] = useState<IDesease[]>([])
	const [favoriteMedications, setFavoriteMedications] = useState<IMedication[]>([])

	useEffect(() => {
		fetchFavoriteDeseases()
			.then(data => setFavoriteDeseases(data));

		fetchFavoriteMedications()
			.then(data => setFavoriteMedications(data));
	}, [])

	return (
		<div className='page-container'>
			<TabContainer tabs={[
				{ title: 'Заболевания', items: generateFavoriteArray(AppRoutes.DESEASES_ROUTE, favoriteDeseases) },
				{ title: 'Лек. препараты', items: generateFavoriteArray(AppRoutes.MEDICATIONS_ROUTE, favoriteMedications) }
			]} />
		</div>
	);
};

export default FavoritesPage;