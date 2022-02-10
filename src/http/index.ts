import axios from 'axios'

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

export {
	$host,
	$authHost
}