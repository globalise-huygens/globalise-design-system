import { Button, DocumentDetailOverlayViewer } from "@/index";
import * as React from "react";
import { documentDetailDemoContent } from "./documentDetailContent";

export function DocumentDetailShowcase() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onPress={() => setIsOpen(true)}>Open document detail</Button>
      <DocumentDetailOverlayViewer
        content={documentDetailDemoContent}
        isOpen={isOpen}
        onOpenChange={setIsOpen}
      />
    </>
  );
}
