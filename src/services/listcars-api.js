import axios from 'axios'

axios.defaults.baseURL = 'https://65abbecffcd1c9dcffc6f56e.mockapi.io'
const params = new URLSearchParams({
	page: 1,
	limit: 12,
})
export async function fetchCars() {
	const { data } = await axios.get(`/advert`)
	return data
}
