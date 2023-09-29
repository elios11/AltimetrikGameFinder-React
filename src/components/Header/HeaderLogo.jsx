import styles from './Header.module.css';
import HeaderLogo from './HeaderLogo'; // Rename the import to HeaderLogo

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <img src="logo.png" alt="" />
            </div>
            <button className="hamburger-menu" onClick={() => setSidebarOpen(!isSidebarOpen)}>
                ☰
            </button>
            
            <div className={styles['header__user-profile']}>
                <img src="profile.png" alt="" className={styles['header__user-profile-image']} />
                <button className={styles['header__logout-button']}>Logout</button>
            </div>
        </header> 
    );
}
