import { createAsyncThunk } from '@reduxjs/toolkit'
// import { fetchCars } from 'services/listcars-api'
import axios from 'axios'

// export const fetchCarsList = createAsyncThunk(
// 	'listCars/fetchCars',
// 	async ({ page, limit }, { rejectWithValue }) => {
// 		try {
// 			console.log(page, limit)
// 			const cars = await fetchCars(page, limit)
// 			return cars
// 		} catch (error) {
// 			return rejectWithValue(error)
// 		}
// 	}
// )

axios.defaults.baseURL = 'http://65abbecffcd1c9dcffc6f56e.mockapi.io'
const params = new URLSearchParams({
	page: 1,
	limit: 12,
})

export const getAll = createAsyncThunk(
	'advert/fatchAll',
	async (_, { rejectWithValue }) => {
		try {
			console.log(params)
			const { data } = await axios.get(`/advert?`)
			return data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)
