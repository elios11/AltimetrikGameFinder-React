import styles from './Login.module.css';
import LoginForm from '@components/LoginForm/LoginForm';
import SocialMediaButton from '@components/SocialMediaButton/SocialMediaButton';
import darkLogo from '@assets/brand/dark-logo.svg';

export default function Login() {
    return (
        <div className={styles['login-container']}>
            <div className={styles['login-card']}>
                <img className={styles['login-card--logo']} src={darkLogo} alt="game finder logo" />
                <h1 className={styles['login-card--title']}>Welcome! Log in or register</h1>
                <h2 className={styles['login-card--subtitle']}>Log in to find the games you&apos;re looking for!</h2>
                <LoginForm />
                <div className={styles['login-card--register-section']}>
                    <p>Not registered yet?</p>
                    <a className="text-primary" href="/register.html">
                        Register now
                    </a>
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
