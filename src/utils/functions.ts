export const splitText = (text: string, value: string): string[] => {

	if (text === "") {
		return [value, "", ""];
	} else {
		const index = text.toLowerCase().indexOf(value.toLowerCase());

		const textBefore = index > 0 ? text.substring(0, index) : "";
		const searchQueryMatch = index !== -1 && value ? `${text.substring(index, index + value.length)}` : "";
		const textAfter = index !== -1 && index + value.length !== text.length ? text.substring(index + value.length) : "";

		return [textBefore, searchQueryMatch, textAfter];
	}
}

export function setTitle(title: string) {
	const navbarTitle = document.querySelector<HTMLSpanElement>('#navbar-title');
	
	if (navbarTitle){
		if (title.length > 19)
			title = title.substring(0, 19) + '...';
		navbarTitle.innerText = title;
	}
}		