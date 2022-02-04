import { useLayoutEffect, useState } from "react"

export const useTheme = (initialTheme: string) => {
	const [theme, setTheme] = useState<string>(initialTheme);

	useLayoutEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('colorTheme', theme)
	}, [theme]);

	return { theme, setTheme }
}