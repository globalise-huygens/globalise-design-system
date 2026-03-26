import type { StoryObj } from "@storybook/react";
import { LogoNavbar } from "../logo/LogoNavbar";
import { Button } from "./Button";
import { CardArticle } from "./CardArticle";
import {
  CardBase,
  CardBaseContent,
  CardBaseDescription,
  CardBaseHeader,
  CardBaseTitle,
} from "./CardBase";
import { CardFeatured } from "./CardFeatured";
import { CardGlance } from "./CardGlance";
import { CardHero } from "./CardHero";
import { Container } from "./Container";
import { Divider } from "./Divider";
import { Grid } from "./Grid";
import { Navbar, NavLink, NavLinks, NavSearchBar } from "./Navbar";
import { NewsletterSignup } from "./NewsletterSignup";
import { Section } from "./Section";
import { Typography } from "./Typography";

export default {
  title: "Overview",
  parameters: { layout: "fullscreen" },
};

// ── All Components ─────────────────────────────────

export const AllComponents: StoryObj = {
  render: () => (
    <div className="min-h-screen bg-brand-black">
      {/* ── Navbar ──────────────────────────────── */}
      <Navbar logo={<LogoNavbar className="h-9 w-auto text-white" />}>
        <NavSearchBar placeholder="Search the archive" />
        <NavLinks>
          <NavLink href="#">Archive</NavLink>
          <NavLink href="#">Explore</NavLink>
          <NavLink href="#">About</NavLink>
        </NavLinks>
      </Navbar>

      {/* ── Hero Cards ─────────────────────────── */}
      <Section background="dark">
        <Container>
          <Typography variant="h2" className="text-white mb-8">
            CardHero
          </Typography>
          <div className="flex gap-5 overflow-x-auto pb-4">
            {[
              {
                hoverColor: "turquoise" as const,
                label: "Archive",
                title: "Ship journals\ncollection",
                image: "/images/hero-card-1.png",
              },
              {
                hoverColor: "vermilion" as const,
                label: "Video",
                title: "Interview with\nMatthias van Rossum",
                image: "/images/hero-card-3.png",
              },
              {
                hoverColor: "parchment" as const,
                label: "Research",
                title: "Mapping colonial\ntrade routes",
                image: "/images/hero-card-5.png",
              },
              {
                hoverColor: "mint" as const,
                label: "Collection",
                title: "Women & Family\nin Colonial Contexts",
                image: "/images/hero-card-6.png",
              },
            ].map((card) => (
              <CardHero
                key={card.label}
                hoverColor={card.hoverColor}
                label={card.label}
                title={card.title}
                className="w-52 h-56 shrink-0"
              >
                <img
                  src={card.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </CardHero>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Featured Cards ─────────────────────── */}
      <Section background="dark">
        <Container>
          <Typography variant="h2" className="text-white mb-8">
            CardFeatured
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
                darkBackground: true,
                image: (
                  <img
                    src="/images/featured-bg.png"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ),
              },
              {
                color: "var(--brand-vermilion)",
                label: "History",
                title: "Lives and labour\nin the VOC world",
                cta: "Explore",
              },
            ]}
          />
        </Container>
      </Section>

      {/* ── Glance Cards ──────────────────────── */}
      <Section background="dark" spacing="large">
        <Container>
          <Typography variant="h2" className="text-white mb-8">
            CardGlance
          </Typography>
        </Container>
        <div className="mx-[calc(100%/12)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <CardGlance
            color="parchment"
            heading="2020"
            subtitle="Project initiated"
            description="Globalise was launched as a long-term research initiative."
            cta="Learn about the project"
          />
          <CardGlance
            color="vermilion"
            heading="Archives"
            subtitle="Core collections"
            description="The platform brings together large-scale archival material."
            cta="Explore the collections"
          />
          <CardGlance
            color="turquoise"
            heading="Research"
            subtitle="Digital innovation"
            description="Globalise develops tools for enriched metadata and entity linking."
            cta="How the platform works"
          />
          <CardGlance
            color="mint"
            heading="Access"
            subtitle="Global audiences"
            description="Designed for scholars, educators and wider publics."
            cta="Start exploring"
          />
        </div>
      </Section>

      {/* ── Article Cards ──────────────────────── */}
      <Section background="light" spacing="large">
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
                  title: "Looking back on a successful kickoff meeting",
                },
                {
                  image: "/images/article-1.png",
                  title: "Thesaurus Treasures: Creating a Hierarchical Lexicon",
                },
              ].map((article, i) => (
                <div key={i} className="flex flex-1 gap-6">
                  <CardArticle
                    label="Article"
                    title={article.title}
                    href="#"
                    className="flex-1 text-black"
                    image={
                      <img
                        src={article.image}
                        alt=""
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
      </Section>

      {/* ── Base Cards ─────────────────────────── */}
      <Section background="dark">
        <Container>
          <Typography variant="h2" className="text-white mb-8">
            CardBase
          </Typography>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {(["default", "teal", "red", "emerald", "stone"] as const).map(
              (variant) => (
                <CardBase key={variant} variant={variant}>
                  <CardBaseHeader>
                    <CardBaseTitle>{variant}</CardBaseTitle>
                    <CardBaseDescription>Variant preview</CardBaseDescription>
                  </CardBaseHeader>
                  <CardBaseContent>
                    <p className="text-sm">Card content</p>
                  </CardBaseContent>
                </CardBase>
              ),
            )}
          </div>
        </Container>
      </Section>

      {/* ── Typography ─────────────────────────── */}
      <Section background="dark">
        <Container>
          <Typography variant="h2" className="text-white mb-8">
            Typography
          </Typography>
          <div className="flex flex-col gap-4 text-white max-w-2xl">
            <Typography variant="h1">Heading 1</Typography>
            <Typography variant="h2">Heading 2</Typography>
            <Typography variant="h3">Heading 3</Typography>
            <Typography variant="h4">Heading 4</Typography>
            <Typography variant="subtitle">Subtitle</Typography>
            <Typography variant="lead">Lead text</Typography>
            <Typography variant="large">Large text</Typography>
            <Typography variant="p">
              Paragraph body text for regular content.
            </Typography>
            <Typography variant="small">Small text</Typography>
            <Typography variant="muted">Muted text</Typography>
            <Typography variant="label">Label text</Typography>
          </div>
        </Container>
      </Section>

      {/* ── Buttons ─────────────────────────────── */}
      <Section background="dark">
        <Container>
          <Typography variant="h2" className="text-white mb-8">
            Buttons
          </Typography>
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="default">Default</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="link">Link</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="nav">Nav</Button>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
          </div>
        </Container>
      </Section>

      {/* ── Layout: Grid ────────────────────────── */}
      <Section background="dark">
        <Typography variant="h2" className="text-white mb-8 px-6">
          Grid (12-column, zero gutter)
        </Typography>
        <Grid>
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className="col-span-1 bg-brand-turquoise/20 p-4 text-center text-white text-xs font-sans border border-white/10"
            >
              {i + 1}
            </div>
          ))}
        </Grid>
      </Section>

      <Divider className="my-12" />

      {/* ── Newsletter ──────────────────────────── */}
      <Section background="light">
        <Container>
          <Typography variant="h2" className="text-black mb-8">
            NewsletterSignup
          </Typography>
          <NewsletterSignup
            heading="Subscribe to our Newsletter"
            description="Sign up to discover new research pathways, featured collections, and reflections on how historical records continue to shape our understanding of global connections."
            image={
              <img
                src="/images/newsletter.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
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
    </div>
  ),
};

