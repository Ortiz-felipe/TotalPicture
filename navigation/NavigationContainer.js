import React, { useEffect, useRef } from 'react';
import TotalPictureNavigator from './TotalPictureNavigator';
import { useSelector } from 'react-redux';
import { NavigationActions } from 'react-navigation';


const NavigationContainer = props => {
    const navRef = useRef();
    const isAuth = useSelector(state => !!state.auth.token);

    useEffect(() => {
        if(!isAuth) {
            navRef.current.dispatch(
                NavigationActions.navigate({routeName: 'Auth'})
            );
        }
        
    }, [isAuth])

    return <TotalPictureNavigator ref={navRef} />;
}

export default NavigationContainer;