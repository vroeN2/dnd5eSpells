import Link from "next/link";
import { useEffect, useState } from "react";
import { LogoWrapper, MenuItem, MenuWrapper, NavbarWrapper } from "./styled";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [navbarBackgroundColor, setNavbarBackgroundColor] =
    useState("transparent");

  const changeScrollY = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", changeScrollY);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", changeScrollY);
    };
  });

  useEffect(() => {
    setNavbarBackgroundColor(scrollY > 0 ? "#ffffff" : "transparent");
  }, [scrollY]);

  return (
    <>
      <NavbarWrapper color={navbarBackgroundColor}>
        <Link style={{ textDecoration: "none" }} href="/">
          <LogoWrapper color={navbarBackgroundColor}>
            DnD Spells List
          </LogoWrapper>
        </Link>

        <MenuWrapper>
          <Link style={{ textDecoration: "none" }} href="/spells">
            <MenuItem
              style={{ marginRight: "2rem" }}
              color={navbarBackgroundColor}
            >
              All spells
            </MenuItem>
          </Link>

          <Link style={{ textDecoration: "none" }} href="/saved">
            <MenuItem color={navbarBackgroundColor}>Saved</MenuItem>
          </Link>
        </MenuWrapper>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;
