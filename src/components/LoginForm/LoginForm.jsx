import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Checkbox from '@components/Checkbox';
import FormInput from '@components/FormInput';

import { loginFormEmailValidation, loginFormPasswordValidation } from '@/utils/authFormValidations';
import { handleRegisterAndLogin } from '@/utils/loginHandlers';

import styles from './LoginForm.module.css';

export default function LoginForm() {
    const navigate = useNavigate();

    /* State to manage the response data from an API request */
    const [response, setResponse] = useState({
        loading: false,
        data: {},
        error: null,
    });

    /* Destructure variables from the useForm hook for form management */
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm();

    /* Triggers a re-rendering for showing the invalid email or password feedback */
    useEffect(() => {
        if (response.error) {
            setError('password', { type: 'manual', message: 'Invalid email or password' });
            setError('email', { type: 'manual' });
        }
    }, [response]);

    /* Handles form submit and logs the user if the data is correct */
    async function logUser(loginFormData) {
        await handleRegisterAndLogin(setResponse, loginFormData, '/login', navigate);
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit((loginFormData) => logUser(loginFormData))}>
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
                validationName={'password'}
                validation={loginFormPasswordValidation}
                type={'password'}
                name={'password'}
                placeholder={'Password'}
                autoComplete="on"
                error={errors.password}
            />

            <div className={styles['form__password-details-container']}>
                <input className={styles['form__checkbox']} type="checkbox" name="rememberPwd" id="rememberPwd" />
                <label className={styles['form__checkbox-label']} id="remember-info-label" htmlFor="rememberPwd">
                    <Checkbox register={register} name="remember_me" />
                    <span>Remember me</span>
                </label>
                <a className={`text-primary ${styles['form__forgot-password-link']}`} href="/forgot-password">
                    Forgot password?
                </a>
            </div>
            <button className="primary-button" type="submit" formNoValidate>
                Log in
            </button>
        </form>
    );
}
