import { Button, ObjectCardOverlay } from "@/index";
import * as React from "react";
import { ObjectCardWebappDemo } from "./ObjectCardWebappDemo";

export function ObjectCardWebappOverlayDemo() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onPress={() => setIsOpen(true)}>Open ObjectCard overlay</Button>

      <ObjectCardOverlay
        className="webapp-object-card-overlay--app"
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        isDismissable
        contentClassName="slot-content-band"
      >
        <ObjectCardWebappDemo
          className="webapp-object-card--overlay"
          onClose={() => setIsOpen(false)}
        />
      </ObjectCardOverlay>
    </>
  );
}
