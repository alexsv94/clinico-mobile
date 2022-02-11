import React, { FC } from 'react';
import './ErrorModal.css'

interface ErrorModalProps {
	message: string;
	show: boolean;
	onClose():void;
}

const ErrorModal: FC<ErrorModalProps> = ({message, show, onClose}) => {

	return (
		<div className={show ? 'fade-background modal-active' : 'fade-background'} onClick={onClose}>
			<div className='modal'>
				<div>
					<span className='error-label'>{message}</span>
				</div>
				<div className='button-container'>
					<button className='confirm-button' onClick={onClose}>OK</button>
				</div>
			</div>
		</div>
	);
};

export default ErrorModal;