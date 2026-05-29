import { SVGProps } from "react";

export function IconImage(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      fill="currentColor"
      {...props}
    >
      <path d="M15.75 14.25V3.75c0-.825-.675-1.5-1.5-1.5H3.75c-.825 0-1.5.675-1.5 1.5v10.5c0 .825.675 1.5 1.5 1.5h10.5c.825 0 1.5-.675 1.5-1.5ZM6.375 10.125 8.25 12.3825 10.875 9l3.375 4.5H3.75l2.625-3.375Z" />
    </svg>
  );
}
