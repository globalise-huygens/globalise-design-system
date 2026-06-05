import { SVGProps } from "react";

export function IconViewModeGrid(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 12"
      fill="currentColor"
      {...props}
    >
      <path d="M10.5 12H0V0h10.5v12ZM12 3h3V0h-3v3Zm0 9h3V9h-3v3Zm0-4.5h3v-3h-3v3Z" />
    </svg>
  );
}
