import { useState } from "react"

export const useFavorites = (initial?: boolean) => {
	const [isFavorite, setIsFavorite] = useState<boolean | undefined>(initial);

	//TODO Post result on server

	return [isFavorite, setIsFavorite]
}