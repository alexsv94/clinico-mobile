import { $host, $authHost } from './index';
import jwt_decode from 'jwt-decode'
import { IUser } from '../types/types';


export const registration = async (email: string, password: string, firstname: string, lastname: string) => {
	const { data } = await $host.post('api/user/registration',
		{ email, password, firstname, lastname, role: 'USER' })
	localStorage.setItem('auth_token', data.token)
	return jwt_decode<IUser>(data.token);
}

export const login = async (email: string, password: string) => {
	const { data } = await $host.post('api/user/login',
		{ email, password })
	localStorage.setItem('auth_token', data.token)
	return jwt_decode<IUser>(data.token);
}

export const check = async () => {
	const { data } = await $authHost.get('api/user/auth')
	localStorage.setItem('auth_token', data.token)
	return jwt_decode<IUser>(data.token);
}

export const logout = () => {
	localStorage.removeItem('auth_token')
}

export const updateUser = async (user: IUser) => {
	const { data } = await $authHost.put(`api/user/${user.id}`, user)
	return data;
}

export const deleteUser = async (user: IUser) => {
	const { data } = await $authHost.delete(`api/user/${user.id}`)
	return data;
}