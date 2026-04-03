"use client";

import { IconClose } from "@/components/icons/IconClose";
import { IconExternalLink } from "@/components/icons/IconExternalLink";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import {
  Button as AriaButton,
  Link as AriaLink,
  type LinkProps as AriaLinkProps,
} from "react-aria-components";

/* -------------------------------------------------------------------------- */
/*  ObjectCard                                                                */
/* -------------------------------------------------------------------------- */

export interface ObjectCardProps extends React.HTMLAttributes<HTMLDivElement> {}

const ObjectCard = React.forwardRef<HTMLDivElement, ObjectCardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "inline-flex w-full max-w-[1008px] flex-col overflow-hidden",
        "shadow-[0px_6px_14px_0px_rgba(0,0,0,0.25),0px_25px_25px_0px_rgba(0,0,0,0.22),0px_56px_34px_0px_rgba(0,0,0,0.13),0px_100px_40px_0px_rgba(0,0,0,0.04),0px_156px_44px_0px_rgba(0,0,0,0.00)]",
        className,
      )}
      {...props}
    />
  ),
);
ObjectCard.displayName = "ObjectCard";

/* -------------------------------------------------------------------------- */
/*  ObjectCardBadge                                                           */
/* -------------------------------------------------------------------------- */

const objectCardBadgeVariants = cva(
  "inline-flex h-6 items-center gap-1 rounded-[999px] pl-2 pr-2.5 text-xs font-medium font-sans uppercase leading-3 outline outline-[1.2px] outline-offset-[-1.2px]",
  {
    variants: {
      type: {
        ship: "bg-blue-950 text-blue-200 outline-cyan-800",
        concept: "bg-emerald-950 text-emerald-200 outline-emerald-700",
        voyage: "bg-amber-950 text-amber-200 outline-amber-700",
        letter: "bg-violet-950 text-violet-200 outline-violet-700",
        person: "bg-rose-950 text-rose-200 outline-rose-700",
      },
    },
    defaultVariants: {
      type: "ship",
    },
  },
);

export interface ObjectCardBadgeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof objectCardBadgeVariants> {
  icon?: React.ReactNode;
}

const ObjectCardBadge = React.forwardRef<HTMLDivElement, ObjectCardBadgeProps>(
  ({ className, type, icon, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(objectCardBadgeVariants({ type }), className)}
      {...props}
    >
      {icon && (
        <span className="flex h-3.5 w-3.5 items-center justify-center">
          {icon}
        </span>
      )}
      <span>{children}</span>
    </div>
  ),
);
ObjectCardBadge.displayName = "ObjectCardBadge";

/* -------------------------------------------------------------------------- */
/*  ObjectCardHeader                                                          */
/* -------------------------------------------------------------------------- */

export interface ObjectCardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
}

const ObjectCardHeader = React.forwardRef<
  HTMLDivElement,
  ObjectCardHeaderProps
>(({ className, onClose, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative flex flex-col gap-3 border-b border-white/20 bg-zinc-800/50 px-8 py-6 lg:px-16 lg:py-8",
      className,
    )}
    {...props}
  >
    {children}
    {onClose && (
      <AriaButton
        onPress={onClose}
        aria-label="Close"
        className="absolute right-6 top-4 flex h-6 w-6 items-center justify-center text-white transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:top-8"
      >
        <IconClose className="h-3.5 w-3.5" />
      </AriaButton>
    )}
  </div>
));
ObjectCardHeader.displayName = "ObjectCardHeader";

/* -------------------------------------------------------------------------- */
/*  ObjectCardTitle                                                           */
/* -------------------------------------------------------------------------- */

export interface ObjectCardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const ObjectCardTitle = React.forwardRef<
  HTMLHeadingElement,
  ObjectCardTitleProps
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      "font-serif text-[32px] font-medium leading-none tracking-[-0.03em] text-gray-100",
      className,
    )}
    {...props}
  />
));
ObjectCardTitle.displayName = "ObjectCardTitle";

/* -------------------------------------------------------------------------- */
/*  ObjectCardStats                                                           */
/* -------------------------------------------------------------------------- */

export interface ObjectCardStatsProps extends React.HTMLAttributes<HTMLDivElement> {}

const ObjectCardStats = React.forwardRef<HTMLDivElement, ObjectCardStatsProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "inline-flex flex-wrap items-center gap-x-8 gap-y-1",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  ),
);
ObjectCardStats.displayName = "ObjectCardStats";

const ObjectCardStat = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "font-sans text-sm italic leading-[1.2] tracking-[-0.02em] text-zinc-400",
      className,
    )}
    {...props}
  />
));
ObjectCardStat.displayName = "ObjectCardStat";

/* -------------------------------------------------------------------------- */
/*  ObjectCardBody                                                            */
/* -------------------------------------------------------------------------- */

export interface ObjectCardBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

