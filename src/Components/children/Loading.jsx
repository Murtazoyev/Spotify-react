import React from 'react';
import { Audio } from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' >
            <Audio
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="audio-loading"
                wrapperStyle={{}}
                wrapperClass="wrapper-class"
                visible={true}
            />   
        </div>
    );
};

Loading.propTypes = {};

export default Loading;