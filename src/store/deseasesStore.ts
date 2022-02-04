import { makeAutoObservable } from 'mobx';
import { IDesease, IDiagnosicMethod, ISymptom } from '../types/types';

export default class DeseasesStore {
	private _symptoms: ISymptom[] = [];
	private _diagnostics: IDiagnosicMethod[] = [];
	private _deseases: IDesease[] = [];
	
	constructor() {

		makeAutoObservable(this)
	}

	setDeseases(deseases: IDesease[]) {
		this._deseases = deseases
	}

	get deseases() {
		return this._deseases
	}

	setSymptoms(symptoms: ISymptom[]) {
		this._symptoms = symptoms
	}

	get symptoms() {
		return this._symptoms
	}

	setDiagnostics(diagnostics: IDiagnosicMethod[]) {
		this._diagnostics = diagnostics
	}

	get diagnostics() {
		return this._diagnostics
	}
}