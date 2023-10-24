import AuthLayout from '@components/AuthLayout';
import LoginForm from '@components/LoginForm';

export default function Login() {
    return (
        <AuthLayout
            title="Welcome!"
            title2="Log in to find the games you're looking for!"
            label="Not registered yet?"
            label2="Register now"
            link="/register"
        >
            <LoginForm />
        </AuthLayout>
    );
}
