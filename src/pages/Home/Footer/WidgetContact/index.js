import {
  FooterWidgetContactCol,
  WidgetForm,
  SubscribeBtn,
  WidgetAnchor,
} from "../../index";

const WidgetContact = () => {
  const socialIcons = [
    "logo-facebook",
    "logo-instagram",
    "logo-twitter",
    "logo-pinterest",
  ];
  return (
    <FooterWidgetContactCol>
      <h6>Join Our Newsletter Now</h6>
      <p>Get E-mail updates about our latest shop and special offers.</p>
      <WidgetForm>
        <input type="text" placeholder="Enter your email" />
        <SubscribeBtn onClick={(e) => e.preventsDefault()}>
          Subscribe
        </SubscribeBtn>
      </WidgetForm>
      <div>
        {socialIcons.map((item, index) => {
          return (
            <WidgetAnchor key={index} href="#!">
              <ion-icon name={item}></ion-icon>
            </WidgetAnchor>
          );
        })}
      </div>
    </FooterWidgetContactCol>
  );
};

export default WidgetContact;
