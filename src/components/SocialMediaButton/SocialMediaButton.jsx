import PropTypes from 'prop-types';
import styles from './SocialMediaButton.module.css';
import ICONS_D_PATH from './socialMediaLogosSVGPath';

export default function SocialMediaButton({ social }) {
    return (
        <div className="social-media-login">
            {/* prettier-ignore */}
            <svg className={styles["social-media-login__icon"]} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="social-media-login__icon-path" fillRule="evenodd" clipRule="evenodd" d={ICONS_D_PATH[social]} 
                      fill="#fff" />
            </svg>
            <button className={styles['social-media-login__button']} type="button">
                Login with <span className={styles['social-media-login__name']}>{social}</span>
            </button>
        </div>
    );
}

SocialMediaButton.propTypes = {
    social: PropTypes.string,
};
