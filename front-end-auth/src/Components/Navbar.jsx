import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = ({ logoutUser }) => {
    return (
        <nav>
            <Link to="/">Home</Link>{" "}
            <Link to='login'>Log-In</Link>{' '}
            <Link to='/signup'>Sign-Up</Link>{' '}
            <Link to='/users'>Users</Link>
            <button onClick={logoutUser}>log-out</button>
        </nav>
    )
}