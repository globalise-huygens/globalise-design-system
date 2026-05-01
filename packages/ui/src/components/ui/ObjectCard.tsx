"use client";

import { IconArrowRight } from "@/components/icons/IconArrowRight";
import { IconClose } from "@/components/icons/IconClose";
import { IconExternalLink } from "@/components/icons/IconExternalLink";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
  Dialog as AriaDialog,
  type DialogProps as AriaDialogProps,
  Group,
  Heading as AriaHeading,
  Link as AriaLink,
  type LinkProps as AriaLinkProps,
  Separator as AriaSeparator,
} from "react-aria-components";

export interface ObjectCardProps extends Omit<
  AriaDialogProps,
  "className" | "style"
> {
  className?: string;
}

const ObjectCard = React.forwardRef<HTMLElement, ObjectCardProps>(
  ({ className, ...props }, ref) => (
    <AriaDialog
      ref={ref}
      className={cn(
        "inline-flex w-full max-w-[1008px] flex-col overflow-hidden outline-none",
        "shadow-[0px_6px_14px_0px_rgba(0,0,0,0.25),0px_25px_25px_0px_rgba(0,0,0,0.22),0px_56px_34px_0px_rgba(0,0,0,0.13),0px_100px_40px_0px_rgba(0,0,0,0.04),0px_156px_44px_0px_rgba(0,0,0,0.00)]",
        className,
      )}
      {...props}
    />
  ),
);
ObjectCard.displayName = "ObjectCard";

const objectCardBadgeVariants = cva(
  "inline-flex h-6 w-fit items-center gap-1 rounded-[999px] pl-2 pr-2.5 text-xs font-medium font-sans uppercase leading-3 outline outline-[1.2px] outline-offset-[-1.2px]",
  {
    variants: {
      type: {
        ship: "bg-turquoise-900 text-turquoise-200 outline-turquoise-700",
        concept: "bg-mint-900 text-mint-200 outline-mint-700",
        voyage: "bg-vermilion-900 text-vermilion-200 outline-vermilion-700",
        letter: "bg-parchment-900 text-parchment-200 outline-parchment-700",
        person: "bg-neutral-800 text-neutral-200 outline-neutral-600",
      },
    },
    defaultVariants: {
      type: "ship",
    },
  },
);

export interface ObjectCardBadgeProps
  extends
    React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof objectCardBadgeVariants> {
  icon?: React.ReactNode;
}

function ObjectCardBadge({
  className,
  type,
  icon,
  children,
  ...props
}: ObjectCardBadgeProps) {
  return (
    <span
      className={cn(objectCardBadgeVariants({ type }), className)}
      {...props}
    >
      {icon && (
        <span className="flex h-3.5 w-3.5 items-center justify-center">
          {icon}
        </span>
      )}
      <span>{children}</span>
    </span>
  );
}

export interface ObjectCardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

function ObjectCardTitle({ className, ...props }: ObjectCardTitleProps) {
  return (
    <AriaHeading
      slot="title"
      level={2}
      className={cn(
        "font-serif text-3xl font-medium leading-8 text-brand-white",
        className,
      )}
      {...props}
    />
  );
}

export interface ObjectCardHeaderProps {
  onClose?: () => void;
  className?: string;
  children?: React.ReactNode;
}

