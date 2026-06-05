"use client";

import { IconClose } from "@/components/icons/IconClose";
import { IconMenu } from "@/components/icons/IconMenu";
import { cn } from "@/lib/utils";
import * as React from "react";
import {
  Button as AriaButton,
  Link as AriaLink,
  type LinkProps as AriaLinkProps,
  SearchField as AriaSearchField,
  type SearchFieldProps as AriaSearchFieldProps,
} from "react-aria-components";
import { SearchFieldContent } from "./SearchFieldContent";

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
          "hidden h-control max-w-[28rem] flex-1 items-center gap-s8 bg-brand-white/10 px-s16 backdrop-blur-[20px] sm:mx-s16 sm:flex lg:mx-panel-pad",
          className,
        )}
        {...props}
      >
        <SearchFieldContent ariaLabel={ariaLabel} placeholder={placeholder} />
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
        "text-sm font-medium leading-5 text-brand-white transition-opacity hover:opacity-80",
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
        "hidden shrink-0 items-center justify-end gap-s16 sm:flex sm:gap-s40",
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
          "relative mx-auto flex h-auto w-full max-w-shell-max flex-wrap items-center px-shell-margin py-s16 sm:h-nav sm:py-0",
          className,
        )}
        {...props}
      >
        {/* Top bar: logo + mobile toggle */}
        <div className="flex w-full shrink-0 items-center justify-between sm:w-auto">
          {logo && <div className="shrink-0">{logo}</div>}
          <AriaButton
            className="flex h-control w-control items-center justify-center text-brand-white sm:hidden"
            onPress={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <IconClose className="h-s20 w-s20" />
            ) : (
              <IconMenu className="h-s20 w-s20" />
            )}
          </AriaButton>
        </div>

        {/* Desktop: center + right content */}
        {children}

        {/* Mobile expanded panel */}
        {mobileOpen && (
          <div className="flex w-full flex-col gap-row-gap pb-s8 pt-row-gap sm:hidden">
            {React.Children.map(children, (child) => {
              if (!React.isValidElement(child)) return null;
              const navType = getNavType(child);
              if (navType === "NavLinks") {
                return (
                  <div className="flex flex-col gap-row-gap">
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
                      "mx-0 flex w-full max-w-none",
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
