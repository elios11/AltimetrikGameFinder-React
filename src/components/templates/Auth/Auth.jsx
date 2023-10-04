import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import darkLogo from '@assets/brand/dark-logo.svg';
import LoginForm from '@components/LoginForm/LoginForm';
import SocialMediaButton from '@components/SocialMediaButton/SocialMediaButton';

import styles from './Login.module.css';

export default function Auth({ title, title2, label, label2, link, rememberMe, forgotPassword, buttonText, apiRoute }) {
    return (
        <div className={styles['login-container']}>
            <div className={styles['login-card']}>
                <img className={styles['login-card--logo']} src={darkLogo} alt="game finder logo" />
                <h1 className={styles['login-card--title']}>{title}</h1>
                <h2 className={styles['login-card--subtitle']}>{title2}</h2>
                <LoginForm
                    rememberMe={rememberMe}
                    forgotPassword={forgotPassword}
                    buttonText={buttonText}
                    apiRoute={apiRoute}
                />
                <div className={styles['login-card--register-section']}>
                    <p>{label}</p>
                    <Link className="text-primary" to={link}>
                        {label2}
                    </Link>
                </div>
                <div className={styles['login-card--divisor']}>
                    <hr />
                    <span>or</span>
                    <hr />
                </div>
                <div className={styles['login-card--social-media']}>
                    <SocialMediaButton social="facebook" />
                    <SocialMediaButton social="x" />
                    <SocialMediaButton social="google" />
                </div>
            </div>
        </div>
    );
}

Auth.propTypes = {
    title: PropTypes.string,
    title2: PropTypes.string,
    label: PropTypes.string,
    label2: PropTypes.string,
    link: PropTypes.string,
    rememberMe: PropTypes.bool,
    forgotPassword: PropTypes.bool,
    buttonText: PropTypes.string,
    apiRoute: PropTypes.string,
};
