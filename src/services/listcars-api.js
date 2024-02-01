import axios from 'axios'

axios.defaults.baseURL = 'https://65abbecffcd1c9dcffc6f56e.mockapi.io'

const params = new URLSearchParams({
	completed: false,
	page: 1,
	limit: 12,
})

export async function fetchCars(page, limit) {
	console.log(page, limit)
	const { data } = await axios.get(`/advert/advert`)
	console.log(data)
	return data
}
