import styles from './Checkbox.module.css';
import { PropTypes } from 'prop-types';

export default function Checkbox({ register, name }) {
    return <input className={styles['checkbox']} type="checkbox" {...(register && { ...register(name) })} />;
}

Checkbox.propTypes = {
    register: PropTypes.func,
    name: PropTypes.string,
};