const ObjectCardBody = React.forwardRef<HTMLDivElement, ObjectCardBodyProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col overflow-hidden lg:flex-row", className)}
      {...props}
    />
  ),
);
ObjectCardBody.displayName = "ObjectCardBody";

/* -------------------------------------------------------------------------- */
/*  ObjectCardPanel                                                           */
/* -------------------------------------------------------------------------- */

const objectCardPanelVariants = cva(
  "flex flex-col overflow-y-auto [scrollbar-width:thin] [scrollbar-color:var(--neutral-500)_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-neutral-500 [&::-webkit-scrollbar-track]:bg-transparent",
  {
    variants: {
      side: {
        left: "w-full gap-12 border-b border-neutral-700 bg-[#242529] p-6 lg:w-1/2 lg:border-b-0 lg:border-r lg:p-8",
        right: "flex-1 bg-zinc-800/50 p-6 lg:px-12 lg:py-10",
      },
    },
    defaultVariants: {
      side: "left",
    },
  },
);

export interface ObjectCardPanelProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof objectCardPanelVariants> {}

const ObjectCardPanel = React.forwardRef<HTMLDivElement, ObjectCardPanelProps>(
  ({ className, side, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(objectCardPanelVariants({ side }), className)}
      {...props}
    />
  ),
);
ObjectCardPanel.displayName = "ObjectCardPanel";

/* -------------------------------------------------------------------------- */
/*  ObjectCardSection                                                         */
/* -------------------------------------------------------------------------- */

export interface ObjectCardSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}

const ObjectCardSection = React.forwardRef<
  HTMLDivElement,
  ObjectCardSectionProps
>(({ className, title, children, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col gap-5", className)} {...props}>
    <h3 className="font-serif text-lg font-medium leading-[1.1] tracking-[-0.02em] text-white">
      {title}
    </h3>
    {children}
  </div>
));
ObjectCardSection.displayName = "ObjectCardSection";

/* -------------------------------------------------------------------------- */
/*  ObjectCardProperty                                                        */
/* -------------------------------------------------------------------------- */

export interface ObjectCardPropertyProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: React.ReactNode;
}

const ObjectCardProperty = React.forwardRef<
  HTMLDivElement,
  ObjectCardPropertyProps
>(({ className, label, value, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center justify-between", className)}
    {...props}
  >
    <span className="font-sans text-xs font-normal uppercase leading-[1.35] tracking-[0.02em] text-neutral-400">
      {label}
    </span>
    <span className="w-[180px] font-sans text-sm font-medium leading-[1.35] tracking-[-0.02em] text-white">
      {value}
    </span>
  </div>
));
ObjectCardProperty.displayName = "ObjectCardProperty";

/* -------------------------------------------------------------------------- */
/*  ObjectCardPropertyList                                                    */
/* -------------------------------------------------------------------------- */

export interface ObjectCardPropertyListProps extends React.HTMLAttributes<HTMLDivElement> {}

const ObjectCardPropertyList = React.forwardRef<
  HTMLDivElement,
  ObjectCardPropertyListProps
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col gap-6", className)} {...props} />
));
ObjectCardPropertyList.displayName = "ObjectCardPropertyList";

/* -------------------------------------------------------------------------- */
/*  ObjectCardListItem                                                        */
/* -------------------------------------------------------------------------- */

export interface ObjectCardListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  href?: string;
}

const ObjectCardListItem = React.forwardRef<
  HTMLDivElement,
  ObjectCardListItemProps
>(({ className, href, children, ...props }, ref) => {
  const classes = cn(
    "flex flex-col gap-2 overflow-hidden rounded-lg border border-[#3d3e42] bg-[#313236] px-3 py-4",
    className,
  );

  if (href) {
    return (
      <AriaLink
        href={href}
        className={cn(
          classes,
          "group transition-colors hover:border-neutral-500",
        )}
      >
        <div ref={ref} {...props}>
          {children}
        </div>
      </AriaLink>
    );
  }

  return (
    <div ref={ref} className={classes} {...props}>
      {children}
    </div>
  );
});
ObjectCardListItem.displayName = "ObjectCardListItem";

/* -------------------------------------------------------------------------- */
/*  ObjectCardReferenceItem                                                   */
/* -------------------------------------------------------------------------- */

export interface ObjectCardReferenceItemProps extends React.HTMLAttributes<HTMLDivElement> {
  image?: React.ReactNode;
  title: string;
  snippet?: React.ReactNode;
  archiveId?: string;
  href?: string;
}

const ObjectCardReferenceItem = React.forwardRef<
  HTMLDivElement,
  ObjectCardReferenceItemProps
