import { DocsSidebar } from "@/components/DocsSidebar";
import { Container } from "@globalise/design-system";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container className="py-12 lg:py-16">
      <div className="flex gap-12">
        <DocsSidebar />
        <article className="min-w-0 flex-1 max-w-3xl">{children}</article>
      </div>
    </Container>
  );
}
