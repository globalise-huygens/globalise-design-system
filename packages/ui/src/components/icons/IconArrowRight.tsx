import * as React from "react";

const IconArrowRight = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    fill="currentColor"
    {...props}
  >
    <path d="M226-160l-56-56 454-454H400v-80h320v320h-80v-224L226-160Z" />
  </svg>
));
IconArrowRight.displayName = "IconArrowRight";

export { IconArrowRight };