function ObjectCardHeader({
  className,
  onClose,
  children,
}: ObjectCardHeaderProps) {
  return (
    <header
      className={cn(
        "relative flex flex-col gap-3 border-b border-brand-white/20 bg-neutral-800/50 px-8 py-6 lg:px-16 lg:py-8",
        className,
      )}
    >
      {children}
      {onClose && (
        <AriaButton
          onPress={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center text-brand-white transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:right-8 lg:top-8"
        >
          <IconClose className="h-3.5 w-3.5" />
        </AriaButton>
      )}
    </header>
  );
}

export interface ObjectCardStatsProps {
  className?: string;
  children?: React.ReactNode;
}

function ObjectCardStats({ className, children }: ObjectCardStatsProps) {
  return (
    <div
      className={cn(
        "inline-flex flex-wrap items-center gap-x-8 gap-y-1",
        className,
      )}
    >
      {children}
    </div>
  );
}

export interface ObjectCardStatProps {
  className?: string;
  children?: React.ReactNode;
}

function ObjectCardStat({ className, children }: ObjectCardStatProps) {
  return (
    <span
      className={cn(
        "font-sans text-sm italic text-neutral-400 leading-4",
        className,
      )}
    >
      {children}
    </span>
  );
}

export interface ObjectCardBodyProps {
  className?: string;
  children?: React.ReactNode;
}

function ObjectCardBody({ className, children }: ObjectCardBodyProps) {
  return (
    <div className={cn("flex flex-col overflow-hidden lg:flex-row", className)}>
      {children}
    </div>
  );
}

const objectCardPanelVariants = cva(
  "flex flex-col overflow-y-auto [scrollbar-width:thin] [scrollbar-color:var(--neutral-500)_transparent]",
  {
    variants: {
      side: {
        left: "w-full border-b border-neutral-700 bg-neutral-800 p-6 lg:w-1/2 lg:border-b-0 lg:border-r lg:p-8 gap-8",
        right: "flex-1 bg-neutral-800/50 p-6 lg:px-12 lg:py-10",
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

function ObjectCardPanel({ className, side, ...props }: ObjectCardPanelProps) {
  return (
    <div
      className={cn(objectCardPanelVariants({ side }), className)}
      {...props}
    />
  );
}

export interface ObjectCardSectionProps {
  title?: string;
  scrollable?: boolean;
  className?: string;
  children?: React.ReactNode;
}

function ObjectCardSection({
  title,
  scrollable,
  className,
  children,
}: ObjectCardSectionProps) {
  const headingId = React.useId();
  return (
    <Group
      aria-labelledby={title ? headingId : undefined}
      className={cn("flex flex-col gap-3", className)}
    >
      {title && (
        <AriaHeading
          level={3}
          id={headingId}
          className="font-serif text-lg font-medium leading-5 text-brand-white"
        >
          {title}
        </AriaHeading>
      )}
      {scrollable ? (
        <div className="max-h-72 overflow-y-auto [scrollbar-width:thin] [scrollbar-color:var(--neutral-500)_transparent]">
          {children}
        </div>
      ) : (
        children
      )}
    </Group>
  );
}

export interface ObjectCardPropertyProps {
  label: string;
  value: React.ReactNode;
  className?: string;
}

function ObjectCardProperty({
  label,
  value,
  className,
}: ObjectCardPropertyProps) {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      <dt className="font-sans text-xs font-normal uppercase leading-4 tracking-tight text-neutral-400">
        {label}
      </dt>
      <dd className="w-44 font-sans text-sm font-medium leading-5 text-brand-white">
        {value}
      </dd>
    </div>
  );
}

export type ObjectCardPropertyListProps =
  React.HTMLAttributes<HTMLDListElement>;

function ObjectCardPropertyList({
  className,
  ...props
}: ObjectCardPropertyListProps) {
  return <dl className={cn("flex flex-col gap-3", className)} {...props} />;
}

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
      <IconExternalLink className="h-3 w-3 text-brand-turquoise" />
    </>
  );

  return (
    <AriaLink
      ref={ref}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-between font-sans text-sm font-medium leading-5 text-brand-turquoise transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
      {...props}
    >
      {content}
    </AriaLink>
  );
});
ObjectCardExternalLink.displayName = "ObjectCardExternalLink";

export interface ObjectCardListItemProps {
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

function ObjectCardListItem({
  className,
  href,
  children,
}: ObjectCardListItemProps) {
  const classes = cn(
    "group relative flex flex-col gap-2 overflow-hidden rounded-lg bg-white/[0.06] px-3 py-4",
    className,
  );

  if (href) {
    return (
      <AriaLink href={href} className={classes}>
        <div className="absolute inset-0 bg-white/[0.06] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
        <IconArrowRight className="absolute right-2.5 top-2.5 h-3 w-3 text-neutral-500" />
        {children}
      </AriaLink>
    );
  }

  return <div className={classes}>{children}</div>;
}

export interface ObjectCardReferenceItemProps {
  image?: React.ReactNode;
  title: string;
  snippet?: React.ReactNode;
  archiveId?: string;
  href?: string;
  className?: string;
}

function ObjectCardReferenceItem({
  className,
  image,
  title,
  snippet,
  archiveId,
  href,
}: ObjectCardReferenceItemProps) {
  return (
    <div className={cn("border-b border-brand-white/40 py-6", className)}>
      <div className="flex items-start gap-6">
        <div className="flex flex-1 items-center gap-6">
          {image && (
            <div className="h-20 w-28 shrink-0 overflow-hidden">{image}</div>
          )}
          <div className="flex flex-1 flex-col gap-2.5">
            <span className="font-serif text-lg font-medium leading-5 text-brand-white">
              {title}
            </span>
            <div className="flex flex-col gap-1.5">
              {snippet && (
                <div className="rounded bg-white/[0.06] px-2.5 py-2">
                  <div className="line-clamp-2 font-serif text-xs italic leading-4 text-neutral-200">
                    {snippet}
                  </div>
                </div>
              )}
              {archiveId && (
                <span className="font-sans text-xs leading-4 text-neutral-400">
                  {archiveId}
                </span>
              )}
            </div>
          </div>
        </div>
        {href && (
          <AriaLink
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${title}`}
            className="shrink-0 text-brand-white transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <IconExternalLink className="h-2.5 w-2.5" />
          </AriaLink>
        )}
      </div>
    </div>
  );
}

export interface ObjectCardFooterProps {
  className?: string;
  children?: React.ReactNode;
}

function ObjectCardFooter({ className, children }: ObjectCardFooterProps) {
  return (
    <div className={cn("flex flex-col gap-8", className)}>
      <AriaSeparator className="border-0 outline outline-offset-[-0.50px] outline-neutral-700" />
      <div className="flex items-start gap-8">{children}</div>
    </div>
  );
}

const objectCardActionVariants = cva(
  "inline-flex items-center font-sans transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  {
    variants: {
      variant: {
        default: "gap-1.5 text-xs font-medium leading-3 text-neutral-400",
        more: "gap-3 text-sm font-normal leading-4 text-brand-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface ObjectCardActionProps
  extends
    Omit<AriaButtonProps, "className" | "style" | "children">,
    VariantProps<typeof objectCardActionVariants> {
  className?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const ObjectCardAction = React.forwardRef<
  HTMLButtonElement,
  ObjectCardActionProps
>(({ className, variant, icon, children, ...props }, ref) => (
  <AriaButton
    ref={ref}
    className={cn(objectCardActionVariants({ variant }), className)}
    {...props}
  >
    {icon && (
      <span className="flex h-4 w-4 items-center justify-center">{icon}</span>
    )}
    <span>{children}</span>
  </AriaButton>
));
ObjectCardAction.displayName = "ObjectCardAction";

export {
  ObjectCard,
  ObjectCardAction,
  objectCardActionVariants,
  ObjectCardBadge,
  objectCardBadgeVariants,
  ObjectCardBody,
  ObjectCardExternalLink,
  ObjectCardFooter,
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
};
