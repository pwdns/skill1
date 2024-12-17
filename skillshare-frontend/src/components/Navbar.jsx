import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar({ isTokenValid, user}) {
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/';
    }
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo">
        SkillShare
      </NavLink>
      <ul className="navbar-links">
        <li>
          <NavLink to="/upload" activeClassName="active">
            Upload Blog
          </NavLink>
        </li>

        {isTokenValid ? (
          <>
            <li>
              <NavLink to="profile" className="login-button">
                @{user.sub}
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleLogout} className="login-button">
                logout
              </NavLink>
            </li>
          </>
        ) : (
          <NavLink to="/auth" className="login-button">
            Login
          </NavLink>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
