import { useEffect, useState } from 'react'
import { LogoWrapper, MenuItem, MenuWrapper, NavbarWrapper } from './styled'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0)
  const [navbarBackgroundColor, setNavbarBackgroundColor] = useState('transparent')

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
    setNavbarBackgroundColor(scrollY > 0 ? '#ffffff' : 'transparent')
    // setNavbarBackgroundColor(scrollY >= 50 ? 'transparent' : '#ffffff')
  }, [scrollY])

  return (
    <>
      <NavbarWrapper color={navbarBackgroundColor}>
        <Link style={{ textDecoration: 'none' }} to='/'>
          <LogoWrapper color={navbarBackgroundColor}>DnD Spells List</LogoWrapper>
        </Link>

        <MenuWrapper>
          <Link style={{ textDecoration: 'none' }} to='/spells'>
            <MenuItem style={{ marginRight: '2rem' }} color={navbarBackgroundColor}>
              All spells
            </MenuItem>
          </Link>

          <Link style={{ textDecoration: 'none' }} to='/saved'>
            <MenuItem color={navbarBackgroundColor}>Saved</MenuItem>
          </Link>
        </MenuWrapper>
      </NavbarWrapper>

      <Outlet />
    </>
  )
}

export default Navbar
