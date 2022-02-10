import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/ui/Card/Card';
import ItemNode from '../components/ui/ItemNode/ItemNode';
import Loader from '../components/ui/Loader/Loader';
import AddFavoritesTitle from '../components/ui/StarTitle/AddFavoritesTitle';
import { fetchDeseaseById } from '../http/deseaseAPI';
import { IDesease } from '../types/types';
import { setTitle } from '../utils/functions';

const DeseasePage = () => {
	const { id } = useParams();
	const [desease, setDesease] = useState<IDesease | null>(null)
	const [isLoading, setIsLoading] = useState<boolean>(true);

	if (desease)
		setTitle(desease?.name)

	useEffect(() => {
		if (id) {
			fetchDeseaseById(id).then(data => {
				setDesease(data);
			}).finally(() => setIsLoading(false))
		}
	}, [id])

	if (isLoading) return (
		<div style={{display: 'flex', justifyContent: 'center', marginTop: '15px'}}>
			<Loader />
		</div>
	)

	return (
		<div className='page-container'>
			<AddFavoritesTitle title={desease?.name} isFavorite={false} />
			<Card title='Симптомы'>
				{desease?.symptoms.map(symptom =>
					<ItemNode key={symptom.name}>
						<span>{symptom.name}</span>
					</ItemNode>
				)}
			</Card>
			<Card title='Диагностика'>
				{desease?.diagnostics.map(method =>
					<ItemNode key={method.name}>
						<span>{method.name}</span>
					</ItemNode>
				)}
			</Card>
			<Card title='Лекарственные препараты'>
				{desease?.medications.map(medication =>
					<ItemNode key={medication.name} style={{ backgroundColor: 'white', border: '1px solid lightgray' }}>
						<span style={{ color: '#202020', fontWeight: '400' }}>{medication.name}</span>
					</ItemNode>
				)}
			</Card>
		</div>
	);
};

export default DeseasePage;