import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const favoritcars = [
	{ id: 100, name: 'newcar' },
	{ id: 100, name: 'newcar' },
]
export const listCarsfavoritSlice = createSlice({
	name: 'listCarsfavorit',
	initialState: {
		listCarsfavorit: [],
	},
	reducers: {
		incrementfavoritCars(state, action) {
			console.log(state)
			state.listCarsfavorit.push(action.payload)
		},
		dicrementfavoritCars(state, action) {
			return state.filter(item => item.id !== action.payload)
		},
	},
})

const persistConfig = {
	key: 'favoritCarsSlice',
	storage,
}

export const persistedlistCarsfavoritSliceReduser = persistReducer(
	persistConfig,
	listCarsfavoritSlice.reducer
)

export const { incrementfavoritCars, dicrementfavoritCars } =
	listCarsfavoritSlice.actions

export const getFavoritCars = state => state.listCarsfavorit.listCarsfavorit
