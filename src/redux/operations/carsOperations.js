import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchCars } from 'services/listcars-api'

export const fetchCarsList = createAsyncThunk(
	'listCars/fetchCars',
	async ({ page, limit }, { rejectWithValue }) => {
		try {
			console.log(page, limit)
			const cars = await fetchCars(page, limit)
			return cars
		} catch (error) {
			return rejectWithValue(error)
		}
	}
)
