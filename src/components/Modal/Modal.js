import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { ModalBackdrop, ModalContent } from './Modal.styled'
const modalRoot = document.querySelector('#modal-root')

export const Modal = ({ onClose, children }) => {
	useEffect(() => {
		const handleKeyDown = e => {
			if (e.code === 'Escape') {
				onClose()
			}
		}
		window.addEventListener('keydown', handleKeyDown)

		return () => {
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [onClose])

	const handleBackdropClick = e => {
		if (e.currentTarget === e.target) {
			onClose()
		}
	}

	return createPortal(
		<ModalBackdrop className='Modal_backdrop' onClick={handleBackdropClick}>
			<ModalContent className='Modal_content'>{children}</ModalContent>
		</ModalBackdrop>,
		modalRoot
	)
}
