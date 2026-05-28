import { cn } from "@/lib/utils";
import * as React from "react";
import { Separator as AriaSeparator } from "react-aria-components";

export interface ArticleRowProps extends React.HTMLAttributes<HTMLDivElement> {}

const ArticleRow = React.forwardRef<HTMLDivElement, ArticleRowProps>(
  ({ className, children, ...props }, ref) => {
    const items = React.Children.toArray(children);
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-stretch gap-section-gap flex-col lg:flex-row",
          className,
        )}
        {...props}
      >
        {items.map((child, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <AriaSeparator
                orientation="vertical"
                className="hidden lg:block w-0 self-stretch border-0 outline outline-offset-[-0.50px] outline-brand-black/40"
              />
            )}
            <div className="min-w-0 flex-1">{child}</div>
          </React.Fragment>
        ))}
      </div>
    );
  },
);
ArticleRow.displayName = "ArticleRow";

export { ArticleRow };
