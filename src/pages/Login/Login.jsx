import Auth from '@components/templates/Auth/Auth';

export default function Login() {
    return (
        <Auth
            title="Welcome! Log in"
            title2="Log in to find the games you're looking for!"
            label="Not registered yet?"
            label2="Register now"
            link="/register"
            rememberMe={true}
            forgotPassword={true}
            buttonText="Log in"
        />
    );
}
