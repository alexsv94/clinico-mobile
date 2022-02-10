import { $authHost } from './index';
import { IInfoResponse } from '../types/types'

//DESEASES

export const fetchFavoriteDeseases = async () => {
	await $authHost.get('api/favorites/deseases')
}

export const addFavoriteDesease = async (deseaseId: number) => {	
	const response = await $authHost.post<IInfoResponse>('api/favorites/deseases', { deseaseId });
	return response.data.message === 'Успешно';
}

export const removeFavoriteDesease = async (deseaseId: number) => {
	const response = await $authHost.delete<IInfoResponse>('api/favorites/deseases/' + deseaseId);
	return response.data.message === 'Успешно';
}


//MEDICATIONS

export const fetchFavoriteMedications = async () => {
	await $authHost.get('api/favorites/medications')
}

export const addFavoriteMedication = async (medicationId: number) => {
	const response = await $authHost.post<IInfoResponse>('api/favorites/medications', { medicationId });
	return response.data.message === 'Успешно';
}

export const removeFavoriteMedication = async (medicationId: number) => {
	const response = await $authHost.delete<IInfoResponse>('api/favorites/medications/' + medicationId);
	return response.data.message === 'Успешно';
}