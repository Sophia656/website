import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Body from './pages/Body';
import Contacts from './pages/Contacts';
import Documental from './pages/Documental';
import HomePage from './pages/HomePage';
import People from './pages/People';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/home' element={<HomePage />} />
            <Route path='/people' element={<People />} />
            <Route path='/documental' element={<Documental />} />
            <Route path='/body' element={<Body />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/*' element={<HomePage />} />
        </Routes>
    );
};

export default AppRouter;