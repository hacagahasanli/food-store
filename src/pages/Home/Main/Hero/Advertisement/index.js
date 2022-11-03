import {
  HeroAdvertisement,
  HeroText,
  HeroTextName,
  HeroTextGuarantee,
  HeroTextInfo,
  ShopButton,
} from "../../../index";
const Advertisement = () => {
  return (
    <HeroAdvertisement>
      <HeroText>
        <HeroTextName>FRUIT Fresh</HeroTextName>
        <HeroTextGuarantee>
          Vegetable
          <br />
          100% Organic
        </HeroTextGuarantee>
        <HeroTextInfo>Free Pickup and Delivery Available</HeroTextInfo>
        <ShopButton as="a">Shop Now</ShopButton>
      </HeroText>
    </HeroAdvertisement>
  );
};

export default Advertisement;
