import React, { FC } from 'react';
import { IDosageForm } from '../../../types/types';
import Card from '../Card/Card';
import './DosageFormSelector.css'

interface DosageForsSelectorProps {
	dosageForms: IDosageForm[] | undefined;
	currentDosageForm: IDosageForm | undefined;
	onSelect(id: number): void;
}

const DosageFormSelector: FC<DosageForsSelectorProps> = ({ dosageForms, currentDosageForm, onSelect }) => {
	return (
		<Card title='Форма выпуска'>
			{dosageForms?.map(form =>
				<button
					key={form.name}
					onClick={() => onSelect(form.id)}
					className={`selector-button ${form === currentDosageForm ? 'current' : ''}`}
				>
					{form.name} | {form.dosage}
				</button>
			)}
		</Card>
	);
};

export default DosageFormSelector;