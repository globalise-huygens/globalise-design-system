import {
  IconClose,
  IconLayoutElements,
  IconPairedPage,
  IconPictureInPicture,
  IconScan,
  IconSidebar,
  IconSwap,
  IconTranscription,
  IconViewModeMenu,
} from "@/index";
import {
  ContentWarningControl,
  DocumentDetailIconButton,
  DocumentDetailSegmentedToggleGroup,
  DocumentDetailSegmentedToggleItem,
} from "../ui/DocumentDetailControls";
import {
  DocumentDetailBarGroup,
  DocumentDetailTopBar as DocumentDetailTopBarPrimitive,
} from "../ui/DocumentDetailLayout";
import type { DocumentDetailOverlayContent } from "./DocumentDetailOverlayTypes";

export function DocumentDetailTopBar({
  content,
  isSidebarOpen,
  isScanVisible,
  isTextVisible,
  isWarningOpen,
  isViewerOrderSwapped,
  isPairedPageView,
  isMiniWindowEnabled,
  onSidebarToggle,
  onPaneToggle,
  onWarningOpenChange,
  onViewerOrderToggle,
  onPairedPageToggle,
  onMiniWindowToggle,
  onClose,
}: {
  content: DocumentDetailOverlayContent;
  isSidebarOpen: boolean;
  isScanVisible: boolean;
  isTextVisible: boolean;
  isWarningOpen: boolean;
  isViewerOrderSwapped: boolean;
  isPairedPageView: boolean;
  isMiniWindowEnabled: boolean;
  onSidebarToggle: () => void;
  onPaneToggle: (pane: "scan" | "text") => void;
  onWarningOpenChange: (isOpen: boolean) => void;
  onViewerOrderToggle: () => void;
  onPairedPageToggle: () => void;
  onMiniWindowToggle: () => void;
  onClose: () => void;
}) {
  return (
    <DocumentDetailTopBarPrimitive className="document-detail-overlay-rich-top-bar">
      <DocumentDetailBarGroup className="document-detail-overlay-mode-group">
        <DocumentDetailIconButton
          aria-label={isSidebarOpen ? "Hide sidebar" : "Show sidebar"}
          tooltip={isSidebarOpen ? "Hide sidebar" : "Show sidebar"}
          icon={<IconSidebar className="document-detail-overlay-icon" />}
          isActive={isSidebarOpen}
          onPress={onSidebarToggle}
        />
        <span aria-hidden="true" className="document-detail-overlay-divider" />
        <DocumentDetailSegmentedToggleGroup
          aria-label="Primary viewer mode controls"
          selectionMode="multiple"
          disallowEmptySelection
          selectedKeys={
            new Set([
              ...(isScanVisible ? ["scan"] : []),
              ...(isTextVisible ? ["text"] : []),
            ])
          }
          onSelectionChange={(keys) => {
            const nextSelection = new Set(
              Array.from(keys, (key) => String(key)),
            );

            if (nextSelection.size === 0) {
              return;
            }

            const shouldShowScan = nextSelection.has("scan");
            const shouldShowText = nextSelection.has("text");

            if (shouldShowScan !== isScanVisible) {
              onPaneToggle("scan");
            }

            if (shouldShowText !== isTextVisible) {
              onPaneToggle("text");
            }
          }}
        >
          <DocumentDetailSegmentedToggleItem
            id="scan"
            aria-label={
              isScanVisible ? "Close scan viewer" : "Open scan viewer"
            }
            size="regular"
          >
            <IconScan className="document-detail-overlay-icon" />
            <span>Scan</span>
          </DocumentDetailSegmentedToggleItem>
          <DocumentDetailSegmentedToggleItem
            id="text"
            aria-label={
              isTextVisible
                ? "Close transcription viewer"
                : "Open transcription viewer"
            }
            size="regular"
          >
            <IconTranscription className="document-detail-overlay-icon" />
            <span>Text</span>
          </DocumentDetailSegmentedToggleItem>
        </DocumentDetailSegmentedToggleGroup>
      </DocumentDetailBarGroup>

      <DocumentDetailBarGroup className="document-detail-overlay-warning">
        <ContentWarningControl
          warning={content.contentWarning}
          isOpen={isWarningOpen}
          onOpenChange={onWarningOpenChange}
        />
      </DocumentDetailBarGroup>

      <DocumentDetailBarGroup className="document-detail-overlay-toolbar-actions">
        <DocumentDetailIconButton
          aria-label="Swap panes"
          tooltip="Swap scan and transcription"
          icon={<IconSwap className="document-detail-overlay-icon" />}
          isActive={isViewerOrderSwapped}
          onPress={onViewerOrderToggle}
          variant="quiet"
        />
        <DocumentDetailIconButton
          aria-label="Toggle mini window"
          tooltip="Toggle mini window"
          icon={
            <IconPictureInPicture className="document-detail-overlay-icon" />
          }
          isActive={isMiniWindowEnabled}
          onPress={onMiniWindowToggle}
          variant="quiet"
        />
        <DocumentDetailIconButton
          aria-label="Toggle paired page"
          tooltip="Toggle paired page"
          icon={<IconPairedPage className="document-detail-overlay-icon" />}
          isActive={isPairedPageView}
          onPress={onPairedPageToggle}
          variant="quiet"
        />
        <span aria-hidden="true" className="document-detail-overlay-divider" />
        <DocumentDetailIconButton
          aria-label="View mode"
          tooltip="View mode"
          icon={<IconViewModeMenu className="document-detail-overlay-icon" />}
          variant="quiet"
        />
        <DocumentDetailIconButton
          aria-label="Toggle layout elements"
          tooltip="Toggle layout elements"
          icon={<IconLayoutElements className="document-detail-overlay-icon" />}
          variant="quiet"
        />
        <span aria-hidden="true" className="document-detail-overlay-divider" />
        <DocumentDetailIconButton
          aria-label="Close document detail"
          tooltip="Close"
          icon={<IconClose className="document-detail-overlay-icon" />}
          onPress={onClose}
          variant="quiet"
        />
      </DocumentDetailBarGroup>
    </DocumentDetailTopBarPrimitive>
  );
}
