import React, { useState } from "react"
import { addFavoriteDesease, addFavoriteMedication, removeFavoriteDesease, removeFavoriteMedication } from "../http/favoritesApi";
import { IDesease, IMedication } from "../types/types";

export function useFavorites<T>(item: T, initial?: boolean) {
	const [isFavorite, setIsFavorite] = useState<boolean | undefined>(initial);

	function switchState() {
		if (isDesease(item)) {
			switchFavoriteDesease(isFavorite, item.id, setIsFavorite);
		} else if (isMedication(item)) {
			switchFavoriteMedication(isFavorite, item.id, setIsFavorite);
		}
	}

	return { isFavorite, setIsFavorite, switchState }
}

function isDesease(object: any): object is IDesease {
	return 'symptoms' in object;
}

function isMedication(object: any): object is IMedication {
	return 'indications' in object;
}

async function switchFavoriteDesease(
	isFavorite: boolean | undefined,
	id: number,
	setFunc: React.Dispatch<React.SetStateAction<boolean | undefined>>
) {
	if (isFavorite) {
		removeFavoriteDesease(id).then(() => setFunc(false))
	} else {
		addFavoriteDesease(id).then(() => setFunc(true))
	}
}

async function switchFavoriteMedication(
	isFavorite: boolean | undefined,
	id: number,
	setFunc: React.Dispatch<React.SetStateAction<boolean | undefined>>
) {
	if (isFavorite) {
		removeFavoriteMedication(id).then(() => setFunc(false))
	} else {
		addFavoriteMedication(id).then(() => setFunc(true))
	}
}