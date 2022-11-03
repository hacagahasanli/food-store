import { SectionHero, Container, HeroRow, AsideNavbar, Hero } from "../index";

const Main = () => {
  return (
    <SectionHero>
      <Container>
        <HeroRow>
          <AsideNavbar />
          <Hero />
        </HeroRow>
      </Container>
    </SectionHero>
  );
};

export default Main;
