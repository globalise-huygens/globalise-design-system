"use client";

import { IconClose } from "@/components/icons/IconClose";
import { IconSearch } from "@/components/icons/IconSearch";
import { cn } from "@/lib/utils";
import * as React from "react";

/* -------------------------------------------------------------------------- */
/*  NavSearchBar                                                               */
/* -------------------------------------------------------------------------- */

export interface NavSearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const NavSearchBar = React.forwardRef<HTMLInputElement, NavSearchBarProps>(
  ({ className, placeholder = "Search the archive", ...props }, ref) => {
    const inputId = React.useId();
    const ariaLabel = props["aria-label"] ?? placeholder;

    return (
      <div
        className={cn(
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
          "hidden sm:flex h-12 w-full max-w-96 items-center gap-2.5 bg-(--brand-white)/10 px-4 backdrop-blur-[20px]",
          className,
        )}
      >
        <label htmlFor={inputId} className="sr-only">
          {ariaLabel}
        </label>
        <IconSearch
          className="h-5 w-5 shrink-0 text-(--brand-white)"
          aria-hidden="true"
        />
        <input
          id={inputId}
          ref={ref}
          type="search"
          placeholder={placeholder}
          aria-label={ariaLabel}
          className="w-full bg-transparent text-sm font-medium text-(--brand-white) font-serif leading-3 opacity-50 placeholder:text-(--brand-white) placeholder:opacity-50 focus:opacity-100 focus:outline-none"
          {...props}
        />
      </div>
    );
  },
);
NavSearchBar.displayName = "NavSearchBar";

/* -------------------------------------------------------------------------- */
/*  NavLink                                                                    */
/* -------------------------------------------------------------------------- */

export interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(
        "text-sm font-medium leading-5 text-(--brand-white) transition-opacity hover:opacity-80",
        className,
      )}
      {...props}
    />
  ),
);
NavLink.displayName = "NavLink";

/* -------------------------------------------------------------------------- */
/*  NavLinks container                                                         */
/* -------------------------------------------------------------------------- */

export interface NavLinksProps extends React.HTMLAttributes<HTMLDivElement> {}

const NavLinks = React.forwardRef<HTMLDivElement, NavLinksProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "hidden sm:flex shrink-0 items-center justify-end gap-4 sm:gap-10",
        className,
      )}
      {...props}
    />
  ),
);
NavLinks.displayName = "NavLinks";

/* -------------------------------------------------------------------------- */
/*  Navbar                                                                     */
/* -------------------------------------------------------------------------- */

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  /** Logo element (image, SVG, or React node) */
  logo?: React.ReactNode;
}

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ className, logo, children, ...props }, ref) => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    return (
      <nav
        ref={ref}
        className={cn(
          "relative flex flex-wrap h-auto sm:h-22 w-full max-w-[1440px] mx-auto items-center justify-between px-4 sm:px-8 lg:px-[60px] py-4 sm:py-0",
          className,
        )}
        {...props}
      >
        {/* Top bar: logo + mobile toggle */}
        <div className="flex w-full sm:w-auto items-center justify-between">
          {logo && <div className="shrink-0">{logo}</div>}
          <button
            type="button"
            className="sm:hidden flex h-10 w-10 items-center justify-center text-(--brand-white)"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <IconClose className="h-5 w-5" />
            ) : (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop: center + right content */}
        {children}

        {/* Mobile expanded panel */}
        {mobileOpen && (
          <div className="sm:hidden flex w-full flex-col gap-4 pt-4 pb-2">
            {React.Children.map(children, (child) => {
              if (!React.isValidElement(child)) return null;
              if (
                child.type === NavLinks ||
                (child.type as React.FC & { displayName?: string })
                  ?.displayName === "NavLinks"
              ) {
                return (
                  <div className="flex flex-col gap-3">
                    {
                      (
                        child as React.ReactElement<{
                          children?: React.ReactNode;
                        }>
                      ).props.children
                    }
                  </div>
                );
              }
              if (
                child.type === NavSearchBar ||
                (child.type as React.FC & { displayName?: string })
                  ?.displayName === "NavSearchBar"
              ) {
                return React.cloneElement(
                  child as React.ReactElement<{ className?: string }>,
                  {
                    className: cn(
                      "relative flex left-auto top-auto translate-x-0 translate-y-0 w-full max-w-none",
                      (child as React.ReactElement<{ className?: string }>)
                        .props.className,
                    ),
                  },
                );
              }
              return child;
            })}
          </div>
        )}
      </nav>
    );
  },
);
Navbar.displayName = "Navbar";

export { Navbar, NavLink, NavLinks, NavSearchBar };
