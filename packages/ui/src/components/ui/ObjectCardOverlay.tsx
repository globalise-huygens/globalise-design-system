"use client";

import { useBodyScrollLock } from "@/lib/useBodyScrollLock";
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
      isOpen,
      ...props
    },
    ref,
  ) => {
    useBodyScrollLock(Boolean(isOpen));

    return (
      <AriaModalOverlay
        ref={ref}
        isOpen={isOpen}
        isDismissable={isDismissable}
        className={cn(
          "fixed inset-0 z-50 overflow-y-auto overscroll-contain bg-brand-black/80 backdrop-blur-[2px] lg:py-layout-overlay-inset",
          className,
        )}
        {...props}
      >
        <AriaModal
          className={cn("h-full w-full overflow-hidden", modalClassName)}
        >
          <div className="mx-auto grid h-full min-h-0 w-full max-w-layout-page-max-width grid-cols-[repeat(var(--layout-grid-columns),minmax(0,1fr))] gap-x-layout-grid-gutter overflow-hidden px-layout-page-margin-mobile lg:h-[calc(100dvh-(var(--layout-overlay-inset)*2))] lg:max-h-[calc(100dvh-(var(--layout-overlay-inset)*2))] lg:px-layout-page-margin">
            <div
              className={cn(
                "col-span-16 flex min-h-0 items-stretch justify-center lg:col-span-12 lg:col-start-3 lg:items-stretch",
                contentClassName,
              )}
            >
              {children}
            </div>
          </div>
        </AriaModal>
      </AriaModalOverlay>
    );
  },
);
ObjectCardOverlay.displayName = "ObjectCardOverlay";

export { ObjectCardOverlay };