// ── Cards Overview ─────────────────────────────────

export const CardsOverview: StoryObj = {
  render: () => (
    <div className="min-h-screen bg-brand-black">
      {/* Hero Cards */}
      <Section background="dark">
        <Container>
          <Typography variant="h3" className="text-white mb-6">
            CardHero — hover to reveal color panel
          </Typography>
          <div className="flex gap-5 overflow-x-auto pb-4">
            {[
              {
                hoverColor: "turquoise" as const,
                label: "Archive",
                title: "Ship journals\ncollection",
                image: "/images/hero-card-1.png",
              },
              {
                hoverColor: "vermilion" as const,
                label: "Video",
                title: "Interview with\nMatthias van Rossum",
                image: "/images/hero-card-3.png",
              },
              {
                hoverColor: "parchment" as const,
                label: "Research",
                title: "Mapping colonial\ntrade routes",
                image: "/images/hero-card-5.png",
              },
              {
                hoverColor: "mint" as const,
                label: "Collection",
                title: "Women & Family\nin Colonial Contexts",
                image: "/images/hero-card-6.png",
              },
              {
                hoverColor: "turquoise" as const,
                label: "Archive",
                title: "Maritime\nlogbooks",
                image: "/images/hero-card-7.png",
              },
            ].map((card, i) => (
              <CardHero
                key={i}
                hoverColor={card.hoverColor}
                label={card.label}
                title={card.title}
                className="w-52 h-56 shrink-0"
              >
                <img
                  src={card.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </CardHero>
            ))}
          </div>
        </Container>
      </Section>

      {/* Featured */}
      <Section background="dark">
        <Container>
          <Typography variant="h3" className="text-white mb-6">
            CardFeatured — expandable accordion
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
                darkBackground: true,
                image: (
                  <img
                    src="/images/featured-bg.png"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ),
              },
              {
                color: "var(--brand-vermilion)",
                label: "History",
                title: "Lives and labour\nin the VOC world",
                cta: "Explore",
              },
            ]}
          />
        </Container>
      </Section>

      {/* Glance */}
      <Section background="dark" spacing="large">
        <Container>
          <Typography variant="h3" className="text-white mb-6">
            CardGlance — stat/info at a glance
          </Typography>
        </Container>
        <div className="mx-[calc(100%/12)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <CardGlance
            color="parchment"
            heading="2020"
            subtitle="Project initiated"
            description="Globalise was launched as a long-term research initiative."
            cta="Learn about the project"
          />
          <CardGlance
            color="vermilion"
            heading="Archives"
            subtitle="Core collections"
            description="The platform brings together large-scale archival material."
            cta="Explore the collections"
          />
          <CardGlance
            color="turquoise"
            heading="Research"
            subtitle="Digital innovation"
            description="Globalise develops tools for enriched metadata and entity linking."
            cta="How the platform works"
          />
          <CardGlance
            color="mint"
            heading="Access"
            subtitle="Global audiences"
            description="Designed for scholars, educators and wider publics."
            cta="Start exploring"
          />
        </div>
      </Section>

      {/* Article */}
      <Section background="light" spacing="large">
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
                  title: "Looking back on a successful kickoff meeting",
                },
                {
                  image: "/images/article-1.png",
                  title: "Thesaurus Treasures: Creating a Hierarchical Lexicon",
                },
              ].map((article, i) => (
                <div key={i} className="flex flex-1 gap-6">
                  <CardArticle
                    label="Article"
                    title={article.title}
                    href="#"
                    className="flex-1 text-black"
                    image={
                      <img
                        src={article.image}
                        alt=""
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
      </Section>

      {/* Base */}
      <Section background="dark">
        <Container>
          <Typography variant="h3" className="text-white mb-6">
            CardBase — composable card primitives
          </Typography>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {(["default", "teal", "red", "emerald", "stone"] as const).map(
              (v) => (
                <CardBase key={v} variant={v}>
                  <CardBaseHeader>
                    <CardBaseTitle>{v}</CardBaseTitle>
                    <CardBaseDescription>Variant</CardBaseDescription>
                  </CardBaseHeader>
                  <CardBaseContent>
                    <p className="text-sm">Content</p>
                  </CardBaseContent>
                </CardBase>
              ),
            )}
          </div>
        </Container>
      </Section>
    </div>
  ),
};
