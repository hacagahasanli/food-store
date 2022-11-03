import React from "react";
import {
  BannerMain,
  Container,
  BannerRow,
  BannerHalfSide,
  BannerImageContainer,
  BannerImage,
  bannerleft,
  bannerright,
} from "../index";

const Banner = () => {
  return (
    <BannerMain>
      <Container>
        <BannerRow>
          <BannerHalfSide>
            <BannerImageContainer>
              <BannerImage src={bannerleft} alt="summerfruit"></BannerImage>
            </BannerImageContainer>
          </BannerHalfSide>
          <BannerHalfSide>
            <BannerImageContainer>
              <BannerImage src={bannerright} alt="drinksfruits"></BannerImage>
            </BannerImageContainer>
          </BannerHalfSide>
        </BannerRow>
      </Container>
    </BannerMain>
  );
};

export default Banner;
