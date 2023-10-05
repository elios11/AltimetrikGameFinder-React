import AuthLayout from '../AuthLayout/AuthLayout';
import RegisterForm from '../RegisterForm/RegisterForm';

export default function Register() {
    return (
        <AuthLayout
            title="Welcome! register"
            title2="Create an account to find the games you're looking for!"
            label="Already have an account?"
            label2="Log in"
            link="/login"
        >
            <RegisterForm />
        </AuthLayout>
    );
}
