import { useEffect, useState } from 'react'
import { LogoWrapper, MenuItem, MenuWrapper, NavbarWrapper } from './styled'

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
        <MenuItem style={{ marginRight: '2rem', color: 'inherit' }} color={navbarBackgroundColor}>
          All spells
        </MenuItem>

        <MenuItem style={{ color: 'inherit' }} color={navbarBackgroundColor}>
          Saved
        </MenuItem>
      </MenuWrapper>
    </NavbarWrapper>
  )
}

export default Navbar
