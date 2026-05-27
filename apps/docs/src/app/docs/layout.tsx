import { DocsSidebar } from "@/components/DocsSidebar";
import { Grid } from "@globalise/design-system";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Grid className="mx-auto w-full max-w-layout-page-max-width px-layout-page-margin-mobile py-12 lg:px-layout-page-margin lg:py-16">
      <div className="col-span-16 min-w-0 lg:col-span-4">
        <DocsSidebar />
      </div>
      <article className="col-span-16 min-w-0 lg:col-span-12 lg:pl-layout-section-gap">
        {children}
      </article>
    </Grid>
  );
}
