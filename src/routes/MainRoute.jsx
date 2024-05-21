import React from 'react';
import HomePage from '../pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import StorePage from '../pages/StorePage/StorePage';

const MainRoute = () => {
    const NOT_AUTH = [
        {link: "/", element: <StorePage />}
    ]
    const ACTIVE_USER = [
        {link: "/", element: <HomePage />},
        // {link: "/", element: <HomePage />},
        // {link: "/", element: <HomePage />},
        // {link: "/", element: <HomePage />},
        // {link: "/", element: <HomePage />},
    ];
    const ADMIN = [
        
    ]
    return (
        <Routes>
            {NOT_AUTH.map((elem) => (
                <Route key={elem.id} path={elem.link} element={elem.element} />
            ))}
        </Routes>
    );
}

export default MainRoute;
