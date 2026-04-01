"use client";

import { IconClose } from "@/components/icons/IconClose";
import { IconMenu } from "@/components/icons/IconMenu";
import { IconSearch } from "@/components/icons/IconSearch";
import { cn } from "@/lib/utils";
import * as React from "react";
import {
  Button as AriaButton,
  Input as AriaInput,
  Label as AriaLabel,
  Link as AriaLink,
  SearchField as AriaSearchField,
  type LinkProps as AriaLinkProps,
  type SearchFieldProps as AriaSearchFieldProps,
} from "react-aria-components";

/* -------------------------------------------------------------------------- */
/*  Internal type marker for mobile layout detection                          */
/* -------------------------------------------------------------------------- */

type NavComponentType = "NavSearchBar" | "NavLink" | "NavLinks";

function getNavType(child: React.ReactElement): NavComponentType | undefined {
  const type = child.type as React.FC & {
    displayName?: string;
    __navType?: NavComponentType;
  };
  return type.__navType ?? (type.displayName as NavComponentType | undefined);
}

/* -------------------------------------------------------------------------- */
/*  NavSearchBar                                                               */
/* -------------------------------------------------------------------------- */

export interface NavSearchBarProps extends Omit<
  AriaSearchFieldProps,
  "className" | "style"
> {
  className?: string;
  placeholder?: string;
}

const NavSearchBar = React.forwardRef<HTMLDivElement, NavSearchBarProps>(
  ({ className, placeholder = "Search the archive", ...props }, ref) => {
    const ariaLabel = props["aria-label"] ?? placeholder;

    return (
      <AriaSearchField
        ref={ref}
        aria-label={ariaLabel}
        className={cn(
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
          "hidden sm:flex h-12 w-full max-w-96 items-center gap-2.5 bg-(--brand-white)/10 px-4 backdrop-blur-[20px]",
          className,
        )}
        {...props}
      >
        <AriaLabel className="sr-only">{ariaLabel}</AriaLabel>
        <IconSearch
          className="h-5 w-5 shrink-0 text-(--brand-white)"
          aria-hidden="true"
        />
        <AriaInput
          placeholder={placeholder}
          className="w-full bg-transparent text-sm font-medium text-(--brand-white) font-serif leading-3 opacity-50 placeholder:text-(--brand-white) placeholder:opacity-50 focus:opacity-100 focus:outline-none"
        />
      </AriaSearchField>
    );
  },
);
NavSearchBar.displayName = "NavSearchBar";
(NavSearchBar as React.FC & { __navType?: NavComponentType }).__navType =
  "NavSearchBar";

/* -------------------------------------------------------------------------- */
/*  NavLink                                                                    */
/* -------------------------------------------------------------------------- */

export interface NavLinkProps extends Omit<
  AriaLinkProps,
  "className" | "style"
> {
  className?: string;
}

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, ...props }, ref) => (
    <AriaLink
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
(NavLink as React.FC & { __navType?: NavComponentType }).__navType = "NavLink";

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
(NavLinks as React.FC & { __navType?: NavComponentType }).__navType =
  "NavLinks";

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
          <AriaButton
            className="sm:hidden flex h-10 w-10 items-center justify-center text-(--brand-white)"
            onPress={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <IconClose className="h-5 w-5" />
            ) : (
              <IconMenu className="h-5 w-5" />
            )}
          </AriaButton>
        </div>

        {/* Desktop: center + right content */}
        {children}

        {/* Mobile expanded panel */}
        {mobileOpen && (
          <div className="sm:hidden flex w-full flex-col gap-4 pt-4 pb-2">
            {React.Children.map(children, (child) => {
              if (!React.isValidElement(child)) return null;
              const navType = getNavType(child);
              if (navType === "NavLinks") {
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
              if (navType === "NavSearchBar") {
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
