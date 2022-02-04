export const splitText = (text: string, value: string): string[] => {

	if (text === "") {
		return [value, "", ""];
	} else {
		const index = text.toLowerCase().indexOf(value.toLowerCase());

		console.log('index: ' + index);		
		console.log(text + " | " + value);		

		const textBefore = index > 0 ? text.substring(0, index) : "";
		const searchQueryMatch = index !== -1 && value ? `${text.substring(index, index + value.length)}` : "";
		const textAfter = index !== -1 && index + value.length !== text.length ? text.substring(index + value.length) : "";

		return [textBefore, searchQueryMatch, textAfter];
	}
}