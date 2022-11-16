import styled from "styled-components";

export const NavbarWrapper = styled.div`
  z-index: 1;
  width: 100%;
  height: 10vh;
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.15s all ease;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  background-color: transparent;
  margin-left: 5rem;
  font-size: 3.5rem;
  text-decoration: none;
  color: white;
  text-shadow: 0px 0px 2px #1d1d1d;
  cursor: pointer;
`;

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-right: 5rem;
`;

export const MenuItem = styled.button`
  font-family: "Aclonica", sans-serif;
  background-color: transparent;
  border: none;
  font-size: 2.5rem;
  cursor: pointer;
  color: white;
  text-shadow: 0px 0px 2px #1d1d1d;

  &::after {
    content: "";
    width: 0px;
    height: 0.225rem;
    display: block;
    background: white;
    transition: 0.1s;
    border: 1px solid #1d1d1d;
  }
  &:hover::after {
    width: 100%;
  }
`;
