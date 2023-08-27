import React, { useContext } from 'react';
import spotify from '../Contexts/spotifycontext';


const Login = () => {
    const {client_id,REDIRECT_URI,AUTH_ENDPOINT,RESPONSE_TYPE} = useContext(spotify)

    return (
        <div className='login-page'>
            <div className="logo-spotify">
                <img src="/img/spotify-logo.svg" className='logo-img' />
                <h1></h1>
            </div>
            <div className='redirect-block'>
            <a href={`${AUTH_ENDPOINT}?client_id=${client_id}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=playlist-modify-public`}>
                <button className='log-in-btn'>Log in</button>
            </a>
            </div>
        </div>
    );
};


export default Login;