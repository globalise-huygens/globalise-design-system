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
      { title: "Button", href: "/docs/components/button" },
      { title: "Typography", href: "/docs/components/typography" },
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
        "block py-1.5 text-sm font-sans transition-colors hover:text-white",
        isActive ? "text-brand-turquoise font-medium" : "text-white/50",
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
          <h4 className="mb-2 text-xs font-sans font-semibold uppercase tracking-wider text-white/30">
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
        className="lg:hidden fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-brand-turquoise px-4 py-2.5 text-sm font-sans font-medium text-black shadow-lg"
        aria-label="Open navigation"
      >
        <IconMenu className="w-4 h-4" />
        Menu
      </button>

      {/* Mobile overlay */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />
          <aside className="absolute inset-y-0 left-0 w-72 bg-neutral-950 border-r border-white/10 overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-sans font-semibold uppercase tracking-wider text-white/50">
                Documentation
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-white/50 hover:text-white"
                aria-label="Close navigation"
              >
                <IconClose className="w-5 h-5" />
              </button>
            </div>
            <SidebarNav onNavigate={() => setOpen(false)} />
          </aside>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="sticky top-20 hidden lg:block w-64 shrink-0 h-[calc(100vh-5rem)] overflow-y-auto pb-12 pr-8">
        <SidebarNav />
      </aside>
    </>
  );
}
