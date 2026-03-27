"use client";

import {
  LogoNavbar,
  Navbar,
  NavLink,
  NavLinks,
  NavSearchBar,
} from "@globalise/design-system";
import React from "react";

const basePath =
  process.env.NODE_ENV === "production" ? "/globalise-design-system" : "";

export function SiteNavbar() {
  return (
    <Navbar
      logo={
        <a href={basePath || "/"}>
          <LogoNavbar className="h-5 w-auto" />
        </a>
      }
    >
      <NavSearchBar placeholder="Search the archive" />
      <NavLinks>
        <NavLink href={`${basePath}/docs/getting-started`}>Docs</NavLink>
        <NavLink href={`${basePath}/docs/components/button`}>
          Components
        </NavLink>
        <NavLink href={`${basePath}/docs/tokens`}>Tokens</NavLink>
        <NavLink href={`${basePath}/example`}>Example</NavLink>
      </NavLinks>
    </Navbar>
  );
}
