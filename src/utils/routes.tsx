import React, { lazy } from "react"
import { AppRoutes } from "./enums"

const DeseasesPage = lazy(() => import('../pages/DeseasesPage'));
const DeseasePage = lazy(() => import('../pages/DeseasePage'));
const FavoritesPage = lazy(() => import('../pages/FavoritesPage'));
const MainPage = lazy(() => import('../pages/MainPage'));
const MedicationsPage = lazy(() => import('../pages/MedicationsPage'));
const ProfilePage = lazy(() => import('../pages/ProfilePage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

interface RouteParams {
	path: string;
	element: React.ReactElement
}

export const authRoutes: RouteParams[] = [
	{
		path: AppRoutes.FAVORITES_ROUTE,
		element: <FavoritesPage />
	},
]

export const publicRoutes: RouteParams[] = [
	{
		path: AppRoutes.DESEASES_ROUTE,
		element: <DeseasesPage />
	},
	{
		path: AppRoutes.MEDICATIONS_ROUTE,
		element: <MedicationsPage />
	},
	{
		path: AppRoutes.MAIN_ROUTE,
		element: <MainPage />
	},
	{
		path: AppRoutes.PROFILE_ROUTE,
		element: <ProfilePage />
	},
	{
		path: AppRoutes.MEDICATIONS_ROUTE + '/:id',
		element: <MedicationsPage /> //TODO: add Medication page
	},
	{
		path: AppRoutes.DESEASES_ROUTE + '/:id',
		element: <DeseasePage />
	},
	{
		path: '/*',
		element: <NotFoundPage />
	}
]