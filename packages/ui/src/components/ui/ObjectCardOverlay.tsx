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
      contentClassName = "slot-content-band",
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
          "fixed inset-0 z-50 overflow-y-auto overscroll-contain bg-brand-black/80 backdrop-blur-[2px]",
          className,
        )}
        {...props}
      >
        <AriaModal
          className={cn(
            "flex min-h-full w-full items-start justify-center overflow-y-auto px-overlay-object-card-inset-x pb-overlay-object-card-inset-bottom pt-overlay-object-card-inset-top",
            modalClassName,
          )}
        >
          <div className="flex h-overlay-object-card-frame-height w-overlay-object-card-frame-width max-w-overlay-object-card-frame-max-width min-h-0 items-stretch justify-center overflow-hidden">
            <div
              className={cn(
                "grid min-h-0 w-full grid-cols-[repeat(var(--shell-cols),minmax(0,1fr))] items-stretch justify-center",
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
