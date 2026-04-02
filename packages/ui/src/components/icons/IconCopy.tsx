import * as React from "react";

const IconCopy = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      ref={ref}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="4.5"
        y="4.5"
        width="8"
        height="8"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M9.5 4.5V2.5C9.5 1.94772 9.05228 1.5 8.5 1.5H2.5C1.94772 1.5 1.5 1.94772 1.5 2.5V8.5C1.5 9.05228 1.94772 9.5 2.5 9.5H4.5"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  ),
);
IconCopy.displayName = "IconCopy";

export { IconCopy };
