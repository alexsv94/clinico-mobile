import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '..';
import FilterInput from '../components/ui/FilterInput/FilterInput';
import { fetchMedications } from '../http/medicationsAPI';
import { AppRoutes } from '../utils/enums';
import { setTitle, splitText } from '../utils/functions';
import '../styles/deseasesPage.css';
import { observer } from 'mobx-react-lite';

const BaseComponent = () => {
	setTitle('Лек. препараты');

	const { medications } = useContext(Context);
	const [searchValue, setSearchValue] = useState<string>('')
	const navigationRoute = useNavigate();

	useEffect(() => {
		fetchMedications().then(data => {
			medications.setMedications(data);
		})
	}, [medications])
	
	return (
		<div className='page-container'>
			<FilterInput value={searchValue} setValue={setSearchValue} />
			<div className='deseases-wrapper'>
				{medications.medications.map((medication) => {
					let index = medication.name.toLowerCase().indexOf(searchValue.toLowerCase());

					if (index !== -1) {
						const [textBefore, match, textAfter] = splitText(medication.name, searchValue);

						return <div
							key={medication.name}
							className="item-card"
							onClick={() => navigationRoute(AppRoutes.MEDICATIONS_ROUTE + '/' + medication.id)}
						>
							{textBefore}<span className="search-selection">{match}</span>{textAfter}
						</div>
					} else {
						return null
					}
				})}
			</div>
		</div>
	);
};

const MedicationsPage = observer(BaseComponent);

export default MedicationsPage;