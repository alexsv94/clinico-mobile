import React, { FC } from 'react';
import './Toggle.css'

interface ToggleProps {
	checked: boolean;
	onChecked():void;
	onUnchecked():void;
}

const Toggle: FC<ToggleProps> = ({checked, onChecked, onUnchecked}) => {
	
	let toggleClassList = ['toggle'];
	let handleClassList = ['toggle__handle']

	if (checked) {
		toggleClassList.push('checked');
		handleClassList.push('handle_checked')
	}

	function switchState(event: React.MouseEvent) {
		event.preventDefault();
		event.stopPropagation();
		if (checked) onUnchecked();
		else onChecked();
	}

	return (
		<div className={toggleClassList.join(' ')} onClick={event => switchState(event)}>
			<div className={handleClassList.join(' ')}>
				<span className='material-icons toggle__handle-image'>{checked ? 'dark_mode' : 'light_mode'}</span>
			</div>
		</div>
	);
};

export default Toggle;