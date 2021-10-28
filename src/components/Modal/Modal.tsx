import React from 'react';

import './style.scss';

type IProps = {
	isOpen: boolean;
	onClose: () => void;
};

function Modal({ isOpen, onClose, children }: React.PropsWithChildren<IProps>) {
	return (
		<div className={`modal modalContent ${isOpen ? 'modal__open' : ''}`}>
			{children}
		</div>
	);
}

export default Modal;
