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
export const increment = createAction('listCars/increment')

export const incrementfavoritCars = createAction(
	'listCarsfavorit/incrementfavoritCars'
)

const myReducer = createReducer(cars, builder => {
	builder.addCase('increment', (state, action) => {
		state++
	})
})

const favoritCarsReducer = createReducer({}, builder => {
	console.log('HELP')
	builder.addCase('incrementfavoritCars', (state, action) => {
		state++
	})
})

export const store = configureStore({
	reducer: {
		listCars: myReducer,
		listCarsfavorit: favoritCarsReducer,
	},
})
