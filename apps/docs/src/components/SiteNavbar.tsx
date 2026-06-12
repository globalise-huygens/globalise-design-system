"use client";

import {
  Grid,
  LogoNavbar,
  Navbar,
  NavLinks,
  NavSearchBar,
} from "@globalise/design-system";
import Link from "next/link";
import React from "react";

const navLinkClassName =
  "text-sm font-medium leading-5 text-brand-white transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

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
              <Link href="/docs/getting-started" className={navLinkClassName}>
                Docs
              </Link>
              <Link href="/docs/components" className={navLinkClassName}>
                Components
              </Link>
              <Link href="/docs/tokens" className={navLinkClassName}>
                Tokens
              </Link>
              <Link href="/example" className={navLinkClassName}>
                Example
              </Link>
            </NavLinks>
          </Navbar>
        </div>
      </Grid>
    </header>
  );
}
