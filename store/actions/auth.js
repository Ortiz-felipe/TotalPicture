import { AsyncStorage } from 'react-native';

// export const SIGNUP = 'SIGNUP';
// export const LOGIN = 'LOGIN';
export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';

let timer;


export const authenticate = (userId, token, expiryTime) => {
    return dispatch => {
        dispatch(setLogoutTimer(expiryTime));
        dispatch({type: AUTHENTICATE, userId: userId, token: token });
    };
    
}

export const signup = (email, password) => {
    return async dispatch => {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA5XwgWhoW_Vk3ZcM_TWoEuSvSQ2FmvMLw',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                })
            });

            if (!response.ok) {
                const errorResponseData = await response.json();
                const errorId = errorResponseData.error.message;
                let message = 'Something went wrong'
                if(errorId === 'EMAIL_EXISTS') {   
                    message = 'This email exists already, please use other email address';                
                } else if (errorId === 'INVALID_PASSWORD') {
                    message = 'This password is not valid!';
                }
    
                throw new Error(message)
            }

        const responseData = await response.json();

        dispatch(authenticate(responseData.localId, responseData.token, parseInt(responseData.expiresIn) * 1000));

        const expirationDate = new Date(new Date().getTime() + parseInt(responseData.expiresIn) * 1000)
        saveDataToStorage(responseData.idToken, response.localId, expirationDate);
    };
};

export const login = (email, password) => {
    return async dispatch => {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA5XwgWhoW_Vk3ZcM_TWoEuSvSQ2FmvMLw',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                })
            });

        if (!response.ok) {
            const errorResponseData = await response.json();
            const errorId = errorResponseData.error.message;
            let message = 'Something went wrong'
            if(errorId === 'EMAIL_NOT_FOUND') {   
                message = 'This email could not be found';                
            } else if (errorId === 'INVALID_PASSWORD') {
                message = 'This password is not valid!';
            }

            throw new Error(message)
        }

        const responseData = await response.json();

        

        dispatch(authenticate(responseData.localId, responseData.token, parseInt(responseData.expiresIn) * 1000));

        const expirationDate = new Date(new Date().getTime() + parseInt(responseData.expiresIn) * 1000)
        saveDataToStorage(responseData.idToken, response.localId, expirationDate);
    };
};

export const logout = () => {
    clearLogoutTimer();
    AsyncStorage.removeItem('userData');
    return { type: LOGOUT };
};

const clearLogoutTimer = () => {
    if (timer) {        
        clearTimeout(timer);
    }
};

const setLogoutTimer = expirationTime => {
    return dispatch => {
        timer = setTimeout(() => {
            dispatch(logout());
        }, expirationTime);
    };    
};

const saveDataToStorage = (token, userId, expirationDate) => {
    AsyncStorage.setItem('userData', JSON.stringify({
        token: token,
        userId: userId,
        expirationDate: expirationDate.toISOString()
    }));
};