import * as React from "react";

const IconMenu = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
);
IconMenu.displayName = "IconMenu";

export { IconMenu };
