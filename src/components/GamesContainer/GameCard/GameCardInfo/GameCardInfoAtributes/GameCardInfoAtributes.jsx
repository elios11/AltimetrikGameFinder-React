import styles from './GameCardInfoAtributes.module.css';

export default function GameCardInfoAtributes({ tag, info }) {
    return (
        <div>
            <p className={styles['card__game-details-atributes-name']}>{tag}</p>
            <p className={styles['card__game-details-atributes-value']}>{info}</p>
        </div>
    );
}
