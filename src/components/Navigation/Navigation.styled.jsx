import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const NavigationLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 10px;
  font-family: 'sans-serif';
  font-size: 26px;
  font-weight: 700;
  color: black;
  

  &:hover {
    color: green;
  }

  &.active {
    color: red;
    background-color: black;
    padding: 10px;
    border-radius: 14px;
  }
`;

