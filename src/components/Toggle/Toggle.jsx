import styles from './Toggle.module.css';

export default function Toggle() {
    return (
        <label className={styles['switch']}>
            <input type="checkbox" />
            <span className={`${styles['slider']} ${styles['round']}`}></span>
        </label>
    );
}
