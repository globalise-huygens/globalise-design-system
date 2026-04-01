import { DocsSidebar } from "@/components/DocsSidebar";
import { Grid } from "@globalise/design-system";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Grid className="mx-auto max-w-360 py-12 lg:py-16">
      <div className="col-span-12 px-4 sm:px-0 lg:col-start-2 lg:col-span-3">
        <DocsSidebar />
      </div>
      <article className="col-span-12 px-4 sm:px-0 lg:col-start-5 lg:col-span-7 min-w-0">
        {children}
      </article>
    </Grid>
  );
}
