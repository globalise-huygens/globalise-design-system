"use client";

import { useBodyScrollLock } from "@/lib/useBodyScrollLock";
import { cn } from "@/lib/utils";
import * as React from "react";
import {
  Dialog as AriaDialog,
  Modal as AriaModal,
  ModalOverlay as AriaModalOverlay,
  type ModalOverlayProps as AriaModalOverlayProps,
} from "react-aria-components";

export interface DocumentDetailOverlayProps extends Omit<
  AriaModalOverlayProps,
  "children" | "className" | "style"
> {
  className?: string;
  modalClassName?: string;
  dialogClassName?: string;
  contentClassName?: string;
  children?: React.ReactNode;
}

const DocumentDetailOverlay = React.forwardRef<
  HTMLDivElement,
  DocumentDetailOverlayProps
>(
  (
    {
      className,
      modalClassName,
      dialogClassName,
      contentClassName = "gds-document-detail-dialog-placement",
      children,
      isDismissable = false,
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
        className={cn("gds-document-detail-overlay", className)}
        {...props}
      >
        <AriaModal className={cn("gds-document-detail-modal", modalClassName)}>
          <AriaDialog
            className={cn(
              contentClassName,
              "gds-document-detail-dialog",
              dialogClassName,
            )}
          >
            {children}
          </AriaDialog>
        </AriaModal>
      </AriaModalOverlay>
    );
  },
);
DocumentDetailOverlay.displayName = "DocumentDetailOverlay";

export { DocumentDetailOverlay };
export * from "../document-detail/DocumentDetailCssRecipes";
export * from "../document-detail/DocumentDetailCanvases";
export * from "../document-detail/DocumentDetailControls";
export * from "../document-detail/DocumentDetailEntityHighlightMenu";
export * from "../document-detail/DocumentDetailLayout";
export * from "../document-detail/DocumentDetailReferenceCard";
export * from "../document-detail/DocumentDetailSidebarSection";
export * from "../document-detail/DocumentDetailSurfaces";
