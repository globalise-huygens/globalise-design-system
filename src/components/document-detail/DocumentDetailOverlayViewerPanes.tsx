import {
  DocumentDetailCanvas,
  DocumentDetailTranscriptCanvas,
} from "../ui/DocumentDetailCanvases";
import {
  DocumentDetailIconButton,
  DocumentDetailZoomLabel,
} from "../ui/DocumentDetailControls";
import { DocumentDetailFloatingToolbar } from "../ui/DocumentDetailSurfaces";
import { DocumentDetailViewerPane } from "../ui/DocumentDetailLayout";
import {
  IconDownload,
  IconReset,
  IconSearch,
  IconSetting,
  IconTableOfContent,
  IconTranscriptionDiplomatic,
  IconTranscriptionNormalised,
  IconZoomIn,
  IconZoomOut,
} from "@/index";
import { DocumentDetailScanPage } from "./DocumentDetailScanPage";

export type TranscriptMode = "normalised" | "diplomatic";

export function ManuscriptPane({
  isVisible,
  showMiniTranscript,
}: {
  isVisible: boolean;
  showMiniTranscript?: boolean;
}) {
  return (
    <DocumentDetailViewerPane hidden={!isVisible}>
      <DocumentDetailCanvas className="document-detail-overlay-manuscript-canvas">
        <DocumentDetailFloatingToolbar className="document-detail-overlay-floating-toolbar">
          <DocumentDetailIconButton
            aria-label="Zoom out"
            tooltip="Zoom out"
            icon={<IconZoomOut className="document-detail-overlay-icon" />}
            variant="quiet"
          />
          <DocumentDetailZoomLabel />
          <DocumentDetailIconButton
            aria-label="Zoom in"
            tooltip="Zoom in"
            icon={<IconZoomIn className="document-detail-overlay-icon" />}
            variant="quiet"
          />
          <DocumentDetailIconButton
            aria-label="Reset scan view"
            tooltip="Reset scan view"
            icon={<IconReset className="document-detail-overlay-icon" />}
            variant="quiet"
          />
          <DocumentDetailIconButton
            aria-label="Scan settings"
            tooltip="Scan settings"
            icon={<IconSetting className="document-detail-overlay-icon" />}
            variant="quiet"
          />
          <DocumentDetailIconButton
            aria-label="Download scan"
            tooltip="Download scan"
            icon={<IconDownload className="document-detail-overlay-icon" />}
            variant="quiet"
          />
        </DocumentDetailFloatingToolbar>

        <div className="document-detail-overlay-page-frame">
          <DocumentDetailScanPage />
        </div>

        {showMiniTranscript && (
          <div className="document-detail-overlay-mini-window">
            <span>Transcription</span>
            <div>
              {Array.from({ length: 8 }, (_, index) => (
                <i key={index} />
              ))}
            </div>
          </div>
        )}
      </DocumentDetailCanvas>
    </DocumentDetailViewerPane>
  );
}

export function TranscriptPane({
  isVisible,
  lines,
  transcriptMode,
  onTranscriptModeChange,
  showMiniScan,
}: {
  isVisible: boolean;
  lines: string[];
  transcriptMode: TranscriptMode;
  onTranscriptModeChange: (mode: TranscriptMode) => void;
  showMiniScan?: boolean;
}) {
  return (
    <DocumentDetailViewerPane hidden={!isVisible}>
      <DocumentDetailTranscriptCanvas className="document-detail-overlay-rich-transcript-canvas">
        <DocumentDetailFloatingToolbar
          align="end"
          className="document-detail-overlay-floating-toolbar"
        >
          <DocumentDetailIconButton
            aria-label="Show normalised transcription"
            tooltip="Normalised transcription"
            icon={
              <IconTranscriptionNormalised className="document-detail-overlay-icon" />
            }
            isActive={transcriptMode === "normalised"}
            onPress={() => onTranscriptModeChange("normalised")}
            variant="quiet"
          />
          <DocumentDetailIconButton
            aria-label="Show diplomatic transcription"
            tooltip="Diplomatic transcription"
            icon={
              <IconTranscriptionDiplomatic className="document-detail-overlay-icon" />
            }
            isActive={transcriptMode === "diplomatic"}
            onPress={() => onTranscriptModeChange("diplomatic")}
            variant="quiet"
          />
          <DocumentDetailIconButton
            aria-label="Table view"
            tooltip="Table view"
            icon={
              <IconTableOfContent className="document-detail-overlay-icon" />
            }
            variant="quiet"
          />
          <DocumentDetailIconButton
            aria-label="Search transcript"
            tooltip="Search transcript"
            icon={<IconSearch className="document-detail-overlay-icon" />}
            variant="quiet"
          />
          <DocumentDetailZoomLabel />
          <DocumentDetailIconButton
            aria-label="Zoom in"
            tooltip="Zoom in"
            icon={<IconZoomIn className="document-detail-overlay-icon" />}
            variant="quiet"
          />
          <DocumentDetailIconButton
            aria-label="Transcript settings"
            tooltip="Transcript settings"
            icon={<IconSetting className="document-detail-overlay-icon" />}
            variant="quiet"
          />
          <DocumentDetailIconButton
            aria-label="Download transcript"
            tooltip="Download transcript"
            icon={<IconDownload className="document-detail-overlay-icon" />}
            variant="quiet"
          />
        </DocumentDetailFloatingToolbar>

        <div className="document-detail-overlay-transcript-scroll">
          <div
            className="document-detail-overlay-transcript-page"
            data-mode={transcriptMode}
          >
            {lines.map((line, index) => (
              <p key={`${index}-${line}`}>
                <span>{index + 1}</span>
                {transcriptMode === "diplomatic" ? line.toLowerCase() : line}
              </p>
            ))}
          </div>
        </div>

        {showMiniScan && (
          <div className="document-detail-overlay-mini-window">
            <span>Scan</span>
            <DocumentDetailScanPage />
          </div>
        )}
      </DocumentDetailTranscriptCanvas>
    </DocumentDetailViewerPane>
  );
}
