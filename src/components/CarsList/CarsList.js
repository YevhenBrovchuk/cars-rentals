import { CarCard } from 'components/CarCard/CarCard'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
	incrementfavoritCars,
	incrementCar,
	dicrementfavoritCars,
	getFavoritCars,
} from '../../redux/slice/favoritCarsSlice'
import { getCars } from '../../redux/slice/carsSlice'

export const CarsList = () => {
	const dispatch = useDispatch()
	const { pathname } = useLocation()

	const selectListCars = useSelector(getCars)
	const selectFavoritlistcars = useSelector(getFavoritCars)

	let flag = false

	const carsList = (selectListCars, selectFavoritlistcars) => {
		if (pathname === '/catalog') {
			flag = true
			return selectListCars
		} else if (pathname === '/favorites') {
			flag = false
			return selectFavoritlistcars
		}
	}

	const helper = e => {
		const id = Number(e.currentTarget.id)
		const name = e.currentTarget.name
		if (selectFavoritlistcars.length > 0) {
			const flagFavoritlistcars = selectFavoritlistcars.some(
				favoritCar => favoritCar.id === id
			)
			if (!flagFavoritlistcars) {
				dispatch(incrementfavoritCars({ id, name }))
				return
			} else {
				dispatch(dicrementfavoritCars(id))
				return
			}
		}
		console.log(selectFavoritlistcars)
		dispatch(incrementfavoritCars({ id, name }))
		return
	}
	console.log(selectFavoritlistcars)
	console.log(selectListCars)
	return (
		<>
			<div>{pathname}</div>
			<ul>
				{carsList(selectListCars, selectFavoritlistcars).map(({ id, name }) => (
					<li key={id}>
						{flag && (
							<button type='button' id={id} name={name} onClick={helper}>
								{name}
							</button>
						)}
						<CarCard iname={name} />
					</li>
				))}
			</ul>
		</>
	)
}
