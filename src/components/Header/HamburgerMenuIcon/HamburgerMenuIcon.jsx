import styles from './HamburgerMenuIcon.module.css';

export default function HamburgerMenuIcon() {
    return (
        <>
            <button className={styles['hamburger-menu-icon']}>
                <div></div>
                <div></div>
                <div></div>
            </button>
        </>
    );
}
