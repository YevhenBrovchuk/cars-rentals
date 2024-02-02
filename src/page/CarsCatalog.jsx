import { CarsList } from 'components/CarsList/CarsList'
import { CarsForm } from 'components/CarsForm/CarsForm'
import { LoadMore } from 'components/LoadMore/LoadMore'
import { loading } from '../redux/slice/carsSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAll } from '../redux/operations/carsOperations'
export default function CarsCatalog() {
	const dispatch = useDispatch()
	const isLoading = useSelector(loading)

	useEffect(() => {
		dispatch(getAll())
	}, [dispatch])

	return (
		<>
			<CarsForm />
			<CarsList />
			<LoadMore />
		</>
	)
}
