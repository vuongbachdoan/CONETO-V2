import { Auth } from 'aws-amplify';

export const signUp = async (email, password) => {
    return await Auth.signUp({
        username: email,
        password,
        attributes: {
            email
        }
    });
}

export const sendConfirmationCode = async (username, code) => {
    return await Auth.confirmSignUp(username, code);
}

export const resendSignUpCode = async (userEmail) => {
    try {
        return await Auth.resendSignUp(userEmail);
    } catch (error) {
        console.log('Error sending confirmation code:', error);
    }
}

export const signIn = async (userEmail, password) => {
    return await Auth.signIn(userEmail, password);
}

export const changePassword = async (userEmail, oldPassword, newPassword) => {
    try {
        Auth.changePassword(userEmail, oldPassword, newPassword)
    } catch (error) {
        console.log('Error change-password:', error);
    }
}

export const RequestResetPassword = async (userEmail) => {
    try {
        Auth.forgotPassword(userEmail)
    } catch (error) {
        console.log('Error reset-password:', error);
    }
}

export const ConfirmForgotPassword = async (userEmail, code, newPassword) => {
    try {
        Auth.forgotPasswordSubmit(userEmail, code, newPassword);
    } catch (error) {

    }
}