>(({ className, image, title, snippet, archiveId, href, ...props }, ref) => {
  const externalIcon = href ? (
    <AriaLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${title}`}
      className="shrink-0 text-white transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <IconExternalLink className="h-5 w-5" />
    </AriaLink>
  ) : null;

  return (
    <div
      ref={ref}
      className={cn("border-b border-white/40 py-6", className)}
      {...props}
    >
      <div className="flex items-start gap-6">
        <div className="flex flex-1 items-center gap-6">
          {image && (
            <div className="h-20 w-[120px] shrink-0 overflow-hidden">
              {image}
            </div>
          )}
          <div className="flex flex-1 flex-col gap-2.5">
            <span className="font-serif text-lg font-medium leading-[1.1] tracking-[-0.03em] text-white">
              {title}
            </span>
            <div className="flex flex-col gap-1.5">
              {snippet && (
                <div className="border border-neutral-600 bg-neutral-700 p-2">
                  <div className="line-clamp-2 font-sans text-xs leading-4 text-stone-300">
                    {snippet}
                  </div>
                </div>
              )}
              {archiveId && (
                <span className="font-sans text-xs leading-4 text-zinc-400">
                  {archiveId}
                </span>
              )}
            </div>
          </div>
        </div>
        {externalIcon}
      </div>
    </div>
  );
});
ObjectCardReferenceItem.displayName = "ObjectCardReferenceItem";

/* -------------------------------------------------------------------------- */
/*  ObjectCardExternalLink                                                    */
/* -------------------------------------------------------------------------- */

export interface ObjectCardExternalLinkProps extends Omit<
  AriaLinkProps,
  "className" | "style" | "children"
> {
  className?: string;
  children?: React.ReactNode;
}

const ObjectCardExternalLink = React.forwardRef<
  HTMLAnchorElement,
  ObjectCardExternalLinkProps
>(({ className, children, ...props }, ref) => {
  const content = (
    <>
      <span>{children}</span>
      <IconExternalLink className="h-4 w-4 text-blue-400" />
    </>
  );

  return (
    <AriaLink
      ref={ref}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-between font-sans text-sm font-medium leading-5 text-blue-400 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
      {...props}
    >
      {content}
    </AriaLink>
  );
});
ObjectCardExternalLink.displayName = "ObjectCardExternalLink";

/* -------------------------------------------------------------------------- */
/*  ObjectCardFooter                                                          */
/* -------------------------------------------------------------------------- */

export interface ObjectCardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const ObjectCardFooter = React.forwardRef<
  HTMLDivElement,
  ObjectCardFooterProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-start gap-8 border-t border-neutral-700 pt-8",
      className,
    )}
    {...props}
  />
));
ObjectCardFooter.displayName = "ObjectCardFooter";

/* -------------------------------------------------------------------------- */
/*  ObjectCardFooterAction                                                    */
/* -------------------------------------------------------------------------- */

export interface ObjectCardFooterActionProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  onPress?: () => void;
}

const ObjectCardFooterAction = React.forwardRef<
  HTMLButtonElement,
  ObjectCardFooterActionProps
>(({ className, icon, children, onPress, ...props }, ref) => (
  <AriaButton
    ref={ref}
    onPress={onPress}
    className={cn(
      "flex items-center gap-1.5 font-sans text-xs font-medium leading-3 text-zinc-400 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
      className,
    )}
    {...(props as Record<string, unknown>)}
  >
    {icon && (
      <span className="flex h-4 w-4 items-center justify-center">{icon}</span>
    )}
    <span>{children}</span>
  </AriaButton>
));
ObjectCardFooterAction.displayName = "ObjectCardFooterAction";

/* -------------------------------------------------------------------------- */
/*  ObjectCardViewMore                                                        */
/* -------------------------------------------------------------------------- */

export interface ObjectCardViewMoreProps extends React.HTMLAttributes<HTMLButtonElement> {
  onPress?: () => void;
}

const ObjectCardViewMore = React.forwardRef<
  HTMLButtonElement,
  ObjectCardViewMoreProps
>(({ className, children = "View more", onPress, ...props }, ref) => (
  <AriaButton
    ref={ref}
    onPress={onPress}
    className={cn(
      "inline-flex items-center gap-3 font-sans text-sm font-normal leading-[1.1] tracking-[-0.02em] text-white transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
      className,
    )}
    {...(props as Record<string, unknown>)}
  >
    <svg
      className="h-3 w-3"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 1V11M1 6H11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
    <span>{children}</span>
  </AriaButton>
));
ObjectCardViewMore.displayName = "ObjectCardViewMore";

/* -------------------------------------------------------------------------- */
/*  Exports                                                                   */
/* -------------------------------------------------------------------------- */

export {
  ObjectCard,
  ObjectCardBadge,
  objectCardBadgeVariants,
  ObjectCardBody,
  ObjectCardExternalLink,
  ObjectCardFooter,
  ObjectCardFooterAction,
  ObjectCardHeader,
  ObjectCardListItem,
  ObjectCardPanel,
  objectCardPanelVariants,
  ObjectCardProperty,
  ObjectCardPropertyList,
  ObjectCardReferenceItem,
  ObjectCardSection,
  ObjectCardStat,
  ObjectCardStats,
  ObjectCardTitle,
  ObjectCardViewMore,
};
