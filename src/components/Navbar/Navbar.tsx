import { useEffect, useState } from 'react'
import styled from 'styled-components'

const NavbarWrapper = styled.div`
  width: 100vw;
  height: 10vh;
  /* background: #ffffff; */
  background: ${(props) => props.color};
  position: fixed;
  top: 0;
  left: 0;
  /* color: #1d1d1d; */
  color: ${(props) => (props.color === '#ffffff' ? '#1d1d1d' : '#ffffff')};
  text-shadow: ${(props) => (props.color === '#ffffff' ? '0px' : '0px 0px 2px #1d1d1d')};
  transition: 0.2s all ease;
  padding: 1vh 2vw;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoWrapper = styled.div`
  font-size: 3.5rem;
`

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const MenuItem = styled.button`
  background-color: transparent;
  border: none;
  transition: 0.2s all ease;
  font-size: 2.5rem;

  &::after {
    content: '';
    width: 0px;
    height: 0.225rem;
    display: block;
    background: black;
    transition: 300ms;
  }

  &:hover::after {
    width: 100%;
  }
`

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0)
  const [navbarBackgroundColor, setNavbarBackgroundColor] = useState('#ffffff')

  const changeScrollY = () => {
    setScrollY(window.pageYOffset)
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener('scroll', changeScrollY)
    }
    watchScroll()
    return () => {
      window.removeEventListener('scroll', changeScrollY)
    }
  })

  useEffect(() => {
    setNavbarBackgroundColor(scrollY >= 50 ? 'transparent' : '#ffffff')
  }, [scrollY])

  return (
    <NavbarWrapper color={navbarBackgroundColor}>
      <LogoWrapper>DnD Spells List</LogoWrapper>

      <MenuWrapper style={{ color: 'inherit' }}>
        <MenuItem style={{ marginRight: '2rem', color: 'inherit' }}>All spells</MenuItem>

        <MenuItem style={{ color: 'inherit' }}>Saved</MenuItem>
      </MenuWrapper>
    </NavbarWrapper>
  )
}

export default Navbar
