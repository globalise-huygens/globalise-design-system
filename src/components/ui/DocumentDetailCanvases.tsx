import { cn } from "@/lib/utils";
import * as React from "react";

export interface DocumentDetailCanvasProps extends React.HTMLAttributes<HTMLDivElement> {}

function DocumentDetailCanvas({
  className,
  ...props
}: DocumentDetailCanvasProps) {
  return (
    <div className={cn("gds-document-detail-canvas", className)} {...props} />
  );
}

export interface DocumentDetailTranscriptCanvasProps extends React.HTMLAttributes<HTMLDivElement> {}

function DocumentDetailTranscriptCanvas({
  className,
  ...props
}: DocumentDetailTranscriptCanvasProps) {
  return (
    <div
      className={cn("gds-document-detail-transcript-canvas", className)}
      {...props}
    />
  );
}

export interface DocumentDetailTranscriptLineProps extends React.HTMLAttributes<HTMLDivElement> {
  index: number;
  width?: React.CSSProperties["width"];
}

function DocumentDetailTranscriptLine({
  className,
  index,
  width = "70%",
  ...props
}: DocumentDetailTranscriptLineProps) {
  return (
    <div
      className={cn("gds-document-detail-transcript-line", className)}
      {...props}
    >
      <span className="gds-document-detail-transcript-line__index">
        {index}
      </span>
      <span
        className="gds-document-detail-transcript-line__mark"
        style={{ width }}
      />
    </div>
  );
}

export {
  DocumentDetailCanvas,
  DocumentDetailTranscriptCanvas,
  DocumentDetailTranscriptLine,
};
