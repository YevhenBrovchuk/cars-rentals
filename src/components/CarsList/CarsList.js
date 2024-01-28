import { CarCard } from 'components/CarCard/CarCard'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
	incrementfavoritCars,
	incrementCar,
	dicrementfavoritCars,
} from '../../redux/store'

export const CarsList = () => {
	const dispatch = useDispatch()
	const { pathname } = useLocation()

	const listCars = useSelector(state => state.listCars)
	const favoritlistcars = useSelector(state => state.listCarsfavorit)

	let flag = false

	const carsList = (listCars, favoritlistcars) => {
		if (pathname === '/catalog') {
			flag = true
			return listCars
		} else if (pathname === '/favorites') {
			flag = false
			return favoritlistcars
		}
	}

	const helper = e => {
		const id = Number(e.currentTarget.id)
		const name = e.currentTarget.name
		if (favoritlistcars.length > 0) {
			const flagFavoritlistcars = favoritlistcars.some(
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
		dispatch(incrementfavoritCars({ id, name }))
		return
	}

	return (
		<>
			<div>{pathname}</div>
			<ul>
				{carsList(listCars, favoritlistcars).map(({ id, name }) => (
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
