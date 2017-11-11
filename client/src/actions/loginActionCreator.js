
export function login(email, password) {
    console.log("login attempt");
    return {
        type: 'LOGIN_REQUEST',
        email,
        password
    }

}