import * as React from "react";

const IconEast = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      ref={ref}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.25 3.75L10.1925 4.8075L13.6275 8.25H1.5V9.75H13.6275L10.185 13.1925L11.25 14.25L16.5 9L11.25 3.75Z"
        fill="currentColor"
      />
    </svg>
  ),
);
IconEast.displayName = "IconEast";

export { IconEast };
