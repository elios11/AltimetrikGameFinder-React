import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export default function Dialog({ children, closeModal, isModalOpen, type }) {
    const modalRef = useRef(true);

    function handleDialogType() {
        if (type === 'modal') {
            modalRef.current?.showModal();
        } else if (type === 'dialog') {
            modalRef.current?.open();
        }
    }

    useEffect(() => {
        if (isModalOpen) {
            handleDialogType();
        } else {
            modalRef.current?.close();
        }
    }, [isModalOpen, type]);

    return (
        <dialog ref={modalRef} onClose={closeModal}>
            {children}
        </dialog>
    );
}

Dialog.propTypes = {
    children: PropTypes.node.isRequired,
    closeModal: PropTypes.func.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
};
