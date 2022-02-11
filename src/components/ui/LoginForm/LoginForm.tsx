import React, { useContext, useState } from 'react';
import { Context } from '../../..';
import { RequestError } from '../../../http/error';
import { login, registration } from '../../../http/userAPI';
import ErrorModal from '../ErrorModal/ErrorModal';
import './LoginForm.css'

const LoginForm = () => {
	const { user } = useContext(Context);

	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [firstName, setFirstName] = useState<string>('')
	const [lastName, setLastName] = useState<string>('')

	
	const [isLoginMode, setIsLoginMode] = useState<boolean>(false);

	const [errorMessage, setErrorMessage] = useState<string>('');
	const [modalShow, setModalShow] = useState<boolean>(false);

	const showError = (error: unknown) => {
		setErrorMessage((error as RequestError).message);
		setModalShow(true);
	}

	const signIn = async () => {
		try {
			let decodedUser = await login(email, password);
			user.setUser(decodedUser);
			user.setIsAuth(true);
		} catch (e) {
			showError(e);
		}
	}

	const createUser = async () => {
		try {
			let decodedUser = await registration(email, password, firstName, lastName);
			user.setUser(decodedUser);
			user.setIsAuth(true);
		} catch (e) {
			showError(e);
		}
	}

	return (
		<div className='login-form'>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				{isLoginMode
					? <span className='auth-label'>Авторизация</span>
					: <span className='auth-label'>Регистрация</span>
				}

			</div>
			<div className='input-container'>
				<div>
					<input
						className='custom-input'
						value={email}
						type='email'
						placeholder='E-Mail...'
						onChange={(e) => setEmail(e.target.value)}
					></input>
					<input
						className='custom-input'
						value={password}
						type="password"
						placeholder='Пароль...'
						onChange={(e) => setPassword(e.target.value)}
					></input>
				</div>
				{!isLoginMode
					? <div>
						<input
							className='custom-input'
							value={firstName}
							placeholder='Имя...'
							onChange={(e) => setFirstName(e.target.value)}
						></input>
						<input
							className='custom-input'
							value={lastName}
							placeholder='Фамилия...'
							onChange={(e) => setLastName(e.target.value)}
						></input>
					</div>
					: ''
				}
				{isLoginMode
					? <div className='buttons-container'>
						<button
							className='login-button'
							onClick={signIn}
						>
							Войти
						</button>
						<button
							className='login-button'
							onClick={() => setIsLoginMode(false)}
						>
							Зарегистрироваться
						</button>
					</div>
					: <div className='buttons-container'>
						<button
							className='login-button'
							onClick={createUser}
						>
							Регистрация
						</button>
						<button
							className='login-button'
							onClick={() => setIsLoginMode(true)}
						>
							Авторизоваться
						</button>
					</div>
				}

			</div>
			<ErrorModal message={errorMessage} show={modalShow} onClose={() => setModalShow(false)}/>
		</div>
	);
};

export default LoginForm;