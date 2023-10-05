import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import darkLogo from '@assets/brand/dark-logo.svg';
import SocialMediaButton from '@components/SocialMediaButton/SocialMediaButton';

import styles from './AuthLayout.module.css';

export default function Auth({ title, title2, label, label2, link, children }) {
    return (
        <div className={styles['login-container']}>
            <img className={styles.logo} src={darkLogo} alt="game finder logo" />
            <div className={styles['login-card']}>
                <h1 className={styles['login-card--title']}>{title}</h1>
                <h2 className={styles['login-card--subtitle']}>{title2}</h2>
                {children}
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
    children: PropTypes.node,
};
