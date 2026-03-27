import { DocsSidebar } from "@/components/DocsSidebar";
import { Container } from "@globalise/design-system";
import GettingStarted from "./docs/getting-started/page.mdx";

export default function RootPage() {
  return (
    <Container className="py-12 lg:py-16">
      <div className="flex gap-12">
        <DocsSidebar />
        <article className="min-w-0 flex-1 max-w-3xl">
          <GettingStarted />
        </article>
      </div>
    </Container>
  );
}
