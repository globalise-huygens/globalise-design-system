"use client";

import {
  Button,
  ObjectCard,
  ObjectCardBody,
  ObjectCardHeader,
  ObjectCardOverlay,
  ObjectCardPanel,
  ObjectCardTitle,
} from "@globalise/design-system";
import { useState } from "react";

export function ObjectCardOverlayDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button size="sm" onPress={() => setIsOpen(true)}>
        Open object card
      </Button>
      <ObjectCardOverlay isOpen={isOpen} onOpenChange={setIsOpen}>
        <ObjectCard>
          <ObjectCardHeader onClose={() => setIsOpen(false)}>
            <ObjectCardTitle>Result detail</ObjectCardTitle>
          </ObjectCardHeader>

          <ObjectCardBody>
            <ObjectCardPanel side="left" className="min-h-[42dvh]" />
            <ObjectCardPanel side="right" className="min-h-[42dvh]" />
          </ObjectCardBody>
        </ObjectCard>
      </ObjectCardOverlay>
    </>
  );
}
