import { CarsList } from 'components/CarsList/CarsList'
import { CarsForm } from 'components/CarsForm/CarsForm'
import { LoadMore } from 'components/LoadMore/LoadMore'
import { loading } from '../redux/slice/carsSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchCarsList } from '../redux/operations/carsOperations'
export default function CarsCatalog() {
	const dispatch = useDispatch()
	const isLoading = useSelector(loading)

	useEffect(() => {
		dispatch(fetchCarsList({ page: 1, limit: 12 }))
	}, [dispatch])

	return (
		<>
			<CarsForm />
			<CarsList />
			<LoadMore />
		</>
	)
}
