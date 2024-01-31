import { createSlice } from '@reduxjs/toolkit'

const cars = [
	{
		id: 110,
		name: 'audi',
	},
	{
		id: 210,
		name: 'volvo',
	},
	{
		id: 310,
		name: 'ford',
	},
]

export const listCarsSlice = createSlice({
	name: 'listCars',
	initialState: {
		listCars: [
			{
				id: 110,
				name: 'audi',
			},
			{
				id: 210,
				name: 'volvo',
			},
			{
				id: 310,
				name: 'ford',
			},
		],
	},
	reducers: {
		incrementCar(state, action) {
			state.push(action.payload)
		},
	},
})

export const { incrementCar } = listCarsSlice.actions
// export default listCarsSlice.reducer

export const getCars = state => state.listCars.listCars
