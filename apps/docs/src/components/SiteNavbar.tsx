"use client";

import {
  Grid,
  LogoNavbar,
  Navbar,
  NavLink,
  NavLinks,
  NavSearchBar,
} from "@globalise/design-system";
import Link from "next/link";
import React from "react";

export function SiteNavbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-white/10 bg-brand-black/95 backdrop-blur-md">
      <Grid className="mx-auto w-full max-w-shell-max px-shell-margin">
        <div className="slot-content-band slot-mobile-pad">
          <Navbar
            className="max-w-none px-0"
            logo={
              <Link href="/" aria-label="Globalise Design System home">
                <LogoNavbar className="h-8 w-auto" />
              </Link>
            }
          >
            <NavSearchBar placeholder="Search the archive" />
            <NavLinks>
              <NavLink href="/docs/getting-started">Docs</NavLink>
              <NavLink href="/docs/components/button">Components</NavLink>
              <NavLink href="/docs/tokens">Tokens</NavLink>
              <NavLink href="/example">Example</NavLink>
            </NavLinks>
          </Navbar>
        </div>
      </Grid>
    </header>
  );
}
