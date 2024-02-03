import { createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

axios.defaults.baseURL = 'https://65bcd7ccb51f9b29e93266d4.mockapi.io'
const params = new URLSearchParams({
	page: 1,
	limit: 5,
})

export const getAll = createAsyncThunk(
	'listCars/fetchCars',
	async (_, { rejectWithValue }) => {
		try {
			console.log(params)
			const { data } = await axios.get(`/advert`)
			return data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)
