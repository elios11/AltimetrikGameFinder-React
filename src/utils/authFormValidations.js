const validEmailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const validPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const loginFormEmailValidation = {
    required: {
        value: true,
        message: 'You must provide an email',
    },
    pattern: {
        value: validEmailRegex,
        message: 'Invalid email',
    },
};

export const loginFormPasswordValidation = {
    required: {
        value: true,
        message: 'You must provide a password',
    },
};

export const registerFormUsernameValidation = {
    required: {
        value: true,
        message: 'You must provide a username',
    },
};

export const registerFormPasswordValidation = {
    required: 'Password is required',
    minLength: {
        value: 6,
        message: 'Password must be at least 6 characters long.',
    },
    maxLength: {
        value: 20,
        message: 'Password must be less than 20 characters long.',
    },
    pattern: {
        value: validPasswordRegex,
        message:
            'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character.',
    },
};

export const registerFormRepeatPasswordValidation = (watch) => {
    return {
        required: 'Password confirmation is required',
        validate: (value) => value === watch('password') || 'Passwords do not match',
    };
};
