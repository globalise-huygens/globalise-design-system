"use client";

import { PrinsEugeniusObjectCard } from "@/components/PrinsEugeniusObjectCard";
import { Divider, ObjectCardOverlay } from "@globalise/design-system";
import { useEffect, useState } from "react";
import { Button as AriaButton } from "react-aria-components";

function EntityMention({ onPress }: { onPress: () => void }) {
  return (
    <AriaButton
      onPress={onPress}
      className="inline bg-brand-turquoise px-1 py-1 font-serif text-[0.95em] font-medium italic leading-none text-brand-black transition-colors data-hovered:bg-mint-300 data-focus-visible:outline-none data-focus-visible:ring-2 data-focus-visible:ring-ring data-focus-visible:ring-offset-2 data-focus-visible:ring-offset-brand-black"
    >
      prins Eugenius
    </AriaButton>
  );
}

export function ObjectCardExampleOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const openObjectCard = () => setIsOpen(true);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("object-card-overlay-open-change", {
        detail: { isOpen },
      }),
    );

    return () => {
      window.dispatchEvent(
        new CustomEvent("object-card-overlay-open-change", {
          detail: { isOpen: false },
        }),
      );
    };
  }, [isOpen]);

  return (
    <>
      <div className="flex flex-col gap-s24 pt-s24">
        <Divider />
        <section
          className="flex flex-col gap-s16"
          aria-labelledby="transcription-heading"
        >
          <h2
            id="transcription-heading"
            className="font-serif text-3xl font-medium leading-(--s32) text-brand-white"
          >
            Transcription
          </h2>
          <div className="max-w-4xl py-s4 font-serif text-lg leading-(--s32) text-brand-white/80">
            <p className="whitespace-pre-wrap">
              grove fotassen, bengaals{"\n"}
              met de prins versonden de gevorderde. . . . . . . . . . . . . . .
              . . 20. p:s{"\n"}
              met de <EntityMention onPress={openObjectCard} /> in dees plaats
              versonden. . . . . . . . . . . 2. pack:{"\n"}
              met den dam. -{"\n"}.{"\n"}
              „ de <EntityMention onPress={openObjectCard} /> de andere - - - -
              - - - - - - - - - - - 5. p:en{"\n"}
              die uijtmaken de versogte 15. pack:{"\n"}. - . . . . . . . - - - .
              10. en{"\n"}
              met den dam hier op maar versonden - - - - - - - - - - - - - - - -
              5. „{"\n"}
              op dese met den dam. . . . . . . . . . . . . . . . . . 10. en
              {"\n"}
              „ de
              <EntityMention onPress={openObjectCard} />. . . . . . . . . . . .
              . . . 3.{"\n"}
              gelijk mede op dese maar. . . . . . . . . . . . . . . . 6. „{"\n"}
              met den dam versonden sijn...{"\n"}
              met Jdem versonden het versogte - - . . . . . . . . . . . . 1. „
              {"\n"}
              met d:o van dese. . . - - - - - - - - - - . . . 6. en{"\n"}„ de
              prins de andere-{"\n"}- - - . 4.{"\n"}
              --{"\n"}
              om uijt te maken de gevorderde 10. pack:{"\n"}
              met den dam ook dese. . - - - - . 3. „{"\n"}
              met den dam en de <EntityMention onPress={openObjectCard} />{" "}
              versonden{"\n"}
              om d&apos; andere cust goederen wat te suppleeren{"\n"}
              En &apos;s Comp:s negotie voortestaan{"\n"}
              met den dam versonden{"\n"}„ d&apos; prins Engenius de andere. . .
              . . 5. p=l{"\n"}
              om te voldoen desen Eijsch van 25. „{"\n"}
              -- - - - 20. en{"\n"}
              63. pack:{"\n"}
              sijn ook maar 13. „
            </p>
          </div>
        </section>
      </div>
      <ObjectCardOverlay
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        contentClassName="slot-content-band"
      >
        <PrinsEugeniusObjectCard
          className="max-w-none"
          onClose={() => setIsOpen(false)}
        />
      </ObjectCardOverlay>
    </>
  );
}
