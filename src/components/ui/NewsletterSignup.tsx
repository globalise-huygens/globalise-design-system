import { cn } from "@/lib/utils";
import * as React from "react";

export interface NewsletterSignupProps extends Omit<
  React.FormHTMLAttributes<HTMLFormElement>,
  "children"
> {
  /** Image element (e.g. next/image) rendered on the left side */
  image?: React.ReactNode;
  /** Heading text */
  heading: string;
  /** Description paragraph */
  description: string;
  /** Placeholder for email input */
  inputPlaceholder?: string;
  /** Submit button label */
  submitLabel?: string;
  /** Privacy notice (supports JSX for links) */
  privacyText?: React.ReactNode;
  /** Name used for the email field */
  inputName?: string;
  /** Additional props passed to the email input */
  inputProps?: Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "type" | "name" | "placeholder"
  >;
  /** Additional props passed to the submit button */
  submitButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

const NewsletterSignup = React.forwardRef<
  HTMLFormElement,
  NewsletterSignupProps
>(
  (
    {
      className,
      image,
      heading,
      description,
      inputPlaceholder = "Your email",
      submitLabel = "Subscribe",
      privacyText,
      inputName = "email",
      inputProps,
      submitButtonProps,
      ...props
    },
    ref,
  ) => {
    const inputId = React.useId();

    return (
      <form
        ref={ref}
        className={cn("flex flex-col gap-12", className)}
        {...props}
      >
        <div className="max-w-[720px] flex flex-col gap-6">
          <h3 className="scroll-m-20 font-serif font-medium text-4xl leading-10 tracking-[-0.03em] text-black">
            {heading}
          </h3>
          <p className="font-sans text-base font-normal leading-6 tracking-[-0.02em] text-black">
            {description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row overflow-hidden h-auto sm:h-[337px]">
          {image && (
            <div className="relative w-full sm:w-[479px] h-48 sm:h-full shrink-0">
              {image}
            </div>
          )}
          <div className="flex-1 px-8 py-12 sm:px-12 sm:py-16 bg-[var(--brand-turquoise)] flex flex-col gap-16">
            <div className="h-4" />
            <div className="py-3 border-b border-black flex justify-between items-center gap-4">
              <label htmlFor={inputId} className="sr-only">
                Email address
              </label>
              <input
                id={inputId}
                type="email"
                name={inputName}
                placeholder={inputPlaceholder}
                className="min-w-0 flex-1 bg-transparent text-black text-lg font-medium font-sans leading-6 placeholder:text-black/80 focus:outline-none"
                autoComplete="email"
                {...inputProps}
              />
              <button
                type="submit"
                className="shrink-0 text-black text-lg font-semibold font-sans leading-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-turquoise)]"
                {...submitButtonProps}
              >
                {submitLabel}
              </button>
            </div>
            {privacyText && (
              <span className="text-black text-sm font-normal font-sans leading-5">
                {privacyText}
              </span>
            )}
          </div>
        </div>
      </form>
    );
  },
);
NewsletterSignup.displayName = "NewsletterSignup";

export { NewsletterSignup };
