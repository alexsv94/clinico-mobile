import { makeAutoObservable } from 'mobx';
import { IMedication } from '../types/types';

export default class MedicationsStore {
	private _medications: IMedication[] = [];
	
	constructor() {
		makeAutoObservable(this)
	}

	setMedications(medications: IMedication[]) {
		this._medications = medications
	}

	get medications() {
		return this._medications
	}
}