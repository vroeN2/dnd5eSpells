import Link from "next/link";
import { useState, useEffect } from "react";
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
    <NavbarWrapper>
      <Link style={{ textDecoration: "none" }} href="/">
        <LogoWrapper>DnD Spells List</LogoWrapper>
      </Link>

      <MenuWrapper>
        <Link style={{ textDecoration: "none" }} href="/arcanes">
          <MenuItem style={{ marginRight: "2rem" }}>Arcanes List</MenuItem>
        </Link>

        <Link style={{ textDecoration: "none" }} href="/spellbook">
          <MenuItem>Spellbook</MenuItem>
        </Link>
      </MenuWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;
