import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export const listCarsfavoritSlice = createSlice({
	name: 'listCarsfavorit',
	initialState: {
		listCarsfavorit: [],
	},
	reducers: {
		addfavoritCars(state, action) {
			state.listCarsfavorit.push(action.payload)
		},
		removefavoritCars(state, action) {
			state.listCarsfavorit = state.listCarsfavorit.filter(
				carFavorit => carFavorit.id !== action.payload
			)
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

export const { addfavoritCars, removefavoritCars } =
	listCarsfavoritSlice.actions

export const getFavoritCars = state => state.listCarsfavorit.listCarsfavorit
