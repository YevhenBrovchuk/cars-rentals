import { configureStore } from '@reduxjs/toolkit'
import { createAction, createReducer } from '@reduxjs/toolkit'

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
export const incrementCar = createAction('incrementCar')
// console.log(incrementCar())
export const incrementfavoritCars = createAction(
	'listCarsfavorit/incrementfavoritCars'
)

const carListReducer = createReducer(cars, builder => {
	// console.log('HELP')
	builder.addCase(incrementCar, (state, action) => {
		console.log(action.payload)
		state.push(action.payload)
	})
})

const favoritCarsReducer = createReducer([], builder => {
	builder.addCase(incrementfavoritCars, (state, action) => {
		state.push(action.payload)
	})
})

export const store = configureStore({
	reducer: {
		listCars: carListReducer,
		listCarsfavorit: favoritCarsReducer,
	},
})
