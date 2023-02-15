import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <ul style={{ display: 'flex', gap: '10px' }}>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : undefined)}
          to="/"
        >
          Main Page
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : undefined)}
          to="/about"
        >
          About Page
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : undefined)}
          to="/portfolio"
        >
          Portfolio Page
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : undefined)}
          to="/login"
        >
          LogIn Page
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : undefined)}
          to="/todos"
        >
          Todo Page
        </NavLink>
      </li>
    </ul>
  );
};
