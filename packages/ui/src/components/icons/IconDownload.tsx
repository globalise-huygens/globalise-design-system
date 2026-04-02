import * as React from "react";

const IconDownload = React.forwardRef<
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
      d="M7 1.75V9.25M7 9.25L4.25 6.5M7 9.25L9.75 6.5"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.75 9.25V11.25C1.75 11.8023 2.19772 12.25 2.75 12.25H11.25C11.8023 12.25 12.25 11.8023 12.25 11.25V9.25"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));
IconDownload.displayName = "IconDownload";

export { IconDownload };
