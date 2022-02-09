import { IDesease, IDiagnosicMethod, IInfoResponse, INote, ISymptom } from '../types/types';
import { $host, $authHost } from './index';

//-----------------------------------SYMPTOMS-----------------------------------

export const createSymptom = async (symptom: ISymptom) => {
	const { data } = await $authHost.post<IInfoResponse>('api/deseases/nodes/symptoms', symptom)
	return data;
}

export const updateSymptom = async (symptom: ISymptom) => {
	const { data } = await $authHost.put<IInfoResponse>(`api/deseases/nodes/symptoms/${symptom.id}`, symptom)
	return data;
}

export const deleteSymptom = async (symptom: ISymptom) => {
	const { data } = await $authHost.delete<IInfoResponse>(`api/deseases/nodes/symptoms/${symptom.id}`)
	return data;
}

export const fetchSymptoms = async () => {
	const { data } = await $host.get<ISymptom[]>('api/deseases/nodes/symptoms')
	return data;
}

//-----------------------------------DIAGNOSTICS-----------------------------------

export const createDiagnosticMethod = async (method: IDiagnosicMethod) => {
	const { data } = await $authHost.post<IInfoResponse>('api/deseases/nodes/diagnostics', method)
	return data;
}

export const updateDiagnosticMethod = async (method: IDiagnosicMethod) => {
	const { data } = await $authHost.put<IInfoResponse>(`api/deseases/nodes/diagnostics/${method.id}`, method)
	return data;
}

export const deleteDiagnosticMethod = async (method: IDiagnosicMethod) => {
	const { data } = await $authHost.delete<IInfoResponse>(`api/deseases/nodes/diagnostics/${method.id}`)
	return data;
}

export const fetchDiagnosticMethods = async () => {
	const { data } = await $host.get<IDiagnosicMethod[]>('api/deseases/nodes/diagnostics')
	return data;
}

//-----------------------------------DESEASES-----------------------------------

export const createDesease = async (desease: IDesease) => {
	const { data } = await $authHost.post<IInfoResponse>('api/deseases', desease)
	return data;
}

export const updateDesease = async (desease: IDesease) => {
	const { data } = await $authHost.put<IInfoResponse>(`api/deseases/${desease.id}`, desease)
	return data;
}

export const deleteDesease = async (desease: IDesease) => {
	const { data } = await $authHost.delete<IInfoResponse>(`api/deseases/${desease.id}`)
	return data;
}

export const fetchDeseases = async () => {
	const { data } = await $host.get<IDesease[]>('api/deseases')
	return data;
}

export const fetchDeseaseById = async (id: string) => {
	const { data } = await $host.get<IDesease>('api/deseases/' + id)
	return data;
}

//-----------------------------------NOTES-----------------------------------

export const createNote = async (note: INote, deseaseId: number) => {
	const { data } = await $authHost.post<IInfoResponse>(`api/deseases/${deseaseId}/notes`,
		{ content: note.content })
	return data;
}