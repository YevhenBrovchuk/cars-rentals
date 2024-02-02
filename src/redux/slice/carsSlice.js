import { createSlice } from '@reduxjs/toolkit'
import { getAll } from '../operations/carsOperations'

export const listCarsSlice = createSlice({
	name: 'listCars',
	initialState: {
		listCars: [],
		isLoading: false,
		error: null,
	},
	extraReducers: builder => {
		builder
			.addCase(getAll.fulfilled, (state, action) => {
				state.listCars = action.payload
				state.isLoading = false
				state.error = null
			})
			.addCase(getAll.pending, state => {
				state.isLoading = true
			})
			.addCase(getAll.rejected, (state, action) => {
				state.error = action.payload
				state.isLoading = false
			})
	},

	// {
	// 	addCar(state, action) {
	// 		state.push(action.payload)
	// 	},
	// },
})

export const { addCar } = listCarsSlice.actions
// export default listCarsSlice.reducer

export const getCars = state => state.listCars.listCars
export const loading = state => state.isLoading
