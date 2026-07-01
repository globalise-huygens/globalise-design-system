import {
  IconBrightness,
  IconContrast,
  IconDownload,
  IconInvert,
  IconReset,
  IconRotate,
  IconSaturation,
  IconSearch,
  IconSetting,
  IconTableOfContent,
  IconTranscriptionDiplomatic,
  IconTranscriptionNormalised,
  IconZoomIn,
  IconZoomOut,
} from "@/index";
import { useEffect, useId, useRef, useState } from "react";
import {
  DocumentDetailCanvas,
  DocumentDetailTranscriptCanvas,
} from "../ui/DocumentDetailCanvases";
import {
  DocumentDetailCheckbox,
  DocumentDetailIconButton,
} from "../ui/DocumentDetailControls";
import { DocumentDetailViewerPane } from "../ui/DocumentDetailLayout";
import {
  DocumentDetailFloatingToolbar,
  DocumentDetailPopoverSurface,
} from "../ui/DocumentDetailSurfaces";
import { DocumentDetailScanPage } from "./DocumentDetailScanPage";

export type TranscriptMode = "normalised" | "diplomatic";

function clampZoomValue(value: number) {
  return Math.min(400, Math.max(10, Math.round(value)));
}

function getSliderFillStyle(value: number, min: number, max: number) {
  const percent = ((value - min) / (max - min)) * 100;

  return {
    ["--slider-fill" as string]: `${percent}%`,
  };
}

