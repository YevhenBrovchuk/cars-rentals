import { configureStore } from '@reduxjs/toolkit'

import { listCarsSlice } from './slice/carsSlice'
import { persistedlistCarsfavoritSliceReduser } from './slice/favoritCarsSlice'
import {
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'

export const store = configureStore({
	reducer: {
		listCars: listCarsSlice.reducer,
		listCarsfavorit: persistedlistCarsfavoritSliceReduser,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export const persistor = persistStore(store)

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
