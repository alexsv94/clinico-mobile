import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite'
import { Context } from '..';
import { fetchDeseases } from '../http/deseaseAPI';
import { useNavigate } from 'react-router-dom';
import { DESEASES_ROUTE } from '../utils/consts';
import { splitText } from '../utils/functions';
import '../styles/deseasesPage.css'

const BaseComponent = () => {
	const { deseases } = useContext(Context);
	const [searchValue, setSearhValue] = useState<string>('')
	const navigationRoute = useNavigate();

	useEffect(() => {
		fetchDeseases().then(data => {
			deseases.setDeseases(data);
		})
	}, [deseases])

	return (
		<div>
			{deseases.deseases.map((desease) => {
				let index = desease.name.toLowerCase().indexOf(searchValue.toLowerCase());

				if (index !== -1) {
					const [textBefore, match, textAfter] = splitText(desease.name, searchValue);

					return <div
						key={desease.name}
						className="desease-card"
						onClick={() => navigationRoute(DESEASES_ROUTE + '/' + desease.id)}
					>
						{textBefore}<span className="search-selection">{match}</span>{textAfter}
					</div>
				} else {
					return null
				}
			})}
		</div>
	);
};

const DeseasesPage = observer(BaseComponent);

export default DeseasesPage;