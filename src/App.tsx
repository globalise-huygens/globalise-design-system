import {
  Container,
  Grid,
  LogoNavbar,
  Navbar,
  NavLink,
  NavLinks,
  NavSearchBar,
  Section,
  Typography,
} from "@/index";
import { DocumentDetailShowcase } from "./components/document-detail-demo/DocumentDetailShowcase";
import { ObjectCardWebappOverlayDemo } from "./components/object-card-demo/ObjectCardWebappOverlayDemo";

export function App() {
  return (
    <>
      <Navbar logo={<LogoNavbar className="showcase-logo" />}>
        <NavSearchBar placeholder="Search the portal" />
        <NavLinks>
          <NavLink href="/">Home</NavLink>
          <NavLink
            href="https://globalise.huygens.knaw.nl/"
            target="_blank"
            rel="noreferrer"
          >
            Globalise
          </NavLink>
        </NavLinks>
      </Navbar>

      <main className="showcase-main">
        <Section spacing="large">
          <Container>
            <Grid className="showcase-grid">
              <section className="slot-content-band showcase-section">
                <Typography variant="h4" className="showcase-heading">
                  ObjectCardOverlay
                </Typography>

                <div className="showcase-demo">
                  <ObjectCardWebappOverlayDemo />
                </div>
              </section>

              <section className="slot-content-band showcase-section">
                <Typography variant="h4" className="showcase-heading">
                  DocumentDetailOverlay
                </Typography>

                <div className="showcase-demo">
                  <DocumentDetailShowcase />
                </div>
              </section>
            </Grid>
          </Container>
        </Section>
      </main>
    </>
  );
}
