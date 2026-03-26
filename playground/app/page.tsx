"use client";

import {
  Button,
  CardArticle,
  CardBase,
  CardFeatured,
  CardGlance,
  CardHero,
  Container,
  Divider,
  Grid,
  IconAdd,
  IconArrowRight,
  IconChevronDown,
  IconClose,
  IconEast,
  IconSearch,
  LogoLockup,
  Logomark,
  LogoNavbar,
  Logotype,
  Navbar,
  NavLink,
  NavLinks,
  NavSearchBar,
  NewsletterSignup,
  Section,
  SectionDivider,
  Typography,
} from "@globalise/design-system";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-(--brand-black)">
      {/* ── Navbar ─────────────────────────────────────── */}
      <Navbar logo={<LogoNavbar className="h-9 w-auto text-white" />}>
        <NavSearchBar placeholder="Search the archive" />
        <NavLinks>
          <NavLink href="#">Archive</NavLink>
          <NavLink href="#">Explore</NavLink>
          <NavLink href="#">About</NavLink>
        </NavLinks>
      </Navbar>

      {/* ── Hero ───────────────────────────────────────── */}
      <section className="flex flex-col items-center gap-12 px-4 pt-24.5 text-center">
        <div className="w-full max-w-138.5 flex flex-col items-center gap-6">
          <Typography variant="h1" className="text-white text-center">
            Discover the VOC archives
          </Typography>
          <Typography variant="lead" className="text-white text-center">
            Built for researchers, educators and curious audiences worldwide.
          </Typography>
        </div>
        <Button variant="link" className="text-white">
          Learn &amp; get started{" "}
          <IconArrowRight className="h-5 w-5" aria-hidden="true" />
        </Button>
      </section>

      {/* ── Hero image card strip (full-bleed) ─────────── */}
      <section className="mt-20 flex justify-center gap-5 overflow-hidden">
        {(
          [
            {
              image: "/images/hero-card-1.png",
              hoverColor: "turquoise" as const,
              label: "Archive",
              title: "Discover the VOC\nship journals",
            },
            {
              image: "/images/hero-card-3.png",
              hoverColor: "vermilion" as const,
              label: "Video",
              title: "Interview with\nMatthias van Rossum",
            },
            {
              image: "/images/hero-card-3.png",
              hoverColor: "parchment" as const,
              label: "Research",
              title: "Mapping colonial\ntrade routes",
            },
            {
              image: "/images/featured-bg.png",
              hoverColor: "mint" as const,
              label: "Collection",
              title: "New collection:\nWomen & Family\nin Colonial Contexts",
            },
            {
              image: "/images/hero-card-5.png",
              hoverColor: "vermilion" as const,
              label: "Guide",
              title: "Lives and labour\nin the VOC world",
            },
            {
              image: "/images/hero-card-6.png",
              hoverColor: "turquoise" as const,
              label: "Exhibition",
              title: "Objects of the\ncolonial archive",
            },
            {
              image: "/images/hero-card-7.png",
              hoverColor: "parchment" as const,
              label: "Article",
              title: "Reclaiming voices\nfrom the archives",
            },
          ] as const
        ).map((card, i) => (
          <CardHero
            key={i}
            hoverColor={card.hoverColor}
            label={card.label}
            title={card.title}
            className="w-52 h-56 shrink-0"
          >
            <Image
              src={card.image}
              alt=""
              fill
              sizes="208px"
              className="object-cover"
            />
          </CardHero>
        ))}
      </section>

      {/* ── Divider ────────────────────────────────────── */}
      <SectionDivider />

      {/* ── Intro ──────────────────────────────────────── */}
      <Container>
        <Grid>
          <div className="col-span-4 sm:col-span-6 lg:col-span-7 flex flex-col gap-10">
            <Typography variant="h4" className="text-white">
              Globalise opens access to early modern colonial archives through
              research-driven digital infrastructure.
            </Typography>
            <Button variant="link" className="self-start text-white">
              About the project{" "}
              <IconArrowRight className="h-5 w-5" aria-hidden="true" />
            </Button>
          </div>
        </Grid>
      </Container>

      {/* ── Featured ───────────────────────────────────── */}
      <Container className="mt-24">
        <div className="flex flex-col gap-5">
          <Typography variant="small" className="text-white">
            Featured
          </Typography>
          <CardFeatured
            className="lg:h-121.75"
            items={[
              {
                color: "var(--brand-mint)",
                label: "Collection",
                title: "New collection:\nWomen & Family\nin Colonial Contexts",
                cta: "Explore the collection",
                darkBackground: true,
                image: (
                  <>
                    <Image
                      src="/images/featured-bg.png"
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </>
                ),
              },
              {
                color: "var(--brand-turquoise)",
                label: "Event",
                title: "Globalise\nConference 2026",
                cta: "Learn more",
              },
              {
                color: "var(--brand-parchment)",
                label: "Resources",
                title: "Reading VOC\ndocuments critically",
                cta: "Start reading",
              },
              {
                color: "var(--brand-vermilion)",
                label: "History",
                title: "Lives and labour\nin the VOC world",
                cta: "Explore",
              },
            ]}
          />
        </div>
      </Container>

      {/* ── Divider ────────────────────────────────────── */}
      <SectionDivider />

      {/* ── Mission ────────────────────────────────────── */}
      <Container>
        <Grid>
          <div className="col-span-4 sm:col-span-8 lg:col-span-10 flex flex-col gap-20">
            {/* First text block */}
            <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-10 gap-5">
              <div className="col-span-4 sm:col-span-6 lg:col-span-7 flex flex-col gap-6">
                <Typography variant="h4" className="text-white">
                  Mission
                </Typography>
                <Typography variant="p" className="text-white">
                  Globalise aims to transform access to early modern Dutch
                  colonial archives by enabling new forms of research, discovery
                  and critical engagement. The platform connects millions of
                  historical documents with contextual data on people, places
                  and events, helping users understand the relationships and
                  structures that shaped the colonial world.
                </Typography>
                <Typography variant="p" className="text-white mt-0!">
                  Built as public research infrastructure, Globalise supports
                  both specialised scholarship and broader societal exploration.
                  Through multilingual access, thematic entry points and
                  transparent archival context, it seeks to make complex
                  historical sources more accessible while preserving their
                  nuance and integrity.
                </Typography>
              </div>
            </div>

            {/* Blockquote - offset right */}
            <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-10 gap-5">
              <div className="col-span-4 sm:col-span-6 sm:col-start-3 lg:col-span-7 lg:col-start-4 flex flex-col gap-10">
                <Typography variant="blockquote" className="text-white">
                  &ldquo;Globalise connects documents, people, and places to
                  make colonial history researchable at scale&rdquo;
                </Typography>
                <Button variant="link" className="self-start text-white">
                  Meet the team{" "}
                  <IconArrowRight className="h-5 w-5" aria-hidden="true" />
                </Button>
              </div>
            </div>

            {/* Second text block */}
            <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-10 gap-5">
              <div className="col-span-4 sm:col-span-6 lg:col-span-7 flex flex-col gap-6">
                <Typography variant="p" className="text-white">
                  Globalise aims to transform access to early modern Dutch
                  colonial archives by enabling new forms of research, discovery
                  and critical engagement. The platform connects millions of
                  historical documents with contextual data on people, places
                  and events, helping users understand the relationships and
                  structures that shaped the colonial world.
                </Typography>
                <Typography variant="p" className="text-white mt-0!">
                  Built as public research infrastructure, Globalise supports
                  both specialised scholarship and broader societal exploration.
                  Through multilingual access, thematic entry points and
                  transparent archival context, it seeks to make complex
                  historical sources more accessible while preserving their
                  nuance and integrity.
                </Typography>
              </div>
            </div>
          </div>
        </Grid>
      </Container>

      {/* ── Divider ────────────────────────────────────── */}
      <SectionDivider />

      {/* ── Globalise at a glance ──────────────────────── */}
      <Container>
        <div className="flex flex-col gap-5">
          <Typography variant="small" className="text-white">
            Globalise at a glance
          </Typography>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 h-auto lg:h-90">
            <CardGlance
              color="parchment"
              heading="2020"
              subtitle="Project initiated"
              description="Globalise was launched as a long-term research initiative to improve access to Dutch colonial archives through digital infrastructure and interdisciplinary collaboration."
              cta="Learn about the project"
            />
            <CardGlance
              color="vermilion"
              heading="Archives"
              subtitle="Core collections"
              description="The platform brings together large-scale archival material from the Dutch East India Company, connecting documents across repositories and research datasets."
              cta="Explore the collections"
            />
            <CardGlance
              color="turquoise"
              heading="Research"
              subtitle="Digital innovation"
              description="Globalise develops tools for enriched metadata, entity linking and thematic exploration, supporting new computational and historical research methods."
              cta="How the platform works"
            />
            <CardGlance
              color="mint"
              heading="Access"
              subtitle="Global audiences"
              description="Designed for scholars, educators and wider publics, the platform supports multilingual discovery and critical engagement with complex colonial histories."
              cta="Start exploring"
            />
          </div>
        </div>
      </Container>

      {/* ── Light section (white bg) ───────────────────── */}
      <Section background="light" spacing="large" className="mt-24">
        {/* Latest from Globalise */}
        <Container>
          <div className="flex flex-col gap-6">
            <Typography variant="h4" className="text-black">
              Latest from Globalise
            </Typography>
            <div className="h-px bg-black/40" />
            <div className="flex flex-col lg:flex-row gap-6">
              {[
                {
                  image: "/images/article-1.png",
                  title:
                    "Thesaurus Treasures: Why We're Creating a Hierarchical Lexicon of Commodities",
                },
                {
                  image: "/images/article-2.png",
                  title:
                    "Looking Back and Ahead: Access and Research in a Changing Archive",
                },
                {
                  image: "/images/article-3.png",
                  title:
                    "Looking back on a successful kickoff meeting: International Institute of Social History",
                },
                {
                  image: "/images/article-1.png",
                  title:
                    "Thesaurus Treasures: Why We're Creating a Hierarchical Lexicon of Commodities",
                },
              ].map((article, i) => (
                <div key={i} className="flex flex-1 gap-6">
                  <CardArticle
                    label="Article"
                    title={article.title}
                    href="#"
                    className="flex-1 text-black"
                    image={
                      <Image
                        src={article.image}
                        alt=""
                        width={264}
                        height={161}
                        className="w-full h-full object-cover"
                      />
                    }
                  />
                  {i < 3 && (
                    <div className="hidden lg:block w-px bg-black/40 self-stretch" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>

        {/* Newsletter */}
        <Container className="mt-16 sm:mt-20 lg:mt-30">
          <NewsletterSignup
            heading="Subscribe to our Newsletter"
            description="Sign up to discover new research pathways, featured collections, and reflections on how historical records continue to shape our understanding of global connections."
            image={
              <Image
                src="/images/newsletter.png"
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            }
            privacyText={
              <>
                By subscribing, you agree to Globalise&rsquo;s{" "}
                <span className="underline">Privacy Policy</span>.
              </>
            }
          />
        </Container>
      </Section>

      {/* ── Component showcase (Button variants) ──────── */}
      <Section>
        <Container>
          <Grid>
            <div className="col-span-4 sm:col-span-8 lg:col-span-12 space-y-12">
              <Typography variant="h4" className="text-white">
                Button component
              </Typography>
              <div className="space-y-6">
                <Typography variant="small" className="text-white">
                  Variants
                </Typography>
                <div className="flex flex-wrap items-center gap-4">
                  <Button>White Pill</Button>
                  <Button variant="outline">Outline Pill</Button>
                  <Button variant="link" className="text-white">
                    Text CTA{" "}
                    <IconArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Button>
                  <Button variant="ghost" className="text-white">
                    Ghost
                  </Button>
                  <Button variant="nav">Nav</Button>
                </div>
              </div>
              <div className="space-y-6">
                <Typography variant="small" className="text-white">
                  Sizes
                </Typography>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon">★</Button>
                </div>
              </div>
            </div>
          </Grid>
        </Container>
      </Section>

      {/* ── Component showcase: CardHero ─────────────── */}
      <Section>
        <Container>
          <div className="space-y-12">
            <Typography variant="h4" className="text-white">
              CardHero component
            </Typography>

            <div className="space-y-6">
              <Typography variant="small" className="text-white">
                Image-to-color hover - shows image by default, reveals a brand
                color panel on hover with label, title &amp; arrow
              </Typography>
              <div className="flex flex-wrap gap-4">
                {(
                  [
                    {
                      hoverColor: "turquoise" as const,
                      label: "Archive",
                      title: "Ship journals\ncollection",
                    },
                    {
                      hoverColor: "vermilion" as const,
                      label: "Video",
                      title: "Interview with\nMatthias van Rossum",
                    },
                    {
                      hoverColor: "mint" as const,
                      label: "Collection",
                      title: "Women & Family\nin Colonial Contexts",
                    },
                    {
                      hoverColor: "parchment" as const,
                      label: "Article",
                      title: "Reading VOC\ndocuments critically",
                    },
                  ] as const
                ).map((card) => (
                  <CardHero
                    key={card.label}
                    hoverColor={card.hoverColor}
                    label={card.label}
                    title={card.title}
                    className="w-52 h-52"
                  >
                    <Image
                      src="/images/hero-card-1.png"
                      alt=""
                      fill
                      sizes="208px"
                      className="object-cover"
                    />
                  </CardHero>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Typography variant="small" className="text-white">
                With href - renders as an anchor link
              </Typography>
              <CardHero
                hoverColor="turquoise"
                label="External link"
                title="Opens a page\non click"
                href="#"
                className="w-52 h-52"
              >
                <Image
                  src="/images/hero-card-3.png"
                  alt=""
                  fill
                  sizes="208px"
                  className="object-cover"
                />
              </CardHero>
            </div>
          </div>
        </Container>
      </Section>

      <Divider />

      {/* ── Component showcase: CardFeatured ────────── */}
      <Section>
        <Container>
          <div className="space-y-12">
            <Typography variant="h4" className="text-white">
              CardFeatured component
            </Typography>

            <div className="space-y-6">
              <Typography variant="small" className="text-white">
                Expandable accordion - click a collapsed strip to expand it
              </Typography>
              <CardFeatured
                className="lg:h-90"
                items={[
                  {
                    color: "var(--brand-turquoise)",
                    label: "Event",
                    title: "Globalise\nConference 2026",
                    cta: "Register now",
                  },
                  {
                    color: "var(--brand-parchment)",
                    label: "Resources",
                    title: "Reading VOC\ndocuments",
                    cta: "Start reading",
                  },
                  {
                    color: "var(--brand-vermilion)",
                    label: "History",
                    title: "Lives and labour\nin the VOC world",
                    cta: "Explore",
                  },
                ]}
              />
            </div>

            <div className="space-y-6">
              <Typography variant="small" className="text-white">
                With image background - first item uses a dark-background image
              </Typography>
              <CardFeatured
                className="lg:h-90"
                defaultExpanded={0}
                items={[
                  {
                    color: "var(--brand-mint)",
                    label: "Collection",
                    title: "New collection:\nWomen & Family",
                    cta: "Explore",
                    darkBackground: true,
                    image: (
                      <Image
                        src="/images/featured-bg.png"
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                      />
                    ),
                  },
                  {
                    color: "var(--brand-mint)",
                    label: "Guide",
                    title: "Getting started\nwith Globalise",
                    cta: "Read the guide",
                  },
                ]}
              />
            </div>
          </div>
        </Container>
      </Section>

      <Divider />

      {/* ── Component showcase: Typography ────────────── */}
      <Section>
        <Container>
          <div className="space-y-12">
            <Typography variant="h4" className="text-white">
              Typography component
            </Typography>

            <div className="space-y-6">
              <Typography variant="small" className="text-white">
                All variants
              </Typography>
              <div className="space-y-8 text-white">
                <div className="space-y-1">
                  <Typography variant="label" className="text-white/60">
                    h1
                  </Typography>
                  <Typography variant="h1">Heading One</Typography>
                </div>
                <div className="space-y-1">
                  <Typography variant="label" className="text-white/60">
                    h2
                  </Typography>
                  <Typography variant="h2">Heading Two</Typography>
                </div>
                <div className="space-y-1">
                  <Typography variant="label" className="text-white/60">
                    h3
                  </Typography>
                  <Typography variant="h3">Heading Three</Typography>
                </div>
                <div className="space-y-1">
                  <Typography variant="label" className="text-white/60">
                    h4
                  </Typography>
                  <Typography variant="h4">Heading Four</Typography>
                </div>

                <Divider />

                <div className="space-y-1">
                  <Typography variant="label" className="text-white/60">
                    p (body)
                  </Typography>
                  <Typography variant="p">
                    Body text: Globalise aims to transform access to early
                    modern Dutch colonial archives by enabling new forms of
                    research, discovery and critical engagement.
                  </Typography>
                </div>
                <div className="space-y-1">
                  <Typography variant="label" className="text-white/60">
                    lead
                  </Typography>
                  <Typography variant="lead">
                    Lead text: Built for researchers, educators and curious
                    audiences worldwide.
                  </Typography>
                </div>
                <div className="space-y-1">
                  <Typography variant="label" className="text-white/60">
                    large
                  </Typography>
                  <Typography variant="large">
                    Large text: Core collections
                  </Typography>
                </div>
                <div className="space-y-1">
                  <Typography variant="label" className="text-white/60">
                    small
                  </Typography>
                  <Typography variant="small">
                    Small text: Entity linking &amp; metadata enrichment
                  </Typography>
                </div>
                <div className="space-y-1">
                  <Typography variant="label" className="text-white/60">
                    muted
                  </Typography>
                  <Typography variant="muted">
                    Muted text: Updated 3 days ago
                  </Typography>
                </div>
                <div className="space-y-1">
                  <Typography variant="label" className="text-white/60">
                    subtitle
                  </Typography>
                  <Typography variant="subtitle">
                    Subtitle text: Globalise Conference 2026
                  </Typography>
                </div>

                <Divider />

                <div className="space-y-1">
                  <Typography variant="label" className="text-white/60">
                    blockquote
                  </Typography>
                  <Typography variant="blockquote">
                    &ldquo;Globalise connects documents, people, and places to
                    make colonial history researchable at scale&rdquo;
                  </Typography>
                </div>
                <div className="space-y-1">
                  <Typography variant="label" className="text-white/60">
                    label
                  </Typography>
                  <Typography variant="label">Label text</Typography>
                </div>
                <div className="space-y-1">
                  <Typography variant="label" className="text-white/60">
                    code
                  </Typography>
                  <Typography variant="code">
                    npm install @globalise/design-system
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Divider />

      {/* ── Component showcase: Divider ───────────────── */}
      <Section>
        <Container>
          <div className="space-y-12">
            <Typography variant="h4" className="text-white">
              Divider component
            </Typography>

            <div className="space-y-6">
              <Typography variant="small" className="text-white">
                In context - separating card groups
              </Typography>
              <div className="flex flex-col gap-5">
                <div className="flex gap-4">
                  <CardBase
                    variant="teal"
                    className="flex-1 h-24 p-4 justify-center"
                  >
                    <Typography variant="subtitle" className="text-black">
                      Section A
                    </Typography>
                  </CardBase>
                  <CardBase
                    variant="emerald"
                    className="flex-1 h-24 p-4 justify-center"
                  >
                    <Typography variant="subtitle" className="text-black">
                      Section B
                    </Typography>
                  </CardBase>
                </div>
                <Divider />
                <div className="flex gap-4">
                  <CardBase
                    variant="stone"
                    className="flex-1 h-24 p-4 justify-center"
                  >
                    <Typography variant="subtitle" className="text-black">
                      Section C
                    </Typography>
                  </CardBase>
                  <CardBase
                    variant="red"
                    className="flex-1 h-24 p-4 justify-center"
                  >
                    <Typography variant="subtitle">Section D</Typography>
                  </CardBase>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Divider />

      {/* ── Component showcase: Icons & Logos ─────────── */}
      <Section>
        <Container>
          <div className="space-y-12">
            <Typography variant="h4" className="text-white">
              Icons &amp; Logos
            </Typography>

            <div className="space-y-6">
              <Typography variant="small" className="text-white">
                Icons - hover to see name
              </Typography>
              <div className="flex flex-wrap items-center gap-6">
                {[
                  { Icon: IconAdd, name: "IconAdd" },
                  { Icon: IconArrowRight, name: "IconArrowRight" },
                  { Icon: IconChevronDown, name: "IconChevronDown" },
                  { Icon: IconClose, name: "IconClose" },
                  { Icon: IconEast, name: "IconEast" },
                  { Icon: IconSearch, name: "IconSearch" },
                ].map(({ Icon, name }) => (
                  <div
                    key={name}
                    className="group flex flex-col items-center gap-2"
                  >
                    <div className="flex h-14 w-14 items-center justify-center bg-(--brand-white)/10 transition-colors group-hover:bg-(--brand-white)/20">
                      <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <Typography
                      variant="label"
                      className="text-white/60 opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      {name}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Typography variant="small" className="text-white">
                Logos
              </Typography>
              <div className="space-y-8">
                <div className="flex items-end gap-10">
                  <div className="flex flex-col items-start gap-2">
                    <Typography variant="label" className="text-white/60">
                      LogoNavbar
                    </Typography>
                    <LogoNavbar className="h-9 w-auto text-white" />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Typography variant="label" className="text-white/60">
                      Logomark
                    </Typography>
                    <Logomark className="h-10 w-auto text-white" />
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <Typography variant="label" className="text-white/60">
                    Logotype
                  </Typography>
                  <Logotype className="h-8 w-auto text-white" />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <Typography variant="label" className="text-white/60">
                    LogoLockup
                  </Typography>
                  <LogoLockup className="h-14 w-auto text-white" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Divider />

      {/* ── Component showcase: Colour Palette ────────── */}
      <Section>
        <Container>
          <div className="space-y-12">
            <Typography variant="h4" className="text-white">
              Colour palette
            </Typography>

            {/* Brand colours */}
            <div className="space-y-6">
              <Typography variant="small" className="text-white">
                Brand colours
              </Typography>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                {[
                  {
                    name: "Archive Black",
                    var: "--brand-black",
                    textClass: "text-white",
                  },
                  {
                    name: "Paper White",
                    var: "--brand-white",
                    textClass: "text-black",
                  },
                  {
                    name: "Parchment",
                    var: "--brand-parchment",
                    textClass: "text-black",
                  },
                  {
                    name: "Vermilion",
                    var: "--brand-vermilion",
                    textClass: "text-white",
                  },
                  {
                    name: "Turquoise",
                    var: "--brand-turquoise",
                    textClass: "text-black",
                  },
                  {
                    name: "Mint",
                    var: "--brand-mint",
                    textClass: "text-black",
                  },
                ].map((c) => (
                  <div
                    key={c.var}
                    className={`flex h-24 flex-col justify-end p-3 ${c.textClass}`}
                    style={{ backgroundColor: `var(${c.var})` }}
                  >
                    <span className="text-xs font-medium">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Scales */}
            {[
              { name: "Neutral", prefix: "neutral" },
              { name: "Parchment", prefix: "parchment" },
              { name: "Vermilion", prefix: "vermilion" },
              { name: "Turquoise", prefix: "turquoise" },
              { name: "Mint", prefix: "mint" },
            ].map((scale) => (
              <div key={scale.prefix} className="space-y-3">
                <Typography variant="small" className="text-white">
                  {scale.name} scale
                </Typography>
                <div className="grid grid-cols-5 sm:grid-cols-10 gap-1">
                  {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(
                    (stop) => (
                      <div
                        key={stop}
                        className={`flex h-16 flex-col justify-end p-1.5 ${
                          stop >= 500 ? "text-white" : "text-black"
                        }`}
                        style={{
                          backgroundColor: `var(--${scale.prefix}-${stop})`,
                        }}
                      >
                        <span className="text-[10px] font-medium">{stop}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
