"use client";

import {
  DocumentDetailEntityHighlightMenu,
  IconEntities,
  IconEntityPerson,
  IconEntityPlace,
} from "@globalise/design-system";
import * as React from "react";

const categories = [
  {
    id: "persons",
    label: "Person",
    count: 12,
    icon: <IconEntityPerson />,
  },
  {
    id: "places",
    label: "Place",
    count: 8,
    icon: <IconEntityPlace />,
  },
];

export function EntityHighlightMenuPreview() {
  const [selectedKeys, setSelectedKeys] = React.useState<Set<string>>(
    () => new Set(["persons"]),
  );

  return (
    <DocumentDetailEntityHighlightMenu
      categories={categories}
      selectedKeys={selectedKeys}
      onSelectedKeysChange={setSelectedKeys}
      triggerIcon={<IconEntities />}
    />
  );
}
