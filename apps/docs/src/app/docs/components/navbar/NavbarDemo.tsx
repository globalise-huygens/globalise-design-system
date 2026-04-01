"use client";

import {
  Navbar,
  NavLink,
  NavLinks,
  NavSearchBar,
  LogoNavbar,
} from "@globalise/design-system";

export function NavbarDemo() {
  return (
    <div className="w-full bg-brand-black">
      <Navbar logo={<LogoNavbar className="h-9 w-auto" />}>
        <NavSearchBar placeholder="Search the archive" />
        <NavLinks>
          <NavLink href="#">About</NavLink>
          <NavLink href="#">Archive</NavLink>
          <NavLink href="#">Contact</NavLink>
        </NavLinks>
      </Navbar>
    </div>
  );
}
