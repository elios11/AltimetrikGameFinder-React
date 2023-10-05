import PropTypes from 'prop-types';
import { useState } from 'react';

import styles from '../LoginForm/LoginForm.module.css';

export default function FormInput({
    register,
    validationName,
    validation,
    type,
    name,
    placeholder,
    autoComplete = 'off',
    error,
}) {
    const [passwordVisibility, setPasswordVisibility] = useState(false);

    return (
        <>
            <div className={styles['form__password-container']}>
                <input
                    type={type === 'password' ? (passwordVisibility ? 'text' : 'password') : type}
                    name={name}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    className={`${styles['form__input']} ${error && styles['invalid']}`}
                    {...(register && { ...register(validationName, validation) })}
                />
                {type === 'password' && (
                    <>
                        {/* prettier-ignore */}
                        <svg onClick={()=>setPasswordVisibility(!passwordVisibility)} className={styles['form__password-icon']} aria-label="show password eye icon" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="showPwdIconPath" fillRule="evenodd" clipRule="evenodd" d="M6.30081 15.577C4.77781 14.268 3.69081 12.773 3.17981 12C3.68981 11.227 4.77781 9.732 6.30081 8.423C7.87381 7.072 9.81581 6 11.9998 6C14.1838 6 16.1258 7.072 17.6988 8.423C19.2218 9.732 20.3088 11.227 20.8198 12C20.3098 12.773 19.2218 14.268 17.6988 15.577C16.1258 16.928 14.1838 18 11.9998 18C9.81581 18 7.87381 16.928 6.30081 15.577ZM11.9998 4C9.14781 4 6.75681 5.395 4.99781 6.906C3.23281 8.423 2.00781 10.138 1.46381 10.97C1.26284 11.2759 1.15576 11.634 1.15576 12C1.15576 12.366 1.26284 12.7241 1.46381 13.03C2.00781 13.862 3.23281 15.577 4.99781 17.094C6.75781 18.605 9.14781 20 11.9998 20C14.8518 20 17.2428 18.605 19.0018 17.094C20.7668 15.577 21.9918 13.862 22.5358 13.03C22.9468 12.402 22.9468 11.599 22.5358 10.97C21.9918 10.138 20.7668 8.423 19.0018 6.906C17.2418 5.395 14.8518 4 11.9998 4ZM9.99981 12C9.99981 11.4696 10.2105 10.9609 10.5856 10.5858C10.9607 10.2107 11.4694 10 11.9998 10C12.5302 10 13.0389 10.2107 13.414 10.5858C13.7891 10.9609 13.9998 11.4696 13.9998 12C13.9998 12.5304 13.7891 13.0391 13.414 13.4142C13.0389 13.7893 12.5302 14 11.9998 14C11.4694 14 10.9607 13.7893 10.5856 13.4142C10.2105 13.0391 9.99981 12.5304 9.99981 12ZM11.9998 8C10.9389 8 9.92153 8.42143 9.17138 9.17157C8.42124 9.92172 7.99981 10.9391 7.99981 12C7.99981 13.0609 8.42124 14.0783 9.17138 14.8284C9.92153 15.5786 10.9389 16 11.9998 16C13.0607 16 14.0781 15.5786 14.8282 14.8284C15.5784 14.0783 15.9998 13.0609 15.9998 12C15.9998 10.9391 15.5784 9.92172 14.8282 9.17157C14.0781 8.42143 13.0607 8 11.9998 8Z"
              fill={error && "#ff0000" || "#BF5FE1"} />
    </svg>
                    </>
                )}
            </div>
            {error && (
                <span className={styles['form__feedback']} id="pwdFeedback">
                    {error.message}
                </span>
            )}
        </>
    );
}

FormInput.propTypes = {
    register: PropTypes.func,
    validationName: PropTypes.string,
    validation: PropTypes.object,
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    autoComplete: PropTypes.string,
    error: PropTypes.object,
};
