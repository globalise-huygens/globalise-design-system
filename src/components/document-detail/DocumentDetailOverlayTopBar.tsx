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
  DocumentDetailToolButton,
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
        <DocumentDetailToolButton
          className="document-detail-overlay-mode-button"
          icon={<IconScan className="document-detail-overlay-icon" />}
          aria-label={isScanVisible ? "Hide scan viewer" : "Show scan viewer"}
          isActive={isScanVisible}
          onPress={() => onPaneToggle("scan")}
          size="compact"
        >
          Scan
        </DocumentDetailToolButton>
        <DocumentDetailToolButton
          className="document-detail-overlay-mode-button"
          icon={<IconTranscription className="document-detail-overlay-icon" />}
          aria-label={
            isTextVisible
              ? "Hide transcription viewer"
              : "Show transcription viewer"
          }
          isActive={isTextVisible}
          onPress={() => onPaneToggle("text")}
          size="compact"
        >
          Text
        </DocumentDetailToolButton>
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
