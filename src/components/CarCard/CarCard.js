import React, { useState, useCallback } from 'react'
import { Modal } from 'components/Modal/Modal'
import { ModalCard } from 'components/ModalCard/ModalCard'
export const CarCard = ({ iname }) => {
	const [showModal, setShowModal] = useState(false)

	const toggleModal = useCallback(() => {
		setShowModal(prevShowModal => !prevShowModal)
	}, [])

	return (
		<>
			<p>make</p>
			<p>model={iname}</p>
			<p>year</p>
			<p>rentalPrice</p>
			<p>addressTown</p>
			<p>addressCountry</p>
			<p>rentalCompany</p>
			<p>Premium</p>
			<p>type</p>
			<p>model</p>
			<p>id</p>
			<p>functionalities[1]</p>
			<button type='button' onClick={toggleModal}>
				LearnMore
			</button>
			{showModal && (
				<Modal onClose={toggleModal}>
					<ModalCard name={iname} flagModal={toggleModal} />
				</Modal>
			)}
		</>
	)
}
