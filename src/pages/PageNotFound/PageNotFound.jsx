import styles from './PageNotFound.module.css';
import darkLogo from '@assets/brand/single-logo-dark.svg';
import homeLogo from '@assets/pageNotFound/home-icon.svg';
import loginLogo from '@assets/pageNotFound/login-icon.svg';
import registerLogo from '@assets/pageNotFound/register-icon.svg';

export default function PageNotFound() {
    return (
        <div className={styles.pageNotFound}>
            {/* Header would go here */}
            <img src={darkLogo} alt="Game Finder Logo" className={styles['pageNotFound__logo']} />
            <h1 className={`${styles['pageNotFound__title']} text-primary`}>Page Not Found</h1>
            <p className={styles['pageNotFound__description']}>
                The page you are looking for could not be found. Please try searching for the game you are looking for,
                or visit our homepage.
            </p>
            <div className={styles['pageNotFound__links']}>
                <div>
                    <img src={homeLogo} alt="" />
                    <a href="/">Home</a>
                </div>
                <div>
                    <img src={loginLogo} alt="" />
                    <a href="/login">Login</a>
                </div>
                <div>
                    <img src={registerLogo} alt="" />
                    <a href="/register">Register</a>
                </div>
            </div>
        </div>
    );
}
