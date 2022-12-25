import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FcFilm } from 'react-icons/fc';

export const Container = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: left;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  > nav {
    display: flex;
  }
`;

export const Logo = styled.div`
  font-weight: 700;
  margin: 0px;
  padding-top: 8px;
  text-align: center;
`;

export const IconMovie = styled(FcFilm)`
  width: 30px;
  height: 30px;
  padding: 2px 5px;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: black;
    background-color: #ffcc00;
  }
`;
