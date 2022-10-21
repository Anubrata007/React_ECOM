
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/" className='logo_name'>
        <img src="./images/logo1.png" alt="logo" />
        <p>PICK|<span>SHOP</span></p>
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 7rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo {
    height: 5rem;
  }
  .logo_name {
    display: flex;
    img{
      width: 6rem;
    }
    p {
      display: flex;
      align-items: center;
      font-size: 2.2rem;
      font-weight: 600;

      span {
        color: ${({ theme }) => theme.colors.helper};
      }
    }
  }
`;
export default Header;