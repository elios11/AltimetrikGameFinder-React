import styles from './Checkbox.module.css';

export default function Checkbox() {
    return <input className={styles['remember-me__checkbox']} type="checkbox" />;
}
