import React from "react";

interface ComponentPreviewProps {
  children: React.ReactNode;
  className?: string;
  /** Background variant */
  background?: "dark" | "light" | "dots";
}

export function ComponentPreview({
  children,
  className = "",
  background = "dark",
}: ComponentPreviewProps) {
  const bgClass =
    background === "light"
      ? "bg-brand-white"
      : background === "dots"
        ? "bg-brand-black bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_1px,_transparent_1px)] bg-[size:20px_20px]"
        : "bg-brand-black";

  return (
    <div className="my-6 overflow-hidden border border-brand-white/10">
      <div
        className={`flex min-h-50 items-center justify-center p-8 ${bgClass} ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
