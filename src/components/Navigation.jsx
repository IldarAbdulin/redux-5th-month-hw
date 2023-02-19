import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <NavLink
        to={`/`}
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        Home
      </NavLink>
      <NavLink
        to={`/about`}
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        About
      </NavLink>
      <NavLink
        to={`/contacts`}
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        Contact
      </NavLink>
      <NavLink
        to={`/news`}
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        News
      </NavLink>
      <NavLink
        to={`/photos`}
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        Photos
      </NavLink>
    </div>
  );
};
