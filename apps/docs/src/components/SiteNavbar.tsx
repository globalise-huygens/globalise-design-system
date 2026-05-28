"use client";

import {
  Grid,
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
    <header className="sticky top-0 z-40 border-b border-brand-white/10 bg-brand-black/95 backdrop-blur-md">
      <Grid className="mx-auto w-full max-w-shell-max px-shell-margin">
        <div className="slot-content-band slot-mobile-pad">
          <Navbar
            className="max-w-none px-0"
            logo={
              <a href={basePath || "/"}>
                <LogoNavbar className="h-8 w-auto" />
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
        </div>
      </Grid>
    </header>
  );
}
