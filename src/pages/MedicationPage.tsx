import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AddFavoritesTitle from '../components/ui/AddFavoritesTitle/AddFavoritesTitle';
import Loader from '../components/ui/Loader/Loader';
import { useFavorites } from '../hooks/useFavorites';
import { checkFavoriteMedication } from '../http/favoritesApi';
import { fetchMedicationById } from '../http/medicationsAPI';
import { IDosageForm, IMedication } from '../types/types';
import { setTitle } from '../utils/functions';
import parse from 'html-react-parser'
import Card from '../components/ui/Card/Card';
import '../styles/medicationPage.css'
import DosageFormSelector from '../components/ui/DosageFormSelector/DosageFormSelector';

const MedicationPage = () => {
	const { id } = useParams();
	const [medication, setMedication] = useState<IMedication>()
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const [activeDosageForm, setActiveDosageForm] = useState<IDosageForm | undefined>()
	const [currentApplicationMode, setCurrentApplicationMode] = useState<string | null>()

	const { isFavorite, setIsFavorite, switchState } = useFavorites<IMedication | undefined>(medication);

	setTitle(medication?.name)

	const switchActiveDosageForm = (id: number) => {
		const form = medication?.dosage_forms.find(f => f.id === id);
		setActiveDosageForm(form);
		setCurrentApplicationMode(form?.application_mode);
	}

	useEffect(() => {
		if (id) {
			fetchMedicationById(id)
				.then(data => {
					setMedication(data);
					setActiveDosageForm(data.dosage_forms[0]);
					setCurrentApplicationMode(data.dosage_forms[0].application_mode);
				})
				.then(() => checkFavoriteMedication(id))
				.then(result => setIsFavorite(result))
				.finally(() => setIsLoading(false))
		}
	}, [])

	if (isLoading) return (
		<div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
			<Loader />
		</div>
	)

	return (
		<div className='page-container'>
			<div className='scroll-wrapper'>
				<AddFavoritesTitle title={medication?.name} isFavorite={isFavorite} onChange={switchState} />
				<DosageFormSelector dosageForms={medication?.dosage_forms} currentDosageForm={activeDosageForm} onSelect={switchActiveDosageForm}/>
				<Card title='Показания'>
					<div className='parsed-container'>
						{parse(medication?.indications || '')}
					</div>
				</Card>
				<Card title='Противопоказания'>
					<div className='parsed-container'>
						{parse(medication?.contrindications || '')}
					</div>
				</Card>
				<Card title='Способ применения и дозы'>
					<div className='parsed-container'>
						{parse(currentApplicationMode || '')}
					</div>
				</Card>
			</div>
		</div>
	);
};

export default MedicationPage;