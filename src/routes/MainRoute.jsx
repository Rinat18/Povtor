import React from 'react';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import { Route, Routes } from 'react-router-dom';

const MainRoute = () => {
    const NOT_AUTH = [
        {link: "/", element: <LoginPage />}
    ]
    const ACTIVE_USER = [
        {link: "/", element: <HomePage />},
        // {link: "/", element: <HomePage />},
        // {link: "/", element: <HomePage />},
        // {link: "/", element: <HomePage />},
        // {link: "/", element: <HomePage />},

        
    ]
    const ADMIN = [

    ]
    return (
        <Routes>
            {ACTIVE_USER.map((elem) => (
                <Route key={elem.id} path={elem.link} element={elem.element} />
            ))}
        </Routes>
    );
}

export default MainRoute;
