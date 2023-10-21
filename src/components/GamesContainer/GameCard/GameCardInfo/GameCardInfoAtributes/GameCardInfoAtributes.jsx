import PropTypes from 'prop-types';
import styles from './GameCardInfoAtributes.module.css';
import { useContext } from 'react';
import SingleColumnContext from '@context/SingleColumnContext';

export default function GameCardInfoAtributes({ tag, info }) {
    const { singleColumn } = useContext(SingleColumnContext);

    const gameAttributesNameStyles = singleColumn
        ? styles['card__game-details-atributes-name'] + ' ' + styles['single-column']
        : styles['card__game-details-atributes-name'];

    const gameAttributesValueStyles = singleColumn
        ? styles['card__game-details-atributes-value'] + ' ' + styles['single-column']
        : styles['card__game-details-atributes-value'];

    return (
        <div>
            <p className={gameAttributesNameStyles}>{tag}</p>
            <p className={gameAttributesValueStyles}>{info}</p>
        </div>
    );
}

GameCardInfoAtributes.propTypes = {
    tag: PropTypes.string,
    info: PropTypes.string,
};
