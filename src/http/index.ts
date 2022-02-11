import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { IInfoResponse } from '../types/types';
import { RequestError } from './error';

const REACT_APP_API_URL = "https://clinico.na4u.ru";
//const REACT_APP_API_URL = "http://localhost:52659";

const $host = axios.create({
	baseURL: REACT_APP_API_URL
})

const $authHost = axios.create({
	baseURL: REACT_APP_API_URL,
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

$authHost.interceptors.request.use((config: AxiosRequestConfig) => {
	const token = localStorage.getItem('auth_token');
	if (config.headers) config.headers =  { 
		'Authorization': token ? `Bearer ${token}` : '',
 	};
	return config;
});

export {
	$host,
	$authHost
}