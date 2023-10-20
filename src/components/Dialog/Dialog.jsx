import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export default function Dialog({ children, setIsDialogOpen, isDialogOpen, type }) {
    const dialogRef = useRef(true);

    function handleDialogType() {
        if (type === 'modal') {
            dialogRef.current?.showModal();
        } else if (type === 'dialog') {
            dialogRef.current?.open();
        }
    }

    useEffect(() => {
        if (isDialogOpen) {
            handleDialogType();
        } else {
            dialogRef.current?.close();
        }
    }, [isDialogOpen, type]);

    function closeDialog() {
        setIsDialogOpen(false);
    }

    return (
        <dialog ref={dialogRef} onClose={closeDialog}>
            {children}
        </dialog>
    );
}

Dialog.propTypes = {
    children: PropTypes.node,
    setIsDialogOpen: PropTypes.func,
    isDialogOpen: PropTypes.bool,
    type: PropTypes.string,
};
