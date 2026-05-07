"use client";

import { cn } from "@/lib/utils";
import * as React from "react";
import {
  Modal as AriaModal,
  ModalOverlay as AriaModalOverlay,
  type ModalOverlayProps as AriaModalOverlayProps,
} from "react-aria-components";

export interface ObjectCardOverlayProps extends Omit<
  AriaModalOverlayProps,
  "children" | "className" | "style"
> {
  className?: string;
  modalClassName?: string;
  contentClassName?: string;
  children?: React.ReactNode;
}

const ObjectCardOverlay = React.forwardRef<
  HTMLDivElement,
  ObjectCardOverlayProps
>(
  (
    {
      className,
      modalClassName,
      contentClassName,
      children,
      isDismissable = true,
      ...props
    },
    ref,
  ) => (
    <AriaModalOverlay
      ref={ref}
      isDismissable={isDismissable}
      className={cn("fixed inset-0 z-50 bg-brand-black/70 lg:p-8", className)}
      {...props}
    >
      <AriaModal className={cn("h-full w-full", modalClassName)}>
        <div className="grid h-full max-h-dvh min-h-0 w-full grid-cols-12 lg:h-[calc(100dvh-4rem)] lg:max-h-[calc(100dvh-4rem)]">
          <div
            className={cn(
              "col-span-12 flex min-h-0 items-stretch justify-center lg:col-span-10 lg:col-start-2 lg:items-center",
              contentClassName,
            )}
          >
            {children}
          </div>
        </div>
      </AriaModal>
    </AriaModalOverlay>
  ),
);
ObjectCardOverlay.displayName = "ObjectCardOverlay";

export { ObjectCardOverlay };
