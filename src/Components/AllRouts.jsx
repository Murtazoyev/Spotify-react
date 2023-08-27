import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Layout from '../Layout/Layout';
import Home from '../Pages/Home';
import Library from '../Pages/Library';
import Playslist from '../Pages/Playslist';
import Seach from '../Pages/Seach';
import Settings from '../Pages/Settings';

const AllRouts = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>} >
                <Route index element={<Home/>} />
                <Route path="/playlist" element={<Playslist/>} />
                <Route path="/search" element={<Seach/>} />
                <Route path="/playlist:id" element={<Playslist/>} />
                <Route path='/library' element={<Library/>}/>
                <Route path='/settings' element={<Settings/>}/>
            </Route>
        </Routes>
    );
};


export default AllRouts;