"use client";

import { cn, IconClose, IconMenu } from "@globalise/design-system";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const navigation = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs/getting-started" },
      { title: "Design Tokens", href: "/docs/tokens" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Overview", href: "/docs/components" },
      { title: "Button", href: "/docs/components/button" },
      { title: "Typography", href: "/docs/components/typography" },
      { title: "Layout Patterns", href: "/docs/components/layout-patterns" },
      { title: "Container", href: "/docs/components/container" },
      { title: "Grid", href: "/docs/components/grid" },
      { title: "Divider", href: "/docs/components/divider" },
      { title: "Section", href: "/docs/components/section" },
      { title: "Navbar", href: "/docs/components/navbar" },
      { title: "Search Bar", href: "/docs/components/search-bar" },
      { title: "Card Base", href: "/docs/components/card-base" },
      { title: "Card Article", href: "/docs/components/card-article" },
      { title: "Card Hero", href: "/docs/components/card-hero" },
      { title: "Card Featured", href: "/docs/components/card-featured" },
      { title: "Card Glance", href: "/docs/components/card-glance" },
      { title: "Entity Badge", href: "/docs/components/entity-badge" },
      { title: "Entity Tag", href: "/docs/components/entity-tag" },
      { title: "Object Card", href: "/docs/components/object-card" },
      {
        title: "Object Card Overlay",
        href: "/docs/components/object-card-overlay",
      },
      {
        title: "Reference Panel",
        href: "/docs/components/reference-panel",
      },
      {
        title: "Document Detail Overlay",
        href: "/docs/components/document-detail-overlay",
      },
      {
        title: "Tooltip",
        href: "/docs/components/tooltip",
      },
      {
        title: "Segmented Buttons",
        href: "/docs/components/segmented-buttons",
      },
      {
        title: "Checkbox",
        href: "/docs/components/checkbox",
      },
      {
        title: "Toolbars",
        href: "/docs/components/toolbars",
      },
      {
        title: "Dropdown / Popover",
        href: "/docs/components/dropdown-popover",
      },
      {
        title: "Sidebar Sections",
        href: "/docs/components/sidebar-sections",
      },
      {
        title: "Entity Highlight Menu",
        href: "/docs/components/entity-highlight-menu",
      },
      {
        title: "Newsletter Signup",
        href: "/docs/components/newsletter-signup",
      },
      { title: "Icons", href: "/docs/components/icons" },
      { title: "Logos", href: "/docs/components/logos" },
    ],
  },
];

function SidebarLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "block py-s8 text-sm font-sans transition-colors hover:text-brand-white",
        isActive ? "text-brand-turquoise font-medium" : "text-brand-white/50",
      )}
    >
      {children}
    </Link>
  );
}

function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="flex flex-col gap-6">
      {navigation.map((group) => (
        <div key={group.title}>
          <h4 className="mb-2 text-xs font-sans font-semibold uppercase tracking-wider text-brand-white/30">
            {group.title}
          </h4>
          <div className="flex flex-col">
            {group.items.map((item) => (
              <SidebarLink
                key={item.href}
                href={item.href}
                onClick={onNavigate}
              >
                {item.title}
              </SidebarLink>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}

export function DocsSidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile sidebar on navigation
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Mobile toggle */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-brand-turquoise px-4 py-s12 text-sm font-sans font-medium text-brand-black shadow-lg lg:hidden"
        aria-label="Open navigation"
      >
        <IconMenu className="h-4 w-4" />
        Menu
      </button>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-brand-black/60"
            onClick={() => setOpen(false)}
          />
          <aside className="absolute inset-y-0 left-0 w-72 overflow-y-auto border-r border-brand-white/10 bg-brand-black p-6">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-xs font-sans font-semibold uppercase tracking-wider text-brand-white/50">
                Documentation
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-brand-white/50 hover:text-brand-white"
                aria-label="Close navigation"
              >
                <IconClose className="h-5 w-5" />
              </button>
            </div>
            <SidebarNav onNavigate={() => setOpen(false)} />
          </aside>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="sticky top-[calc(var(--nav)+var(--section-gap))] hidden w-full max-h-[calc(100dvh-var(--nav)-var(--section-gap)-var(--s32))] overflow-y-auto pb-12 pr-section-gap lg:block">
        <SidebarNav />
      </aside>
    </>
  );
}
