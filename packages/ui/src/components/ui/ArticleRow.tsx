import { cn } from "@/lib/utils";
import * as React from "react";

export interface ArticleRowProps extends React.HTMLAttributes<HTMLDivElement> {}

const ArticleRow = React.forwardRef<HTMLDivElement, ArticleRowProps>(
  ({ className, children, ...props }, ref) => {
    const items = React.Children.toArray(children);
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col lg:flex-row gap-6 items-stretch",
          className,
        )}
        {...props}
      >
        {items.map((child, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <hr className="hidden lg:block w-0 self-stretch border-0 outline outline-offset-[-0.50px] outline-black/40" />
            )}
            <div className="flex-1 min-w-0">{child}</div>
          </React.Fragment>
        ))}
      </div>
    );
  },
);
ArticleRow.displayName = "ArticleRow";

export { ArticleRow };
