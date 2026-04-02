import * as React from "react";

const IconExternalLink = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, ref) => (
  <svg
    ref={ref}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.5 10.5L10.5 3.5M10.5 3.5H5.25M10.5 3.5V8.75"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));
IconExternalLink.displayName = "IconExternalLink";

export { IconExternalLink };