export function ManuscriptPane({
  isVisible,
  showMiniTranscript,
}: {
  isVisible: boolean;
  showMiniTranscript?: boolean;
}) {
  const [zoomPercent, setZoomPercent] = useState(100);
  const [zoomInput, setZoomInput] = useState("100");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [saturation, setSaturation] = useState(100);
  const [isInverted, setIsInverted] = useState(false);
  const [rotation, setRotation] = useState(0);
  const settingsPanelId = useId();
  const settingsButtonContainerRef = useRef<HTMLDivElement | null>(null);
  const settingsPanelRef = useRef<HTMLDivElement | null>(null);

  const scanFilter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%) invert(${isInverted ? 1 : 0})`;

  const resetScanAdjustments = () => {
    applyZoomValue(100);
    setBrightness(100);
    setContrast(100);
    setSaturation(100);
    setIsInverted(false);
    setRotation(0);
  };

  const updateBrightness = (value: string) => {
    setBrightness(Number(value));
  };

  const updateContrast = (value: string) => {
    setContrast(Number(value));
  };

  const updateSaturation = (value: string) => {
    setSaturation(Number(value));
  };

  const applyZoomValue = (nextValue: number) => {
    const clamped = clampZoomValue(nextValue);

    setZoomPercent(clamped);
    setZoomInput(String(clamped));
  };

  const commitZoomInput = () => {
    const parsed = Number.parseInt(zoomInput, 10);

    if (Number.isNaN(parsed)) {
      setZoomInput(String(zoomPercent));
      return;
    }

    applyZoomValue(parsed);
  };

  useEffect(() => {
    if (!isSettingsOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;

      if (!(target instanceof Node)) {
        return;
      }

      if (
        settingsButtonContainerRef.current?.contains(target) ||
        settingsPanelRef.current?.contains(target)
      ) {
        return;
      }

      setIsSettingsOpen(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }

      setIsSettingsOpen(false);
      const button =
        settingsButtonContainerRef.current?.querySelector("button");

      if (button instanceof HTMLButtonElement) {
        button.focus();
      }
    };

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSettingsOpen]);

  return (
    <DocumentDetailViewerPane hidden={!isVisible}>
      <DocumentDetailCanvas className="document-detail-overlay-manuscript-canvas">
        <DocumentDetailFloatingToolbar className="document-detail-overlay-floating-toolbar">
          <div className="document-detail-overlay-zoom-segmented">
            <DocumentDetailIconButton
              aria-label="Zoom out"
              tooltip="Zoom out"
              icon={<IconZoomOut className="document-detail-overlay-icon" />}
              onPress={() => applyZoomValue(zoomPercent - 10)}
              variant="quiet"
            />
            <label className="document-detail-overlay-zoom-field">
              <input
                aria-label="Scan zoom percentage"
                className="document-detail-overlay-zoom-field-input"
                inputMode="numeric"
                maxLength={3}
                value={zoomInput}
                onChange={(event) => {
                  const nextInput = event.currentTarget.value.replace(
                    /[^\d]/g,
                    "",
                  );
                  setZoomInput(nextInput);
                }}
                onBlur={commitZoomInput}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    commitZoomInput();
                  }
                }}
              />
              <span className="document-detail-overlay-zoom-field-suffix">
                %
              </span>
            </label>
            <DocumentDetailIconButton
              aria-label="Zoom in"
              tooltip="Zoom in"
              icon={<IconZoomIn className="document-detail-overlay-icon" />}
              onPress={() => applyZoomValue(zoomPercent + 10)}
              variant="quiet"
            />
          </div>
          <DocumentDetailIconButton
            aria-label="Reset scan view"
            tooltip="Reset scan view"
            icon={<IconReset className="document-detail-overlay-icon" />}
            onPress={resetScanAdjustments}
            variant="quiet"
          />
          <DocumentDetailIconButton
            aria-label="Rotate scan"
            tooltip="Rotate scan"
            icon={<IconRotate className="document-detail-overlay-icon" />}
            onPress={() => {
              setRotation((currentRotation) => (currentRotation + 90) % 360);
            }}
            variant="quiet"
          />
          <div
            ref={settingsButtonContainerRef}
            className="document-detail-overlay-scan-settings"
          >
            <DocumentDetailIconButton
              aria-label="Scan settings"
              aria-controls={settingsPanelId}
              aria-expanded={isSettingsOpen}
              tooltip="Scan settings"
              icon={<IconSetting className="document-detail-overlay-icon" />}
              isActive={isSettingsOpen}
              onPress={() => setIsSettingsOpen((open) => !open)}
              variant="quiet"
            />
            {isSettingsOpen && (
              <div
                ref={settingsPanelRef}
                id={settingsPanelId}
                className="document-detail-overlay-scan-settings-panel"
              >
                <DocumentDetailPopoverSurface
                  variant="default"
                  className="document-detail-overlay-scan-settings-surface"
                >
                  <div className="document-detail-overlay-scan-settings-controls">
                    <div className="document-detail-overlay-scan-settings-row">
                      <div className="document-detail-overlay-scan-settings-label">
                        <IconBrightness className="document-detail-overlay-icon document-detail-overlay-icon-medium" />
                        <span>Brightness</span>
                      </div>
                      <input
                        aria-label="Brightness"
                        className="document-detail-overlay-scan-settings-slider"
                        type="range"
                        min={50}
                        max={150}
                        step={1}
                        value={brightness}
                        style={getSliderFillStyle(brightness, 50, 150)}
                        onInput={(event) => {
                          updateBrightness(event.currentTarget.value);
                        }}
                        onChange={(event) => {
                          updateBrightness(event.currentTarget.value);
                        }}
                      />
                      <span className="document-detail-overlay-scan-settings-value">
                        {brightness}%
                      </span>
                    </div>
                    <div className="document-detail-overlay-scan-settings-row">
                      <div className="document-detail-overlay-scan-settings-label">
                        <IconContrast className="document-detail-overlay-icon document-detail-overlay-icon-medium" />
                        <span>Contrast</span>
                      </div>
                      <input
                        aria-label="Contrast"
                        className="document-detail-overlay-scan-settings-slider"
                        type="range"
                        min={50}
                        max={150}
                        step={1}
                        value={contrast}
                        style={getSliderFillStyle(contrast, 50, 150)}
                        onInput={(event) => {
                          updateContrast(event.currentTarget.value);
                        }}
                        onChange={(event) => {
                          updateContrast(event.currentTarget.value);
                        }}
                      />
                      <span className="document-detail-overlay-scan-settings-value">
                        {contrast}%
                      </span>
                    </div>
                    <div className="document-detail-overlay-scan-settings-row">
                      <div className="document-detail-overlay-scan-settings-label">
                        <IconSaturation className="document-detail-overlay-icon document-detail-overlay-icon-medium" />
                        <span>Saturation</span>
                      </div>
                      <input
                        aria-label="Saturation"
                        className="document-detail-overlay-scan-settings-slider"
                        type="range"
                        min={0}
                        max={200}
                        step={1}
                        value={saturation}
                        style={getSliderFillStyle(saturation, 0, 200)}
                        onInput={(event) => {
                          updateSaturation(event.currentTarget.value);
                        }}
                        onChange={(event) => {
                          updateSaturation(event.currentTarget.value);
                        }}
                      />
                      <span className="document-detail-overlay-scan-settings-value">
                        {saturation}%
                      </span>
                    </div>
                    <div className="document-detail-overlay-scan-settings-row document-detail-overlay-scan-settings-row--invert">
                      <div className="document-detail-overlay-scan-settings-label">
                        <IconInvert className="document-detail-overlay-icon document-detail-overlay-icon-medium" />
                        <span>Invert</span>
                      </div>
                      <DocumentDetailCheckbox
                        aria-label="Invert scan image"
                        className="document-detail-overlay-scan-settings-checkbox"
                        isSelected={isInverted}
                        onChange={setIsInverted}
                      >
                        Invert scan image
                      </DocumentDetailCheckbox>
                    </div>
                  </div>
                </DocumentDetailPopoverSurface>
              </div>
            )}
          </div>
          <DocumentDetailIconButton
            aria-label="Download scan"
            tooltip="Download scan"
            icon={<IconDownload className="document-detail-overlay-icon" />}
            variant="quiet"
          />
        </DocumentDetailFloatingToolbar>

        <div className="document-detail-overlay-page-frame">
          <div
            className="document-detail-overlay-scan-filter"
            style={{
              filter: scanFilter,
              transform: `rotate(${rotation}deg)`,
            }}
          >
            <DocumentDetailScanPage />
          </div>
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
  const [zoomPercent, setZoomPercent] = useState(100);
  const [zoomInput, setZoomInput] = useState("100");

  const applyZoomValue = (nextValue: number) => {
    const clamped = clampZoomValue(nextValue);

    setZoomPercent(clamped);
    setZoomInput(String(clamped));
  };

  const commitZoomInput = () => {
    const parsed = Number.parseInt(zoomInput, 10);

    if (Number.isNaN(parsed)) {
      setZoomInput(String(zoomPercent));
      return;
    }

    applyZoomValue(parsed);
  };

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
          <div className="document-detail-overlay-zoom-segmented">
            <DocumentDetailIconButton
              aria-label="Zoom out"
              tooltip="Zoom out"
              icon={<IconZoomOut className="document-detail-overlay-icon" />}
              onPress={() => applyZoomValue(zoomPercent - 10)}
              variant="quiet"
            />
            <label className="document-detail-overlay-zoom-field">
              <input
                aria-label="Transcription zoom percentage"
                className="document-detail-overlay-zoom-field-input"
                inputMode="numeric"
                maxLength={3}
                value={zoomInput}
                onChange={(event) => {
                  const nextInput = event.currentTarget.value.replace(
                    /[^\d]/g,
                    "",
                  );
                  setZoomInput(nextInput);
                }}
                onBlur={commitZoomInput}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    commitZoomInput();
                  }
                }}
              />
              <span className="document-detail-overlay-zoom-field-suffix">
                %
              </span>
            </label>
            <DocumentDetailIconButton
              aria-label="Zoom in"
              tooltip="Zoom in"
              icon={<IconZoomIn className="document-detail-overlay-icon" />}
              onPress={() => applyZoomValue(zoomPercent + 10)}
              variant="quiet"
            />
          </div>
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
