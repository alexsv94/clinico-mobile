import { $host } from './index';


export const fetchMedications = async () => {
	const { data } = await $host.get('api/medications')
	return data;
}

export const fetchMedicationById = async (id: string) => {
	const { data } = await $host.get('api/medications/' + id)
	return data;
}