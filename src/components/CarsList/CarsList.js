import { CarCard } from 'components/CarCard/CarCard'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { incrementfavoritCars } from '../../redux/store'
export const CarsList = () => {
	const { pathname } = useLocation()

	console.log(pathname)

	const listCars = useSelector(state => state.listCars)
	const favoritlistcars = useSelector(state => state.listCarsfavorit)

	const dispatch = useDispatch()

	console.log(listCars)
	console.log(favoritlistcars)
	let qqq
	let flag = false
	if (pathname === '/catalog') {
		qqq = listCars
		flag = true
	}
	if (pathname === '/favorites') {
		qqq = favoritlistcars
	}
	return (
		<>
			<div>{pathname}</div>
			<ul>
				{qqq.map(({ id, name }) => (
					<li key={id}>
						{flag && (
							<button
								type='button'
								onClick={() => dispatch(incrementfavoritCars({ id, name }))}
							>
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
