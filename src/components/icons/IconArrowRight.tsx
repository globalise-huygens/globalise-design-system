import * as React from "react";

const IconArrowRight = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, ref) => (
  <svg
    ref={ref}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.6666 15L10.5 13.7917L13.4583 10.8333H3.33331V9.16667H13.4583L10.5 6.20833L11.6666 5L16.6666 10L11.6666 15Z"
      fill="currentColor"
    />
  </svg>
));
IconArrowRight.displayName = "IconArrowRight";

export { IconArrowRight };
