export class RequestError {
	constructor(
		public status: number,
		public message: string
	) {}
}