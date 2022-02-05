import React, { FC } from 'react';
import './FilterInput.css'

interface FilterInputProps {
	value: string;
	setValue(value: string): void;
}

const FilterInput: FC<FilterInputProps> = ({ value, setValue }) => {
	return (
		<div className='input-container'>
			<input
				type="text"
				placeholder="Поиск..."
				className="filter-input"
				onChange={e => setValue(e.target.value)}
				autoComplete="off"
			/>
			<span className='material-icons search-icon'>search</span>
		</div>
	);
};

export default FilterInput;