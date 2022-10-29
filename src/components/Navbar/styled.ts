import styled from 'styled-components'

export const NavbarWrapper = styled.div`
  z-index: 3;
  width: 100vw;
  height: 10vh;
  background: ${(props) => props.color};
  box-shadow: ${(props) => (props.color === 'transparent' ? '0px' : '0px 1px 5px #1d1d1d')};
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.3s all ease;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoWrapper = styled.div`
  background-color: transparent;
  margin-left: 5rem;
  font-size: 3.5rem;
  transition: 0.3s all ease;
  text-decoration: none;
  color: ${(props) => (props.color === 'transparent' ? '#ffffff' : '#1d1d1d')};
  text-shadow: ${(props) => (props.color === 'transparent' ? '0px 0px 2px #1d1d1d' : '0px')};
  cursor: pointer;
`

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-right: 5rem;
`

export const MenuItem = styled.button`
  background-color: transparent;
  border: none;
  transition: 0.3s all ease;
  font-size: 2.5rem;
  cursor: pointer;
  color: ${(props) => (props.color === '#ffffff' ? '#1d1d1d' : '#ffffff')};
  text-shadow: ${(props) => (props.color === 'transparent' ? '0px 0px 2px #1d1d1d' : '0px')};

  &::after {
    content: '';
    width: 0px;
    height: 0.225rem;
    display: block;
    background: ${(props) => (props.color === '#ffffff' ? '#1d1d1d' : '#ffffff')};
    transition: 0.1s;
  }

  &:hover::after {
    width: 100%;
  }
`
