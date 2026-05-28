import { DocsSidebar } from "@/components/DocsSidebar";
import { Grid } from "@globalise/design-system";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Grid className="mx-auto w-full max-w-shell-max px-shell-margin py-12 lg:py-16">
      <div className="slot-left-rail min-w-0">
        <DocsSidebar />
      </div>
      <article className="slot-right-rail min-w-0 md:pl-section-gap">
        {children}
      </article>
    </Grid>
  );
}
