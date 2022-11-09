import Link from "next/link";
import { LogoWrapper, MenuItem, MenuWrapper, NavbarWrapper } from "./styled";

const Navbar = () => {
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
