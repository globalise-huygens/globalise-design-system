import { GridGuideToggle } from "@/components/GridGuideToggle";
import { HomeFeatured } from "@/components/HomeFeatured";
import { ObjectCardExampleOverlay } from "@/components/ObjectCardExampleOverlay";
import {
  ArticleRow,
  ButtonLink,
  CardArticle,
  CardGlance,
  CardHero,
  Divider,
  Grid,
  NewsletterSignup,
  Section,
  Typography,
} from "@globalise/design-system";

const basePath =
  process.env.NODE_ENV === "production" ? "/globalise-design-system" : "";

export default function HomePage() {
  return (
    <>
      <GridGuideToggle />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <Section background="dark" spacing="large" data-rhythm-block="hero">
        <Grid className="mx-auto w-full max-w-shell-max px-shell-margin">
          <div className="slot-content-band slot-mobile-pad">
            <div className="mx-auto flex max-w-card-max flex-col items-center gap-6 text-center">
              <Typography variant="display" className="text-brand-white">
                Discover the VOC archives
              </Typography>
              <Typography variant="lead" className="text-brand-white/80">
                Built for researchers, educators and curious audiences
                worldwide.
              </Typography>
              <ButtonLink variant="link" href="#" className="text-brand-white">
                Learn &amp; get started
              </ButtonLink>
            </div>
          </div>
        </Grid>

        {/* Card strip — full shell width, no scrolling */}
        <Grid className="mx-auto mt-s48 w-full max-w-shell-max px-shell-margin lg:mt-22">
          <div className="slot-full-bleed">
            <div className="grid grid-cols-2 gap-shell-gutter sm:grid-cols-3 xl:grid-cols-7">
              <CardHero
                label="Archive"
                title="VOC shipping records"
                hoverColor="parchment"
                className="aspect-square w-full"
              >
                <div className="h-full w-full bg-parchment-600" />
              </CardHero>
              <CardHero
                label="Video"
                title="Interview with Matthias van Rossum"
                hoverColor="vermilion"
                className="aspect-square w-full"
              >
                <div className="h-full w-full bg-vermilion-500" />
              </CardHero>
              <CardHero
                label="Research"
                title="Digital infrastructure for colonial archives"
                hoverColor="turquoise"
                className="aspect-square w-full"
              >
                <div className="h-full w-full bg-turquoise-600" />
              </CardHero>
              <CardHero
                label="Collection"
                title={"New collection:\nWomen & Family\nin Colonial Contexts"}
                hoverColor="mint"
                className="aspect-square w-full"
              >
                <div className="h-full w-full bg-mint-500" />
              </CardHero>
              <CardHero
                label="Article"
                title="Research methodology notes"
                hoverColor="vermilion"
                className="aspect-square w-full"
              >
                <div className="h-full w-full bg-neutral-700" />
              </CardHero>
              <CardHero
                label="Archive"
                title="Maritime trade documents"
                hoverColor="parchment"
                className="aspect-square w-full"
              >
                <div className="h-full w-full bg-parchment-800" />
              </CardHero>
              <CardHero
                label="Collection"
                title="Colonial correspondence"
                hoverColor="turquoise"
                className="aspect-square w-full"
              >
                <div className="h-full w-full bg-neutral-600" />
              </CardHero>
            </div>
          </div>
        </Grid>

        <Grid className="mx-auto mt-12 w-full max-w-shell-max px-shell-margin">
          <div className="slot-content-band slot-mobile-pad">
            <Divider />
          </div>
        </Grid>
      </Section>

      <Section
        background="dark"
        className="pb-0 pt-32 lg:pb-0 lg:pt-48"
        data-rhythm-block="project-intro"
      >
        <Grid className="mx-auto w-full max-w-shell-max px-shell-margin">
          <div className="slot-content-narrow slot-mobile-pad">
            <div className="flex flex-col gap-10">
              <Typography variant="hero" className="text-brand-white">
                Globalise opens access to early modern colonial archives through
                research-driven digital infrastructure.
              </Typography>
              <ButtonLink variant="link" href="#" className="text-brand-white">
                About the project
              </ButtonLink>
            </div>
          </div>
        </Grid>
      </Section>

      {/* ── Featured ──────────────────────────────────────────── */}
      <Section
        background="dark"
        className="py-12 lg:py-24"
        data-rhythm-block="featured"
      >
        <Grid className="mx-auto w-full max-w-shell-max px-shell-margin">
          <div className="slot-content-band slot-mobile-pad">
            <div className="flex flex-col gap-6">
              <Typography variant="label" className="text-brand-white">
                Featured
              </Typography>
              <HomeFeatured />
              <ObjectCardExampleOverlay />
            </div>
          </div>
        </Grid>
      </Section>

      {/* ── Divider ───────────────────────────────────────────── */}
      <div className="bg-brand-black" data-rhythm-block="divider-1">
        <Grid className="mx-auto w-full max-w-shell-max px-shell-margin">
          <div className="slot-content-band slot-mobile-pad">
            <Divider />
          </div>
        </Grid>
      </div>

      {/* ── Mission ───────────────────────────────────────────── */}
      <Section
        background="dark"
        className="py-12 lg:py-24"
        data-rhythm-block="mission"
      >
        <Grid className="mx-auto w-full max-w-shell-max px-shell-margin">
          {/* Left column: cols 2–6 on desktop, full width on mobile */}
          <div className="slot-content-left slot-mobile-pad">
            <div className="flex flex-col gap-6">
              <Typography variant="p" className="text-brand-white/80">
                Globalise is an international research programme that opens up
                Dutch colonial-era archives for new forms of historical inquiry.
                By combining digital infrastructure with humanities research,
                Globalise makes millions of handwritten pages from the archives
                of the Dutch East India Company (VOC) accessible, searchable,
                and analysable.
              </Typography>
              <Typography variant="p" className="text-brand-white/80">
                The project brings together archival science, digital methods,
                and critical historical scholarship to create a platform that
                serves researchers, educators, and broader public audiences
                around the world.
              </Typography>
            </div>
          </div>

          {/* Right column: cols 8–11 on desktop, full width on mobile */}
          <div className="slot-content-right slot-mobile-pad">
            <div className="flex flex-col gap-10">
              <Typography variant="blockquote" className="text-brand-white">
                Globalise connects documents, people, and places to make
                colonial history researchable at scale.
              </Typography>
              <ButtonLink variant="link" href="#" className="text-brand-white">
                Meet the team
              </ButtonLink>
            </div>
          </div>
        </Grid>
      </Section>

      {/* ── Divider ───────────────────────────────────────────── */}
      <div className="bg-brand-black" data-rhythm-block="divider-2">
        <Grid className="mx-auto w-full max-w-shell-max px-shell-margin">
          <div className="slot-content-band slot-mobile-pad">
            <Divider />
          </div>
        </Grid>
      </div>

      {/* ── At a Glance ───────────────────────────────────────── */}
      <Section
        background="dark"
        className="py-12 lg:py-24"
        data-rhythm-block="at-a-glance"
      >
        <Grid className="mx-auto w-full max-w-shell-max px-shell-margin">
          <div className="slot-content-band slot-mobile-pad">
            <div className="mb-10 flex flex-col gap-6">
              <Typography variant="label" className="text-brand-white">
                Globalise at a glance
              </Typography>
            </div>
            {/* Sub-grid: 1 col mobile → 2 cols tablet → 4 cols desktop */}
            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:min-h-96">
              <CardGlance
                heading="2020"
                subtitle="Project initiated"
                description="When the Globalise research programme was officially launched, bringing together partners across multiple countries and disciplines."
                cta="Learn about the project"
                color="parchment"
                href="#"
              />
              <CardGlance
                heading="Archives"
                subtitle="Core collections"
                description="The VOC archives form the heart of the Globalise platform, encompassing hundreds of thousands of pages from the early modern period."
                cta="Explore the collections"
                color="vermilion"
                href="#"
              />
              <CardGlance
                heading="Research"
                subtitle="Digital innovation"
                description="Handwritten text recognition, named entity recognition, and linked open data power the Globalise platform."
                cta="How the platform works"
                color="turquoise"
                href="#"
              />
              <CardGlance
                heading="Access"
                subtitle="Global audiences"
                description="Built for researchers, educators, and curious audiences worldwide to explore, analyse, and learn from colonial-era records."
                cta="Start exploring"
                color="mint"
                href="#"
              />
            </div>
          </div>
        </Grid>
      </Section>

      {/* ── Latest from Globalise (white section) ─────────────── */}
      <Section
        background="light"
        spacing="large"
        data-rhythm-block="latest-newsletter"
      >
        <Grid className="mx-auto w-full max-w-shell-max px-shell-margin">
          <div className="slot-content-band slot-mobile-pad">
            <div className="flex flex-col gap-6">
              <Typography variant="h2" className="text-brand-black">
                Latest from Globalise
              </Typography>
              <Divider color="dark" />
              <ArticleRow>
                <CardArticle
                  label="Article"
                  title="Thesaurus Treasures: Why We're Creating a Hierarchical Lexicon of Commodities"
                  className="text-brand-black"
                  image={<div className="h-full w-full bg-parchment-400" />}
                />
                <CardArticle
                  label="Article"
                  title="Looking Back and Ahead: Access and Research in a Changing Archive"
                  className="text-brand-black"
                  image={<div className="h-full w-full bg-neutral-300" />}
                />
                <CardArticle
                  label="Article"
                  title="Looking back on a successful kickoff meeting: International Institute of Social History"
                  className="text-brand-black"
                  image={<div className="h-full w-full bg-turquoise-200" />}
                />
                <CardArticle
                  label="Article"
                  title="Thesaurus Treasures: Why We're Creating a Hierarchical Lexicon of Commodities"
                  className="text-brand-black"
                  image={<div className="h-full w-full bg-parchment-400" />}
                />
              </ArticleRow>
            </div>
          </div>
        </Grid>

        {/* ── Newsletter ────────────────────────────────────── */}
        <Grid className="mx-auto mt-16 w-full max-w-shell-max px-shell-margin lg:mt-30">
          <div className="slot-content-band slot-mobile-pad">
            <NewsletterSignup
              heading="Subscribe to our Newsletter"
              description="Sign up to discover new research pathways, featured collections, and reflections on how historical records continue to shape our understanding of global connections."
              inputPlaceholder="Your email"
              submitLabel="Subscribe"
              privacyText={
                <>
                  By subscribing, you agree to Globalise&apos;s{" "}
                  <a href="#" className="underline">
                    Privacy Policy
                  </a>
                  .
                </>
              }
              image={<div className="h-full w-full bg-parchment-400" />}
            />
          </div>
        </Grid>
      </Section>
    </>
  );
}
