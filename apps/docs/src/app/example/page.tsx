import {
  ArticleRow,
  ButtonLink,
  CardArticle,
  CardGlance,
  CardHero,
  Container,
  Divider,
  Grid,
  NewsletterSignup,
  Section,
  Typography,
} from "@globalise/design-system";
import { HomeFeatured } from "@/components/HomeFeatured";

const basePath =
  process.env.NODE_ENV === "production" ? "/globalise-design-system" : "";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <Section background="dark" className="pt-32 pb-0 lg:pt-48 lg:pb-0">
        <Container>
          <div className="flex flex-col gap-10 max-w-181">
            <Typography variant="hero" className="text-white">
              Globalise opens access to early modern colonial archives through
              research-driven digital infrastructure.
            </Typography>
            <ButtonLink variant="link" href="#" className="text-white">
              About the project
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* ── Featured ──────────────────────────────────────────── */}
      <Section background="dark" className="py-12 lg:py-25">
        <Container>
          <div className="flex flex-col gap-5">
            <Typography variant="label" className="text-white">
              Featured
            </Typography>
            <HomeFeatured />
          </div>
        </Container>
      </Section>

      {/* ── Divider ───────────────────────────────────────────── */}
      <div className="bg-brand-black">
        <Container>
          <Divider />
        </Container>
      </div>

      {/* ── Mission ───────────────────────────────────────────── */}
      <Section background="dark" className="py-12 lg:py-25">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-0">
            {/* Left column */}
            <div className="flex flex-col gap-6 lg:max-w-120 lg:shrink-0">
              <Typography variant="p" className="text-white/80">
                Globalise is an international research programme that opens up
                Dutch colonial-era archives for new forms of historical inquiry.
                By combining digital infrastructure with humanities research,
                Globalise makes millions of handwritten pages from the archives
                of the Dutch East India Company (VOC) accessible, searchable,
                and analysable.
              </Typography>
              <Typography variant="p" className="text-white/80">
                The project brings together archival science, digital methods,
                and critical historical scholarship to create a platform that
                serves researchers, educators, and broader public audiences
                around the world.
              </Typography>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-10 lg:pl-60">
              <Typography variant="blockquote" className="text-white">
                Globalise connects documents, people, and places to make
                colonial history researchable at scale.
              </Typography>
              <ButtonLink variant="link" href="#" className="text-white">
                Meet the team
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Divider ───────────────────────────────────────────── */}
      <div className="bg-brand-black">
        <Container>
          <Divider />
        </Container>
      </div>

      {/* ── At a Glance ───────────────────────────────────────── */}
      <Section background="dark" className="py-12 lg:py-25">
        <Container>
          <div className="flex flex-col gap-5 mb-10">
            <Typography variant="label" className="text-white">
              Globalise at a glance
            </Typography>
          </div>
          <Grid>
            <div className="col-span-12 sm:col-span-6 lg:col-span-3">
              <CardGlance
                heading="2020"
                subtitle="Project initiated"
                description="When the Globalise research programme was officially launched, bringing together partners across multiple countries and disciplines."
                cta="Learn about the project"
                color="parchment"
                href="#"
                className="h-full"
              />
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-3">
              <CardGlance
                heading="Archives"
                subtitle="Core collections"
                description="The VOC archives form the heart of the Globalise platform, encompassing hundreds of thousands of pages from the early modern period."
                cta="Explore the collections"
                color="vermilion"
                href="#"
                className="h-full"
              />
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-3">
              <CardGlance
                heading="Research"
                subtitle="Digital innovation"
                description="Handwritten text recognition, named entity recognition, and linked open data power the Globalise platform."
                cta="How the platform works"
                color="turquoise"
                href="#"
                className="h-full"
              />
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-3">
              <CardGlance
                heading="Access"
                subtitle="Global audiences"
                description="Built for researchers, educators, and curious audiences worldwide to explore, analyse, and learn from colonial-era records."
                cta="Start exploring"
                color="mint"
                href="#"
                className="h-full"
              />
            </div>
          </Grid>
        </Container>
      </Section>

      {/* ── Latest from Globalise (white section) ─────────────── */}
      <Section background="light" spacing="large">
        <Container>
          <div className="flex flex-col gap-6">
            <Typography variant="h2" className="text-black">
              Latest from Globalise
            </Typography>
            <Divider color="dark" />
            <ArticleRow>
              <CardArticle
                label="Article"
                title="Thesaurus Treasures: Why We're Creating a Hierarchical Lexicon of Commodities"
                className="text-black"
                image={<div className="w-full h-full bg-parchment-400" />}
              />
              <CardArticle
                label="Article"
                title="Looking Back and Ahead: Access and Research in a Changing Archive"
                className="text-black"
                image={<div className="w-full h-full bg-neutral-300" />}
              />
              <CardArticle
                label="Article"
                title="Looking back on a successful kickoff meeting: International Institute of Social History"
                className="text-black"
                image={<div className="w-full h-full bg-turquoise-200" />}
              />
              <CardArticle
                label="Article"
                title="Thesaurus Treasures: Why We're Creating a Hierarchical Lexicon of Commodities"
                className="text-black"
                image={<div className="w-full h-full bg-parchment-400" />}
              />
            </ArticleRow>
          </div>
        </Container>

        {/* ── Newsletter ────────────────────────────────────── */}
        <Container className="mt-16 lg:mt-30">
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
            image={<div className="w-full h-full bg-parchment-400" />}
          />
        </Container>
      </Section>

      {/* ── Footer CTA ────────────────────────────────────────── */}
      <Section background="dark" spacing="large">
        <div className="flex flex-col items-center gap-12 lg:gap-22 text-center">
          <div className="flex flex-col items-center gap-6 max-w-138.5 px-4">
            <Typography variant="display" className="text-white">
              Discover the VOC archives
            </Typography>
            <Typography variant="lead" className="text-white/80">
              Built for researchers, educators and curious audiences worldwide.
            </Typography>
            <ButtonLink variant="link" href="#" className="text-white">
              Learn &amp; get started
            </ButtonLink>
          </div>

          {/* Card strip */}
          <div className="w-full overflow-x-auto">
            <div className="flex gap-5 px-4 lg:px-15] items-center justify-center">
              <CardHero
                label="Archive"
                title="VOC shipping records"
                hoverColor="parchment"
                className="shrink-0 w-51 h-54.75"
              >
                <div className="w-full h-full bg-parchment-600" />
              </CardHero>
              <CardHero
                label="Video"
                title="Interview with Matthias van Rossum"
                hoverColor="vermilion"
                className="shrink-0 w-51 h-54.75"
              >
                <div className="w-full h-full bg-vermilion-500" />
              </CardHero>
              <CardHero
                label="Research"
                title="Digital infrastructure for colonial archives"
                hoverColor="turquoise"
                className="shrink-0 w-51 h-54.75"
              >
                <div className="w-full h-full bg-turquoise-600" />
              </CardHero>
              <CardHero
                label="Collection"
                title={"New collection:\nWomen & Family\nin Colonial Contexts"}
                hoverColor="mint"
                className="shrink-0 w-51 h-54.75"
              >
                <div className="w-full h-full bg-mint-500" />
              </CardHero>
              <CardHero
                label="Article"
                title="Research methodology notes"
                hoverColor="vermilion"
                className="shrink-0 w-51 h-54.75"
              >
                <div className="w-full h-full bg-neutral-700" />
              </CardHero>
              <CardHero
                label="Archive"
                title="Maritime trade documents"
                hoverColor="parchment"
                className="shrink-0 w-51 h-54.75"
              >
                <div className="w-full h-full bg-parchment-800" />
              </CardHero>
              <CardHero
                label="Collection"
                title="Colonial correspondence"
                hoverColor="turquoise"
                className="shrink-0 w-51 h-54.75"
              >
                <div className="w-full h-full bg-neutral-600" />
              </CardHero>
            </div>
          </div>

          <Container>
            <Divider />
          </Container>
        </div>
      </Section>
    </>
  );
}
