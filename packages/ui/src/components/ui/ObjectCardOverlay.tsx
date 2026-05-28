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
          "fixed inset-0 z-50 overflow-hidden overscroll-none bg-brand-black/80 backdrop-blur-[2px]",
          className,
        )}
        {...props}
      >
        <AriaModal
          className={cn(
            "flex h-full w-full items-end justify-center overflow-hidden px-overlay-object-card-inset-x pb-0 pt-overlay-object-card-inset-top",
            modalClassName,
          )}
        >
          <div className="flex h-overlay-object-card-frame-height w-overlay-object-card-frame-width max-w-overlay-object-card-frame-max-width min-h-0 items-stretch justify-center overflow-hidden">
            <div className="grid min-h-0 w-full grid-cols-[repeat(var(--shell-cols),minmax(0,1fr))] items-stretch justify-center">
              <div className={cn("min-h-0 w-full", contentClassName)}>
                {children}
              </div>
            </div>
          </div>
        </AriaModal>
      </AriaModalOverlay>
    );
  },
);
ObjectCardOverlay.displayName = "ObjectCardOverlay";

export { ObjectCardOverlay };
