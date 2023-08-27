import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import themeContext from '../Contexts/themeContext';

const Component = () => {

    const {isDark} = useContext(themeContext)

    const style = {
        background: isDark ? "#c4c4c4" : "#fff" 
    }

    return (
        <div className='w-[200px] h-[200px] bg-[#c4c4c4] rounded-md' style={style} >

        </div>
    );
};


export default Component;