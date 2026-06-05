import { cn } from "@/lib/utils";
import * as React from "react";
import {
  Button as AriaButton,
  Form as AriaForm,
  type FormProps as AriaFormProps,
  Input as AriaInput,
  Label as AriaLabel,
  TextField as AriaTextField,
} from "react-aria-components";

export interface NewsletterSignupProps extends Omit<
  AriaFormProps,
  "children" | "className" | "style"
> {
  className?: string;
  /** Image element rendered on the left side */
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
      ...props
    },
    ref,
  ) => {
    return (
      <AriaForm
        ref={ref}
        className={cn("flex flex-col gap-s48", className)}
        {...props}
      >
        <div className="grid grid-cols-1 gap-s24 md:grid-cols-12">
          <div className="flex flex-col gap-s24 md:col-span-8 lg:col-span-7">
            <h3 className="scroll-m-20 font-serif font-medium text-4xl leading-10 tracking-[-0.03em] text-brand-black">
              {heading}
            </h3>
            <p className="font-sans text-base font-normal leading-6 tracking-[-0.02em] text-brand-black">
              {description}
            </p>
          </div>
        </div>

        <div className="grid h-auto grid-cols-1 overflow-hidden md:grid-cols-12 md:min-h-[336px]">
          {image && (
            <div className="relative h-48 w-full shrink-0 md:col-span-6 md:h-full">
              {image}
            </div>
          )}
          <div
            className={cn(
              "bg-brand-turquoise px-s32 py-s48 sm:px-s48 sm:py-s64",
              "grid grid-cols-12 gap-y-s32",
              image ? "md:col-span-6" : "md:col-span-12",
            )}
          >
            <AriaTextField
              name={inputName}
              type="email"
              isRequired
              autoComplete="email"
              className="col-span-12 grid grid-cols-12 items-end gap-s16 border-b border-brand-black pb-s12"
            >
              <AriaLabel className="sr-only">Email address</AriaLabel>
              <AriaInput
                placeholder={inputPlaceholder}
                className="col-span-8 min-w-0 bg-transparent text-brand-black text-lg font-medium font-sans leading-6 placeholder:text-brand-black/80 focus:outline-none"
              />
              <AriaButton
                type="submit"
                className="col-span-4 justify-self-end text-brand-black text-lg font-semibold font-sans leading-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-brand-turquoise"
              >
                {submitLabel}
              </AriaButton>
            </AriaTextField>
            {privacyText && (
              <span className="col-span-12 text-brand-black text-sm font-normal font-sans leading-5 md:col-span-10">
                {privacyText}
              </span>
            )}
          </div>
        </div>
      </AriaForm>
    );
  },
);
NewsletterSignup.displayName = "NewsletterSignup";

export { NewsletterSignup };
