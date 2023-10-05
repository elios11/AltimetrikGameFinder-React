import AuthLayout from '../AuthLayout/AuthLayout';
import LoginForm from '../LoginForm/LoginForm';

export default function Login() {
    return (
        <AuthLayout
            title="Welcome! Log in"
            title2="Log in to find the games you're looking for!"
            label="Not registered yet?"
            label2="Register now"
            link="/register"
        >
            <LoginForm />
        </AuthLayout>
    );
}
