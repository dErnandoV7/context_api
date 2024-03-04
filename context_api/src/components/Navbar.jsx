import React from 'react'
import { NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return (
        <div>
            <ul>
                <NavLink
                    to={"/"}
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    Home
                </NavLink>
                <NavLink
                    to={"contact"}
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    Contatos
                </NavLink>
            </ul>
        </div>
    )
}

export default Navbar