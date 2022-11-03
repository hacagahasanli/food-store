import {
  FooterAboutCol,
  FooterAboutLogo,
  AboutLists,
  FooterAbout,
  AboutList,
  transplogo,
} from "../../index";

const AboutFooter = () => {
  return (
    <FooterAboutCol>
      <FooterAbout>
        <FooterAboutLogo>
          <a href="#!">
            <img src={transplogo} alt="logo" />
          </a>
        </FooterAboutLogo>
        <AboutLists>
          <AboutList>Address: 60-49 Road 11378 New York</AboutList>
          <AboutList>Phone: +65 11.188.888</AboutList>
          <AboutList>Email: hello@colorlib.com</AboutList>
        </AboutLists>
      </FooterAbout>
    </FooterAboutCol>
  );
};

export default AboutFooter;
