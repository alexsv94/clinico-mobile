import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite'
import { Context } from '..';
import { fetchDeseases } from '../http/deseaseAPI';
import { useNavigate } from 'react-router-dom';
import { setTitle, splitText } from '../utils/functions';
import '../styles/deseasesPage.css'
import FilterInput from '../components/ui/FilterInput/FilterInput';
import { AppRoutes } from '../utils/enums';
import Loader from '../components/ui/Loader/Loader';

const BaseComponent = () => {
	const { deseases } = useContext(Context);
	const [searchValue, setSearchValue] = useState<string>('')
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const navigationRoute = useNavigate();

	setTitle('Заболевания');

	useEffect(() => {
		fetchDeseases().then(data => {
			deseases.setDeseases(data);
		}).finally(() => setIsLoading(false))
	}, [deseases])

	if (isLoading) return (
		<div style={{display: 'flex', justifyContent: 'center', marginTop: '15px'}}>
			<Loader />
		</div>
	)

	return (
		<div className='page-container'>
			<FilterInput value={searchValue} setValue={setSearchValue} />
			<div className='deseases-wrapper'>
				{deseases.deseases.map((desease) => {
					let index = desease.name.toLowerCase().indexOf(searchValue.toLowerCase());

					if (index !== -1) {
						const [textBefore, match, textAfter] = splitText(desease.name, searchValue);

						return <div
							key={desease.name}
							className="item-card"
							onClick={() => navigationRoute(AppRoutes.DESEASES_ROUTE + '/' + desease.id)}
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

const DeseasesPage = observer(BaseComponent);

export default DeseasesPage;