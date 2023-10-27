import { useEffect, useRef } from 'react';

import PropTypes from 'prop-types';

/**
 * Dialog Component
 *
 * A versatile component for displaying dialogs or modals.
 *
 * @component
 *
 * @param {object} props - The component's props.
 * @param {ReactNode} props.children - The content to be displayed within the dialog.
 * @param {boolean} props.isModalOpen - Determines if the dialog/modal is open.
 * @param {Function} props.onClose - A function to be called when the dialog/modal is closed.
 * @param {string} props.type - The type of dialog, either 'dialog' or 'modal'.
 * @param {string} props.customStyles - A CSS class name to apply custom styles to the dialog element.
 *
 * @example
 * // To use this component, you can do:
 * <Dialog
 *   isModalOpen={true}
 *   onClose={handleClose}
 *   type="modal"
 *   customStyles="my-custom-dialog"
 * >
 *   This is the content of the dialog/modal.
 * </Dialog>
 */

export default function Dialog({ children, isModalOpen, onClose, type, customStyles }) {
    const modalRef = useRef();

    function handleDialogType() {
        if (type === 'modal') {
            modalRef.current?.showModal();
        } else if (type === 'dialog') {
            modalRef.current?.open();
        }
    }

    function handleOutsideClick(e) {
        const dialogDimensions = modalRef.current?.getBoundingClientRect();
        if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
        ) {
            modalRef.current?.close();
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
        <dialog
            className={customStyles}
            ref={modalRef}
            onClose={onClose}
            aria-hidden="true"
            onClick={handleOutsideClick}
        >
            {children}
        </dialog>
    );
}

Dialog.propTypes = {
    children: PropTypes.node.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['dialog', 'modal']).isRequired,
    customStyles: PropTypes.string,
};
