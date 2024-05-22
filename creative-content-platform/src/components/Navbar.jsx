import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    color: white;
    font-weight: bold;
    &:hover {
      color: ${(props) => props.theme.colors.accent};
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/games">Games</Link>
        <Link to="/videos">Videos</Link>
        <Link to="/artwork">Artwork</Link>
        <Link to="/music">Music</Link>
      </NavLinks>
      <SearchBar />
    </NavbarContainer>
  );
};

export default Navbar;
