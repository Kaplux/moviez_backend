import fetch from 'isomorphic-fetch'

export function login(email, password) {
    console.log("login attempt");
    return (dispatch) => {
        dispatch({
            type: 'LOGIN_REQUEST',
            email,
            password
        });
        var searchParam = new URLSearchParams();
        searchParam.set('email', email);
        searchParam.set('password', password);
        return fetch("/api/login", {
            method: 'POST',
            body: searchParam
        })
            .then(
            (response) => {
                console.log(response);
                if (response.ok) {
                    dispatch(loginSuccess(email));
                } else {
                    dispatch(loginFailure());
                }
            }
            )
            .catch((e) => {
                console.log(e); dispatch(loginFailure());
            })


    };
}

export function loginSuccess(email) {
    console.log("login success");
    return {
        type: 'LOGIN_REQUEST_SUCCESS',
        email
    }

}


export function loginFailure() {
    console.log("login failure");
    return {
        type: 'LOGIN_REQUEST_FAILURE'
    }

}