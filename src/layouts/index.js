import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const Layout = () => {
    return <>
            <header>
            <h1>FilmFace</h1>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/search">Search</NavLink>
            </nav>
            </header>
            <Outlet />
            <footer>Footer Stuff</footer>
        </>
}

export default Layout;