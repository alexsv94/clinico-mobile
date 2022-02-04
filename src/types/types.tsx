import DeseasesStore from "../store/deseasesStore";

export interface IAppContext {
	deseases: DeseasesStore;
}

export interface IUser {
	id: number;
	firstname: string;
	lastname: string;
	email: string;
	password: string;
	role?: string;
	banned: boolean;
	createdAt?: string;
	updatedAt?: string;
}

export interface IDesease {
	id: number;
	name: string;
	createdAt?: string;
	updatedAt?: string;
	symptoms: ISymptom[];
	diagnostics: IDiagnosicMethod[];
	medications: IMedication[];
	notes?: INote[];
}

export interface IDiagnosicMethod {
	id: number;
	name: string;
	createdAt?: string;
	updatedAt?: string;
}

export interface ISymptom {
	id: number;
	name: string;
	createdAt?: string;
	updatedAt?: string;
}

export interface INote {
	id: number;
	author: string;
	content: string;
	createdAt?: string;
	updatedAt?: string;
	deseaseId?: string;
}

export interface IMedication {
	id: number;
	name: string;
	img?: string;
	indications: string;
	contrindications: string;
	createdAt?: string;
	updatedAt?: string;
}

export interface IDosageForm {
	id: number;
	name: string;
	dosage: string;
	application_mode: string;
	createdAt?: string;
	updatedAt?: string;
	medicationId?: string;
}

export interface IFavorite {
	id: number;
	createdAt?: string;
	updatedAt?: string;
	userId?: number;
}

export interface IInfoResponse {
	message: string;
}
