import {
  FooterSection,
  Container,
  RowHelper,
  AboutFooter,
  WidgetFooter,
  WidgetContact,
  BottomFooterCol,
  FooterCopyRight,
  CopyRightText,
  payments,
  FooterPayment,
} from "../index";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterSection>
      <Container>
        <RowHelper>
          <AboutFooter />
          <WidgetFooter />
          <WidgetContact />
        </RowHelper>
        <RowHelper>
          <BottomFooterCol>
            <FooterCopyRight>
              <CopyRightText>
                <p>
                  Copyright © {year} All rights reserved | This template is made
                  with <ion-icon name="heart"></ion-icon>
                </p>
              </CopyRightText>
              <FooterPayment>
                <img src={payments} alt="payments" />
              </FooterPayment>
            </FooterCopyRight>
          </BottomFooterCol>
        </RowHelper>
      </Container>
    </FooterSection>
  );
};

export default Footer;
