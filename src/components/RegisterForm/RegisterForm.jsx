import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import {
    loginFormEmailValidation,
    registerFormPasswordValidation,
    registerFormRepeatPasswordValidation,
    registerFormUsernameValidation,
} from '@/utils/authFormValidations';
import { handleRegisterAndLogin } from '@/utils/loginHandlers';

import FormInput from '../FormInput/FormInput';
import styles from '../LoginForm/LoginForm.module.css';

export default function RegisterForm() {
    const navigate = useNavigate();

    const [response, setResponse] = useState({
        loading: false,
        data: {},
        error: null,
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        watch,
    } = useForm();

    useEffect(() => {
        if (response.error) {
            setError('password', { type: 'manual', message: 'Invalid email or password' });
            setError('email', { type: 'manual' });
        }
    }, [response]);

    async function logUser(data) {
        await handleRegisterAndLogin(setResponse, data, '/register', navigate);
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit((data) => logUser(data))}>
            <FormInput
                register={register}
                validationName={'email'}
                validation={loginFormEmailValidation}
                type={'email'}
                name={'email'}
                placeholder={'Email'}
                autoComplete="on"
                error={errors.email}
            />
            <FormInput
                register={register}
                validationName={'user'}
                validation={registerFormUsernameValidation}
                type={'text'}
                name={'user'}
                placeholder={'Username'}
                autoComplete="on"
                error={errors.user}
            />
            <FormInput
                register={register}
                validationName={'password'}
                validation={registerFormPasswordValidation}
                type={'password'}
                name={'password'}
                placeholder={'Password'}
                autoComplete="on"
                error={errors.password}
            />
            <FormInput
                register={register}
                validationName={'repeatPassword'}
                validation={registerFormRepeatPasswordValidation(watch)}
                type={'password'}
                name={'repeatPassword'}
                placeholder={'Repeat password'}
                autoComplete="on"
                error={errors.repeatPassword}
            />
            <div className={styles['form__password-details-container']}></div>
            <button className="primary-button" type="submit" formNoValidate>
                Sign up
            </button>
        </form>
    );
}
