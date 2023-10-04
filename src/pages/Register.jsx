import Auth from '@components/templates/Auth/Auth';

export default function Register() {
    return (
        <Auth
            title="Welcome! register"
            title2="Create an account to find the games you're looking for!"
            label="Already have an account?"
            label2="Log in"
            link="/login"
            rememberMe={false}
            forgotPassword={false}
            buttonText="Sign up"
        />
    );
}
