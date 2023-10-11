import AuthLayout from '@components/AuthLayout';
import RegisterForm from '@components/RegisterForm';

export default function Register() {
    return (
        <AuthLayout
            title="Welcome! Register"
            title2="Create an account to find the games you're looking for!"
            label="Already have an account?"
            label2="Log in"
            link="/login"
        >
            <RegisterForm />
        </AuthLayout>
    );
}
