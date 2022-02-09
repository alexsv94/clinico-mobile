import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/ui/Card/Card';
import ItemNode from '../components/ui/ItemNode/ItemNode';
import { fetchDeseaseById } from '../http/deseaseAPI';
import { IDesease } from '../types/types';
import { setTitle } from '../utils/functions';

const DeseasePage = () => {
	const { id } = useParams();
	const [desease, setDesease] = useState<IDesease | null>(null)

	if (desease)
		setTitle(desease?.name)

	useEffect(() => {
		if (id) {
			fetchDeseaseById(id).then(data => {
				setDesease(data);
			})
		}
	}, [id])

	return (
		<div className='page-container'>
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
					<ItemNode key={medication.name} style={{ backgroundColor: 'aqua' }}>
						<span style={{ color: '#202020', fontWeight: '900' }}>{medication.name}</span>
					</ItemNode>
				)}
			</Card>
		</div>
	);
};

export default DeseasePage;