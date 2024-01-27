import { configureStore } from '@reduxjs/toolkit'
import { createAction, createReducer, createSlice } from '@reduxjs/toolkit'

const cars = [
	{
		id: 1,
		name: 'audi',
	},
	{
		id: 2,
		name: 'volvo',
	},
	{
		id: 3,
		name: 'ford',
	},
]

const listCarsSlice = createSlice({
	name: 'listCars',
	initialState: cars,
	reducers: {
		incrementCar(state, action) {
			state.push(action.payload)
		},
	},
})

export const { incrementCar } = listCarsSlice.actions
export default listCarsSlice.reducer

const listCarsfavoritSlice = createSlice({
	name: 'listCarsfavorit',
	initialState: [],
	reducers: {
		incrementfavoritCars(state, action) {
			state.push(action.payload)
		},
		dicrementfavoritCars(state, action) {
			state.filter(item => item !== action.payload)
		},
	},
})

export const { incrementfavoritCars, dicrementfavoritCars } =
	listCarsfavoritSlice.actions
// export const incrementCar = createAction('incrementCar')
// console.log(incrementCar())
// export const incrementfavoritCars = createAction(
// 	'listCarsfavorit/incrementfavoritCars'
// )
// export const dicrementfavoritCars = createAction(
// 	'listCarsfavorit/dicrementfavoritCars'
// )

// const carListReducer = createReducer(cars, builder => {
// 	// console.log('HELP')
// 	builder.addCase(incrementCar, (state, action) => {
// 		console.log(action.payload)
// 		state.push(action.payload)
// 	})
// })

// const favoritCarsReducer = createReducer([], builder => {
// 	builder
// 		.addCase(incrementfavoritCars, (state, action) => {
// 			state.push(action.payload)
// 		})
// 		.addCase(dicrementfavoritCars, (state, action) => {
// 			state.filter(item => item !== action.payload)
// 		})
// })

export const store = configureStore({
	reducer: {
		listCars: listCarsSlice.reducer,
		listCarsfavorit: listCarsfavoritSlice.reducer,
	},
})
