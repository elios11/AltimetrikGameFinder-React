import Dialog from '@components/Dialog';
import styles from './LogoutModal.module.css';
import { removeCookie } from '@utils/cookies';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function LogoutModal({ isModalOpen, closeModal }) {
    const navigate = useNavigate();

    function onDialogClose() {
        closeModal();
    }

    function logout() {
        removeCookie('authToken');
        removeCookie('user');
        navigate('/login');
    }

    return (
        <Dialog type="modal" isModalOpen={isModalOpen} onClose={onDialogClose} customStyles={styles.logout_modal}>
            {/* prettier-ignore */}
            <button className={styles['logout_modal__close-btn']} onClick={closeModal}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.29279 5.29301C5.48031 5.10553 5.73462 5.00022 5.99979 5.00022C6.26495 5.00022 6.51926 5.10553 6.70679 5.29301L11.9998 10.586L17.2928 5.29301C17.385 5.19749 17.4954 5.12131 17.6174 5.0689C17.7394 5.01649 17.8706 4.98891 18.0034 4.98775C18.1362 4.9866 18.2678 5.0119 18.3907 5.06218C18.5136 5.11246 18.6253 5.18672 18.7192 5.28061C18.8131 5.3745 18.8873 5.48615 18.9376 5.60905C18.9879 5.73195 19.0132 5.86363 19.012 5.99641C19.0109 6.12919 18.9833 6.26041 18.9309 6.38241C18.8785 6.50441 18.8023 6.61476 18.7068 6.707L13.4138 12L18.7068 17.293C18.8889 17.4816 18.9897 17.7342 18.9875 17.9964C18.9852 18.2586 18.88 18.5094 18.6946 18.6948C18.5092 18.8802 18.2584 18.9854 17.9962 18.9877C17.734 18.99 17.4814 18.8892 17.2928 18.707L11.9998 13.414L6.70679 18.707C6.51818 18.8892 6.26558 18.99 6.00339 18.9877C5.74119 18.9854 5.49038 18.8802 5.30497 18.6948C5.11956 18.5094 5.01439 18.2586 5.01211 17.9964C5.00983 17.7342 5.11063 17.4816 5.29279 17.293L10.5858 12L5.29279 6.707C5.10532 6.51948 5 6.26517 5 6C5 5.73484 5.10532 5.48053 5.29279 5.29301Z" fill="#D1D1D1"/>
                </svg>
            </button>
            <h2 className={styles['logout_modal__title']}>Do you want to log out?</h2>
            <h5 className={styles['logout_modal__description']}>
                By logging out, you will lose viewing access to the contents of the page. To regain access again you
                will need to log in again to see the rest of the page.
            </h5>
            <button className={`primary-button ${styles['logout_modal__logout-btn']}`} onClick={logout}>
                Yes
            </button>
            <button className={`text-primary ${styles['logout_modal__cancel-btn']}`} onClick={closeModal}>
                No
            </button>
        </Dialog>
    );
}

LogoutModal.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
};
