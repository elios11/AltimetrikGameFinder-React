import styles from './GameCardInfoAtributes.module.css';

export default function GameCardInfoAtributes({ tag, info }) {
    return (
        <div>
            <p className={styles.gameAttributesName}>{tag}</p>
            <p className={styles.gameAttributesValue}>{info}</p>
        </div>
    );
}
