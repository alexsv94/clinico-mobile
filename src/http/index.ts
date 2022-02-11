import axios, { AxiosResponse } from 'axios'
import { IInfoResponse } from '../types/types';
import { RequestError } from './error';

// const REACT_APP_API_URL = "https://clinico.na4u.ru";
const REACT_APP_API_URL = "http://localhost:52659";

const $host = axios.create({
	baseURL: REACT_APP_API_URL
})

const $authHost = axios.create({
	baseURL: REACT_APP_API_URL,
	headers: {
		authorization: `Bearer ${localStorage.getItem('auth_token') || ''}`
	}
})

$host.interceptors.response.use(
	(response: AxiosResponse<any>) => response,
	(({ response }: { response: AxiosResponse<IInfoResponse> }) => {
		return Promise.reject(new RequestError(response.status, response.data.message))
	})
)

$authHost.interceptors.response.use(
	(response: AxiosResponse<any>) => response,
	(({ response }: { response: AxiosResponse<IInfoResponse> }) => {
		return Promise.reject(new RequestError(response.status, response.data.message))
	})
)

export {
	$host,
	$authHost
}