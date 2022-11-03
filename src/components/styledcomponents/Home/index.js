import styled, { keyframes, css } from "styled-components";
import heroImg from "../../../assets/images/banner.jpg.png";

import { createGlobalStyle } from "styled-components";

/* 
  GLOBAL STYLE
*/

export const GlobalStyle = createGlobalStyle`
    table, th, td {
  border-collapse: collapse;
  text-align: center;
}
  html {

   scroll-behavior: smooth;
   -webkit-user-select: none;  /* Chrome all / Safari all */
    -moz-user-select: none;     /* Firefox all */
    -ms-user-select: none;      /* IE 10+ */
    -o-user-select: none;
    ::-webkit-scrollbar {
    -webkit-appearance: none;
      width: 0px;
      }
    user-select: none;
    overflow-x: hidden;
   font-family: "Cairo", sans-serif;
   overflow-y:${(props) => {
     const { showCart, showWishList } = props;
     if (showCart === true || showWishList === true) {
       return "hidden";
     }
     return "auto";
   }}
  }
`;

/* APP STYLES START*/

export const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  z-index: 1;
`;

/* APP STYLES END*/

/* CARD STYLES START*/

export const StyledCard = styled.div`
  margin: 0 auto;
  border: 1px solid black;
  background: black;
  position: absolute;
  opacity: 0.65;
  height: 100vh;
  width: 100%;
  z-index: 2;
  display: ${({ showCart }) => (showCart === true ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

/* CARD STYLES END*/

const FlexHelper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

/* CONTAINER MEDIA QUERY START */

/* CONTAINER MEDIA QUERY END */

/* HEADER STYLES START*/

/* TOP HEADER STYLES START */

export const HeaderTag = styled.header`
  height: auto;
  width: 100%;
`;

export const HeaderTopMain = styled.div`
  height: auto;
  width: 100%;
  background: #f5f5f5;
`;

export const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftSideMain = styled.div`
  width: max-content;
  padding-left: 0.2rem;
`;

export const LeftSideInner = styled.div`
  width: 100%;
`;

export const LeftSideUL = styled.ul`
  display: flex;
  gap: 3rem;
  padding: 0;
`;

export const LeftSideList = styled.li`
  position: relative;
  list-style-type: none;
  color: #1c1c1c;
  font-size: 14px;
  display: flex;
`;

export const RightSideMain = styled.div`
  width: max-content;
`;

export const RightSideInner = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;
`;

export const RightSideSocial = styled.div`
  position: relative;
  display: flex;
  margin-right: 35px;
  gap: 1.3rem;

  &:after {
    content: "";
    position: absolute;
    right: -20px;
    top: 5px;
    height: 20px;
    width: 1px;
    background: #000000;
    opacity: 0.1;
  }
`;

export const SocialIcon = styled.a`
  text-decoration: none;
  color: #1c1c1c;
  padding-top: 0.35rem;
`;

export const LanguageLists = styled.ul`
  position: absolute;
  top: 1.7em;
  width: 63px;
  padding-top: 5px;
  text-align: left;
  z-index: 10;
  opacity: 0;
  height: 3.2em;
  background-color: #222222;
  transition: all 0.3s;
  visibility: hidden;
`;

export const LanguageListElement = styled.li`
  list-style-type: none;
  font-size: 14px;
  color: white;
`;

export const LanguageListAnchor = styled.a`
  text-decoration: none;
  color: white;
  text-align: left;
  position: relative;
  left: -2rem;
`;

export const RightSideLanguage = styled.div`
  position: relative;
  left: -0.5rem;
  display: flex;
  gap: 0.6rem;
  align-items: center;
  cursor: pointer;

  &:hover ${LanguageLists} {
    visibility: visible;
    top: 0.7em;
    opacity: 1;
  }
`;

export const LanguageWord = styled.div`
  font-size: 14px;
  color: #1c1c1c;
`;

export const ArrowDown = styled.span`
  position: relative;
  bottom: 0.2rem;
  font-weight: 600;
`;

export const LanguageFlag = styled.img`
  width: 1.7rem;
  height: 0.8rem;
  padding-top: 0.1rem;
`;

export const RightSideAuth = styled.div`
  display: block;
`;

export const LoginAnchor = styled.a`
  position: relative;
  width: auto;
  top: 0.2em;
  font-weight: 500;
  text-decoration: none;
  display: block;
  font-size: 14px;
  color: #1c1c1c;
`;

/* TOP HEADER STYLES END */

/* CONTAINER HEADER STYLES START */

export const HeaderContainerMain = styled(Container)`
  margin-top: -1rem;
`;

const SideHelper = styled.div`
  max-width: 25%;
  flex: 0 0 25%;
`;

export const LogoLeftSide = styled(SideHelper)`
  height: 100%;
  padding: 0 0.2rem;
`;

export const LogoContainer = styled.div`
  padding: 15px 0;
`;

export const LogoAnchor = styled.a`
  display: inline-block;
`;

export const LogoImg = styled.img`
  max-width: 100%;
  width: 175px;
`;

export const MenuMiddleSide = styled.div`
  max-width: 50%;
  flex: 0 0 50%;
`;

export const MiddleSideNav = styled.nav`
  width: 100%;
  padding: 24px 0;
`;

export const Menu = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
`;

export const PagesList = styled(LanguageLists)`
  position: absolute;
  left: 0;
  top: 50px;
  background: #222222;
  width: 180px;
  height: max-content;
  z-index: 9;
  padding: 5px 0;
  -webkit-transition: all, 0.3s;
  -moz-transition: all, 0.3s;
  -ms-transition: all, 0.3s;
  -o-transition: all, 0.3s;
  transition: all, 0.3s;
  opacity: 0;
  visibility: hidden;
`;

export const PagesListElement = styled(LanguageListElement)`
  font-family: "Cairo", sans-serif;
  margin-bottom: 8px;
  margin-top: 4px;
  display: block;
`;

export const PagesListAnchor = styled.a`
  text-transform: capitalize;
  text-decoration: none;
  color: #ffffff !important;
  font-weight: 400;
  padding: 3px 15px !important;

  &:hover {
    color: #7fad39 !important;
  }
`;

export const MenuList = styled.li`
  list-style-type: none;
  display: inline-block;
  margin-right: 50px;
  position: relative;
  cursor: pointer;

  &:hover ${PagesList} {
    visibility: visible;
    top: 1.7em;
    opacity: 1;
    color: #7fad39;
  }

  & a {
    text-decoration: none;
    font-size: 14px;
    color: #252525;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 1px;
    -webkit-transition: all, 0.3s;
    -moz-transition: all, 0.3s;
    -ms-transition: all, 0.3s;
    -o-transition: all, 0.3s;
    transition: all, 0.3s;
    padding: 5px 0;
    display: block;
    &:hover {
      color: #7fad39;
    }
  }
`;

export const MenuListItem = styled.a``;

export const Cart = styled(SideHelper)`
  position: relative;
  right: 0.4rem;
  width: 100%;
`;

export const CartInner = styled.div`
  float: right;
  padding: 24px 0;
  display: flex;
  gap: 1rem;
`;

export const CartLists = styled.ul`
  display: flex;
  margin-right: 20px;
  position: relative;
  top: 1.1rem;
  left: 0.3rem;
`;

export const CartList = styled.li`
  width: 50px;
  height: 60px;
  position: relative;
  top: -1rem;
  list-style: none;
  display: inline-block;
  margin-right: 5px;
`;

export const CartListItem = styled.a`
  display: block;
  width: 100%;
  min-height: 100%;
  text-decoration: none;
  padding-right: 0.5rem;
  padding-top: 0.5rem;
  position: relative;
  top: 0.4rem;
  cursor: context-menu;

  & ion-icon {
    font-size: 22px;
    color: #1c1c1c;
    cursor: pointer;
  }
`;
export const CartQuantity = styled.span`
  position: absolute;
  display: block;
  text-align: center;
  background-color: #7fad39;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-size: 10px;
  bottom: 3rem;
  left: 1.3rem;
  line-height: 13px;
  font-weight: 700;
  align-items: center;

  & p {
    position: relative;
    bottom: 0.4rem;
    color: white;
    text-decoration: none;
  }
`;
export const CartPrice = styled.div`
  padding-top: 15px;
  height: max-content;
  max-width: 170px;
  position: relative;
  top: 1.17rem;

  & span {
    color: #252525;
    font-weight: 700;
  }
`;

/* CONTAINER HEADER STYLES END */

/* HEADER STYLES END*/

/* SECTION HERO STYLES START */

/* SECTION ASIDE NAVBAR STYLES START */

export const SectionHero = styled.div`
  display: block;
  padding-bottom: 50px;
`;

export const RowHelper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

export const HeroRow = styled(RowHelper)`
  margin-top: -16px;
`;

const PaddingHelper = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
`;

export const Aside = styled(PaddingHelper)`
  flex: 0 0 22.2%;
  max-width: 25%;
`;

export const AsideCategories = styled.div`
  background: #7fad39;
  position: relative;
  padding: 14px 25px 4px 28px;
  align-items: center;
  cursor: pointer;

  & ion-icon {
    text-align: center;
    font-size: 26px;
    color: #ffffff;
    margin-right: 10px;
  }

  & span {
    color: #ffffff;
    position: relative;
    left: 1rem;
  }
`;

export const AllDepartments = styled.div`
  display: inline;
  font-size: 18px;
  font-weight: 700;
  position: relative;
  top: -0.4rem;
  color: #ffffff;
`;

export const DepartmentsList = styled.ul`
  margin-top: 0;
  border: 1px solid #ebebeb;
  padding-left: 30px;
  padding-top: 10px;
  height: auto;
  opacity: ${(props) => (props.toggle ? "1" : "0")};
  padding-bottom: 22px;
  display: flex;
  transition: all, 1s;
  flex-direction: column;
`;

export const DepartmentList = styled.li`
  list-style: none;
`;
export const DepartmentItem = styled.a`
  text-decoration: none;
  font-weight: 400;
  line-height: 2.5;
  color: #212529;
  text-align: left;
  font-family: "Cairo", sans-serif;
`;

/* SECTION ASIDE NAVBAR STYLES END */

/* SECTION HERO DIV STYLES START */

export const HeroContainer = styled.div`
  flex: 0 0 75%;
  max-width: 75%;
`;

export const HeroSearch = styled.div`
  overflow: hidden;
  margin-bottom: 30px;
`;

export const HeroSearchFormContainer = styled.div`
  width: 620px;
  height: 50px;
  border: 1px solid #ebebeb;
  position: relative;
  left: 1rem;
  float: left;
`;

export const HeroSearchForm = styled.form``;

export const HeroSearchCategories = styled.div`
  width: 30%;
  float: left;
  font-size: 16px;
  color: #1c1c1c;
  font-weight: 700;
  padding-left: 18px;
  padding-top: 13px;
  position: relative;

  &:after {
    position: absolute;
    right: 0;
    top: 14px;
    height: 20px;
    width: 1px;
    background: #000000;
    opacity: 0.1;
    content: "";
  }

  & ion-icon {
    position: absolute;
    right: 14px;
    top: 16.2px;
  }
`;

export const HeroInput = styled.input`
  color: #b2b2b2;
  width: 63.3%;
  border: none;
  height: 48px;
  font-size: 16px;
  color: #b2b2b2;
  padding-left: 20px;

  &:placeholder {
    color: #b2b2b2;
  }
`;

export const ButtonDefault = styled.button`
  font-size: 14px;
  color: #ffffff;
  font-weight: 800;
  text-transform: uppercase;
  display: inline-block;
  background: #7fad39;
`;

export const HeroFormButton = styled(ButtonDefault)`
  padding: 0;
  border-style: none;
  position: absolute;
  right: 0;
  top: -1px;
  height: 51.3px;
  padding: 13px 30px 12px;
  border: none;
  overflow: visible;
`;

export const HeroSearchPhoneContainer = styled.div`
  float: right;
  padding-right: 11px;
`;

export const HeroSearchPhoneIcon = styled.div`
  color: #7fad39;
  height: 50px;
  width: 50px;
  background: #f5f5f5;
  line-height: 55px;
  text-align: center;
  border-radius: 50%;
  float: left;
  margin-right: 20px;
`;

export const HeroSearchPhoneText = styled.div`
  overflow: hidden;
`;

export const PhoneTextNumber = styled.h5`
  font-size: 18px;
  color: #1c1c1c;
  font-weight: 700;
  margin: 0;
`;

export const PhoneNumberTime = styled.span`
  font-size: 14px;
  color: #6f6f6f;
`;

export const HeroAdvertisement = styled.div`
  height: 443px;
  max-width: 88.75%;
  display: flex;
  border: 2px;
  align-items: center;
  padding-left: 75px;
  position: relative;
  left: 1rem;
  background: url(${heroImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
`;

export const HeroText = styled.div``;
export const HeroTextName = styled.span`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 4px;
  color: #7fad39;
`;

export const HeroTextGuarantee = styled.div`
  font-size: 46px;
  color: #252525;
  line-height: 52px;
  font-weight: 700;
  margin: 10px 0;
`;

export const HeroTextInfo = styled.p`
  margin-bottom: 35px;
  font-size: 16px;
  font-family: "Cairo", sans-serif;
  color: #6f6f6f;
  font-weight: 400;
  line-height: 26px;
  margin: 0 0 15px 0;
`;

export const ShopButton = styled(ButtonDefault)`
  padding: 10px 28px 10px;
  letter-spacing: 2px;
`;

/* SECTION HERO DIV STYLES END */

/* SECTION HERO STYLES END */

/* SECTION CATEGORIES DIV STYLES START */

export const CategoriesSection = styled.section`
  display: block;
`;

export const CategoriesRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const swiperSlide = styled.div`
  width: 292.5px;
  user-select: none;
  min-height: 1px;
  float: left;
`;

export const slideHeader = styled.h5`
  position: absolute;
  left: 0;
  width: 100%;
  padding: 0 20px;
  bottom: 50px;
  text-align: center;
`;

/* SECTION CATEGORIES DIV STYLES END */

const SectionHelper = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;
  display: block;
`;

/* SECTION FEATURES DIV STYLES START */

/*  FEATURES HEADER STYLES START */

export const FeaturesSection = styled(SectionHelper)`
  padding-top: 80px;
  padding-bottom: 40px;
`;

export const FeatureContainer = styled.div`
  max-width: 1170px;
  margin: 0 auto;
`;

export const FeatureRow = styled(RowHelper)``;

export const FeatureInner = styled(PaddingHelper)`
  flex: 0 0 100%;
  max-width: 100%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
`;

export const FeatureTitleContainer = styled.div`
  margin-bottom: 50px;
  text-align: center;
`;

export const FeatureHeader = styled.h2`
  color: #1c1c1c;
  font-weight: 800;
  position: relative;
  font-size: 36px;
  margin: 0;
  font-family: "Cairo", sans-serif;
  line-height: 1.2;

  &:after {
    content: "";
    position: absolute;
    left: -2rem;
    bottom: -15px;
    right: 0;
    height: 4px;
    width: 80px;
    background: #7fad39;
    margin: 0 auto;
  }
`;

export const FeaturedControls = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

export const FeaturedLists = styled.ul`
  padding: 0;
  margin: 0;
`;

export const FeaturedList = styled.li`
  list-style: none;
  font-size: 18px;
  color: #1c1c1c;
  display: inline-block;
  margin-right: 25px;
  position: relative;
  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: ${(props) =>
      props.item === "allI"
        ? "2px"
        : props.item === "oranges"
        ? "2px"
        : props.item === "vegetables"
        ? "2px"
        : props.item === "meats"
        ? "2px"
        : props.item === "fastfood"
        ? "2px"
        : 0};
    background: #7fad39;
    opacity: ${(props) =>
      props.item === "allI"
        ? 1
        : props.item === "oranges"
        ? 1
        : props.item === "vegetables"
        ? 1
        : props.item === "meats"
        ? 1
        : props.item === "fastfood"
        ? 1
        : 0};
    transition: all, 0.3s;
  }
`;

/*  FEATURES HEADER STYLES END */

/*  FEATURES CONTAINER STYLES START */

export const FeatureItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin-right: -15px;
  margin-left: -15px;
`;

export const FeatureItemImage = styled.div`
  height: 270px;
  position: relative;
  overflow: hidden;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const FeatureImageIcons = styled.ul`
  padding: 0;
  margin: 0;
  position: absolute;
  left: 0;
  bottom: -50px;
  width: 100%;
  text-align: center;
  -webkit-transition: all, 0.5s;
  -moz-transition: all, 0.5s;
  -ms-transition: all, 0.5s;
  -o-transition: all, 0.5s;
  transition: all, 0.5s;
`;

const animation = keyframes`
  0%{
    opacity: 0.3;
    -webkit-filter: blur(2px);
    transform:scale(.2)
  }
  50%{ 
    opacity:0.6;
    -webkit-filter: blur(1.5px);
  }
  75%
  { 
    -webkit-filter: blur(1px);
    opacity:0.8;
  }
  100%
  {
    opacity:1;
  }
`;

export const FeatureItemContainer = styled.div`
  margin-bottom: 50px;
  flex: 0 0 25%;
  max-width: 22.68%;
  position: relative;
  width: 100%;
  padding-right: 12px;
  padding-left: 15px;
  animation: ${animation} 0.35s ease-in-out;

  &:hover ${FeatureImageIcons} {
    bottom: 20px;
  }
`;

export const FeatureImageIcon = styled.li`
  list-style: none;
  display: inline-block;
  margin-right: 10px;
`;

export const FeatureImageAnchor = styled.a`
  text-decoration: none;
  font-size: 16px;
  color: #1c1c1c;
  height: 40px;
  width: 40px;
  line-height: 40px;
  text-align: center;
  border: 1px solid #ebebeb;
  background: #ffffff;
  display: block;
  border-radius: 50%;
  -webkit-transition: all, 0.5s;
  -moz-transition: all, 0.5s;
  -ms-transition: all, 0.5s;
  -o-transition: all, 0.5s;
  transition: all, 0.5s;

  &:hover {
    background: #7fad39;
    border-color: #7fad39;
  }
`;

export const FeatureItemText = styled.div`
  text-align: center;
  padding-top: 15px;
`;

export const FeatureItemName = styled.h6`
  margin: 0;
  font-size: 16px;
`;

export const FeaturedItemAnchor = styled.a`
  color: #252525;
  font-weight: 400;
  text-decoration: none;
  background-color: transparent;
`;

export const FeatureItemCost = styled.h5`
  margin-top: 0.5rem;
  color: #252525;
  font-weight: 700;
  font-size: 18px;
`;

/*  FEATURES CONTAINER STYLES END */

/* SECTION FEATURES DIV STYLES END */

/*  BANNER CONTAINER STYLES START */

export const BannerMain = styled.div``;

export const BannerRow = styled(RowHelper)`
  margin-left: 2px;
`;

export const BannerHalfSide = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
`;

export const BannerImageContainer = styled.div``;

export const BannerImage = styled.img`
  max-width: 100%;
  vertical-align: middle;
  border-style: none;
`;

/* BANNER CONTAINER STYLES END */

/* LATESTPRODUCT SECTION STYLES START */

export const ProductsLatest = styled.section`
  max-width: 1170px;
  padding-top: 60px;
  padding-bottom: 0;
  margin: 0 auto;
`;

export const LatestContainer = styled.div`
  width: 100%;
  padding-right: 12px;
  padding-left: 8px;
`;

export const LatestProductsRow = styled(RowHelper)``;

export const LatestProductCol = styled.div`
  flex: 0 0 33.333333%;
  max-width: 30.333333%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  background: white;
`;

export const LatestProductTextItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  & h4 ion-icon {
    padding-top: 0.5rem;
  }
  & h4 {
    font-size: 24px;
    font-weight: 800;
    color: #1c1c1c;
    margin-bottom: 45px;
  }
`;

export const SliderItem = styled.div`
  width: 360px;
  min-height: 1px;
  float: left;
`;

export const SliderItemInner = styled.div`
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
`;

export const SliderItemContainer = styled.a`
  overflow: hidden;
  display: block;
  text-decoration: none;
`;

export const ItemPic = styled.div`
  float: left;
  margin-right: 25px;
`;

export const ItemText = styled.div`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;

  & span {
    font-size: 18px;
    display: block;
    color: #252525;
    font-weight: 700;
  }
`;

export const LatestItemImg = styled.img`
  display: block;
  width: 100%;
  height: 110px;
  max-width: 100%;
  object-fit: cover;
  box-sizing: border-box;
`;

export const LatestItemHeader = styled.h6`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 8px;
  line-height: 1.2;
  text-align: left;
  color: #252525;
`;

/* LATESTPRODUCT SECTION STYLES END */

/* BLOG SECTION STYLES START */

export const BlogSection = styled.section`
  display: block;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const BlogTitleContainer = styled(PaddingHelper)`
  flex: 0 0 100%;
  max-width: 100%;
`;

export const BlogTitle = styled.div`
  margin-bottom: 70px;
  text-align: center;
`;

export const BlogHeader = styled.h2`
  color: #1c1c1c;
  font-weight: 700;
  position: relative;
  font-size: 36px;
  margin: 0;
  line-height: 1.2;
  text-align: center;

  &::after {
    position: absolute;
    left: 0;
    bottom: -15px;
    right: 0;
    height: 4px;
    width: 80px;
    background: #7fad39;
    content: "";
    margin: 0 auto;
  }
`;

export const BlogPost = styled(PaddingHelper)`
  flex: 0 0 30.333333%;
  max-width: 30.33333%;
`;

export const PostItem = styled.div`
  margin-bottom: 30px;
`;

export const PostImageContainer = styled.div``;

export const PostImage = styled.img`
  min-width: 100%;
  width: 100%;
  vertical-align: middle;
  border-style: none;
`;

export const PostTextContainer = styled.div`
  padding-top: 25px;
  padding-left: 0.15rem;
`;

export const DateComInfos = styled.ul`
  padding: 0;
  margin: 0;

  & ion-icon {
    position: relative;
    top: 0.1rem;
    right: 0.2rem;
  }
`;

const LiHelper = styled.li`
  font-size: 16px;
  color: #b2b2b2;
  list-style: none;
  display: inline-block;
`;

export const ReleaseDate = styled(LiHelper)`
  margin-right: 25px;
`;

export const PostComment = styled(LiHelper)`
  margin-right: 0;
`;

export const PostName = styled.h5`
  margin-bottom: 12px;
  font-size: 18px;

  & a {
    font-size: 20px;
    color: #1c1c1c;
    font-weight: 700;
    text-decoration: none;
    background-color: transparent;
  }
`;

export const PostInfos = styled.p`
  margin-bottom: 25px;
  font-size: 16px;
  line-height: 26px;
  margin: 0 0 15px 0;
`;

/* BLOG SECTION STYLES END */

/* FOOTER SECTION STYLES START */

export const FooterSection = styled.footer`
  display: block;
  background: #f3f6fa;
  padding-top: 70px;
  padding-bottom: 0;
`;

export const FooterAboutCol = styled(PaddingHelper)`
  flex: 0 0 25%;
  max-width: 25%;
`;

export const FooterAbout = styled.div`
  margin-bottom: 30px;
`;

export const FooterAboutLogo = styled.div`
  margin-bottom: 15px;

  & a {
    display: inline-block;
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
  }

  & img {
    max-width: 60%;
    vertical-align: middle;
    border-style: none;
  }
`;

export const AboutLists = styled.ul`
  padding: 0;
  margin: 0;
`;

export const AboutList = styled.li`
  font-size: 16px;
  color: #1c1c1c;
  line-height: 36px;
  list-style: none;
`;

export const FooterWidgetCol = styled(PaddingHelper)`
  flex: 0 0 30.333333%;
  max-width: 30.333333%;
  margin-left: 5.133333%;
`;

export const FooterWidget = styled.div`
  margin-bottom: 30px;
  overflow: hidden;

  & h6 {
    font-size: 16px;
    color: #1c1c1c;
    font-weight: 700;
    margin-bottom: 10px !important;
    padding: 0;
    margin: 0;
  }
`;

export const WidgetLists = styled.ul`
  padding: 0;
  margin: 0;
  width: 50%;
  float: left;

  & li {
    list-style: none;
  }

  & li a {
    text-decoration: none;
    background-color: transparent;
    color: #1c1c1c;
    font-size: 14px;
    line-height: 32px;
  }
`;

export const FooterWidgetContactCol = styled(PaddingHelper)`
  flex: 0 0 33.753333%;
  max-width: 31.333333%;

  & h6 {
    font-size: 16px;
    color: #1c1c1c;
    font-weight: 700;
    margin-bottom: 10px !important;
    padding: 0;
    margin: 0;
  }

  & p {
    font-size: 12px;
    color: #1c1c1c;
    margin-bottom: 30px;
    font-weight: 400;
    line-height: 26px;
    margin: 0 0 15px 0;
  }
`;

export const WidgetForm = styled.form`
  position: relative;
  margin-bottom: 30px;

  & input {
    width: 88%;
    font-size: 16px;
    padding-left: 20px;
    color: #1c1c1c;
    height: 46px;
    border: 1px solid #ededed;
    overflow: visible;
    margin: 0;
    line-height: inherit;
    outline: none;
    border: none;
  }

  & input:focus {
    border: 1px solid #7fad39;
  }
`;

export const SubscribeBtn = styled(ButtonDefault)`
  padding: 0;
  border-style: none;
  font-size: smaller;
  cursor: pointer;
  position: absolute;
  right: 1.2rem;
  top: 0;
  padding: 0 20px;
  height: 100%;
`;

export const WidgetAnchor = styled.a`
  display: inline-block;
  height: 41px;
  width: 41px;
  font-size: 16px;
  color: #404040;
  border: 1px solid #ededed;
  border-radius: 50%;
  line-height: 38px;
  text-align: center;
  background: #fff;
  transition: all, 0.3s;
  margin-right: 10px;
  text-decoration: none;

  & ion-icon {
    font-size: larger;
    padding-top: 0.7rem;
  }

  &:hover {
    background: #7fad39;
    color: #fff;
    border-color: #fff;
  }
`;

export const BottomFooterCol = styled(PaddingHelper)`
  flex: 0 0 100%;
  max-width: 100%;
`;

export const FooterCopyRight = styled.div`
  border-top: 1px solid #ebebeb;
  padding: 15px 0;
  overflow: hidden;
  margin-top: 20px;
`;

export const CopyRightText = styled.div`
  font-size: 14px;
  color: #1c1c1c;
  float: left;
  line-height: 25px;

  & p {
    font-size: 16px;
    font-family: "Cairo", sans-serif;
    color: #6f6f6f;
    font-weight: 400;
    line-height: 26px;
    margin: 0 0 15px 0;

    & ion-icon {
      position: relative;
      top: 0.2rem;
    }
  }
`;

export const FooterPayment = styled.div`
  float: right;

  & img {
    max-width: 82%;
    vertical-align: middle;
    border-style: none;
  }
`;
/* FOOTER SECTION STYLES END */

/* SHOPCART  STYLES START */

export const DefaultShopContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  background: transparent;
  display: ${({ showCart }) => (showCart === true ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 14;
`;

export const TransparentHide = styled.div`
  background: transparent;
  z-index: 14;
  width: 100%;
  height: 120%;
`;

export const ShopCartContainer = styled.div`
  border-radius: 5px;
  background-color: #fffafa;
  position: absolute;
  top: 6rem;
  z-index: 14;
  display: ${({ showCart }) => (showCart === true ? "flex" : "none")};
  flex-direction: column;
  @media (min-width: 1024px) {
    height: 400px;
    width: 500px;
    max-height: 400px;
  }

  @media (min-width: 1440px) {
    width: 600px;
    height: 550px;
    max-height: 550px;
  }
`;

const scrollStyles = css`
  &::-webkit-scrollbar {
    width: ${({ showScroll }) => (showScroll ? "5px" : "0")};
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
  &::-webkit-scrollbar-thumb {
    background: #7fad39;
    border-radius: 3px;
  }
`;

export const TopScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  padding-bottom: 4rem;
  scroll-behavior: smooth;
  ${scrollStyles}
`;

export const CartItemContainer = styled.div`
  display: flex;
  width: 100%;
  height: 135px;
  border-bottom: 1px solid #7fad39;
  margin: 0 auto;
`;

export const CartItemImageContainer = styled.div`
  padding: 1rem;

  @media (min-width: 1024px) {
    width: 150px;
    height: 80px;
  }
  @media (min-width: 1440px) {
    width: 150px;
    height: 100px;
  }

  & img {
    width: 100%;
    height: 100%;
    @media (min-width: 1024px) {
      object-fit: cover;
    }
  }
`;

export const CartItemInfosContainer = styled.div`
  display: flex;
  width: 300px;

  @media (min-width: 1024px) {
    padding: 0 0.7rem;
  }
  @media (min-width: 1440px) {
    padding: 0 1rem;
  }
`;

export const CartItemInfos = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const CartItemName = styled.div`
  & h3 {
    @media (min-width: 1024px) {
      font-size: smaller;
      margin-top: 1rem;
      margin-bottom: 2rem;
    }
    @media (min-width: 1440px) {
      font-size: 1.4rem;
    }
  }
`;

export const CartItemInfosSub = styled.div`
  display: flex;
  gap: 0.2rem;
  width: 100%;
`;

export const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  @media (min-width: 1024px) {
    top: 0.1rem;
  }
  @media (min-width: 1440px) {
    bottom: 0.8rem;
  }
  & small {
    font-size: 8px;
    font-weight: 700;
    color: gray;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-align: ${({ total }) => (total ? "center" : null)};
  }

  & span {
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    opacity: 0.9;
    text-transform: ${({ section }) => (section ? "capitalize" : null)};
    @media (min-width: 1024px) {
      font-size: 12px;
    }
    @media (min-width: 1440px) {
      font-size: 16px;
    }
  }
`;

export const CartIncDecContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  gap: 0.5rem;
  position: relative;
  top: 0.5rem;

  & div {
    text-align: center;
    background-color: #7fad39;
    color: white;
    cursor: pointer;
    border-radius: 3px;
    transition: all, 0.7s;
    @media (min-width: 1024px) {
      width: 40px;
      height: 40px;
      margin-top: 1.5rem;
    }
    @media (min-width: 1440px) {
      width: 50px;
      height: 50px;
    }

    &:hover {
      opacity: 0.7;
    }

    & span {
      position: relative;
      top: 0.3rem;
      @media (min-width: 1024px) {
        font-size: 28px;
      }
      @media (min-width: 1440px) {
        font-size: 35px;
      }
    }
  }
`;

export const CartButtonsContainer = styled.div`
  width: 100%;
  border-radius: 55px;
  height: 100px;
  bottom: 0;
  background: #fffafa;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CartButtonsSub = styled.div`
  display: flex;
  margin-right: 1rem;
  @media (min-width: 1024px) {
    gap: 0.6rem;
  }
  @media (min-width: 1440px) {
    gap: 1rem;
  }
`;

export const CartButton = styled.button`
  outline: none;
  border: none;
  background-color: ${({ cancel }) => (cancel ? "#B22222" : "#7fad39")};
  color: white;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  top: 0.1rem;
  transition: all, 1s;
  @media (min-width: 1024px) {
    font-size: 12px;
    padding: 0.5rem 1.2rem;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
    padding: 0.5rem 1.5rem;
  }
  &:hover {
    opacity: 0.6;
  }
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;

  ${(props) =>
    props.a
      ? css`
          margin-top: -1rem;
        `
      : ""}

  & ion-icon {
    padding-right: 0.5rem;
    padding-bottom: 0.1rem;
    @media (min-width: 1024px) {
      font-size: 18px;
    }
    @media (min-width: 1440px) {
      font-size: 1.6rem;
    }
  }

  h2 {
    @media (min-width: 1024px) {
      font-size: 18px;
    }
    @media (min-width: 1440px) {
      font-size: 1.6rem;
    }
  }
`;

export const CartTotalsInfos = styled.div`
  margin-left: 1rem;
  & div {
    font-size: 1rem;
    font-weight: 700;
    color: #808080;
    @media (min-width: 1024px) {
      font-size: 0.7rem;
    }
    @media (min-width: 1440px) {
      font-size: 1rem;
    }
  }
  & div span {
    margin-left: 0.3rem;
    @media (min-width: 1024px) {
      font-weight: 600;
    }
    @media (min-width: 1440px) {
      font-weight: 700;
    }
    color: black !important;
  }
`;

export const CartEmpty = styled.p`
  margin-top: 5rem;
  height: 250px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: larger;
  color: #dcdcdc;
  font-weight: 700;
`;

/* SHOPCART  STYLES END */

/* WISHLISTS  STYLES START */

export const WishListItemContainer = styled(CartItemContainer)`
  align-items: center;
  height: 110px;
  width: 96%;
`;

export const WishListsItemImageContainer = styled(CartItemImageContainer)`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  & span {
    position: relative;
    right: 0.7rem;
    color: #7fad39;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      color: #208734;
    }
  }
  & img {
    width: 70%;
    height: 70%;
    vertical-align: center;
  }
`;

export const WishListsColumnName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #c3c3c3;
  gap: 6rem;
  height: 2rem;
  width: 96%;
  margin: 0 auto;
  box-sizing: border-box;

  & h5 {
    margin: 0;
    padding: 0;
    letter-spacing: 1px;
    color: #c3c3c3;
  }
`;

export const WishListItemInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15.5rem;
  height: 100%;
  gap: 6rem;
`;

export const WishListItemInfo = styled.h4`
  font-weight: 500;
  color: #464646;
  ${(props) =>
    props.pl
      ? css`
          padding-left: 0.5rem;
        `
      : props.pr
      ? css`
          padding-right: 0.6rem;
        `
      : null};
`;

export const WishListButtonContainer = styled.div`
  height: 100%;
  width: 10rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & button {
    padding: 0.35rem 1.2rem;
    font-weight: 700;
    letter-spacing: 0.5px;
    border: none;
    outline: none;
    color: white;
    background: #7fad39;
    border-radius: 20px;
    cursor: pointer;
    transition: all, 0.7s;
    &:hover {
      opacity: 0.7;
    }
  }
`;

/* WISHLISTS  STYLES END */

/* ORDERS PAGE STYLES START */

export const OrdersTableContainer = styled.div`
  min-width: 500px;
  max-width: 1170px;
  min-height: 400px;
  max-height: 400px;
  padding: 2rem 2rem;
  margin: 0 auto;
  border-radius: 5px;
  background: #f5f5f5;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
  &::-webkit-scrollbar-thumb {
    background: #7fad39;
    border-radius: 3px;
  }
`;

export const OrdersSection = styled.div`
  padding-top: 10px;
  padding-bottom: 80px;
  font-family: "Cairo", sans-serif;
`;

export const OrdersTable = styled.table`
  width: 100%;
  max-height: 700px;
  border-collapse: collapse;
  font-family: "Cairo", sans-serif;
  border-radius: 5px;
  overflow: hidden;
  background: #7fad39;
  color: rgb(222, 222, 222);
`;

const animationss = keyframes`
  0%{
  line-height:0.3rem;
  height:30%;
  }
  40%{
  line-height:0.6rem;
  height:60%;
  }
  80%{
  
  }
  100%{
  line-height:1rem;
  height:100%;
  visibility:visible;
  }
`;

export const ProductsDetailsRow = styled.tr`
  width: 100%;
  line-height: 3rem;
`;

export const OrdersTableRow = styled.tr`
  width: 100%;
  cursor: pointer;
  line-height: 3.5rem;
  & td {
    font-weight: 700;
    padding-left: 0.3rem;
  }
  & button {
    padding: 0.35rem 1.2rem;
    font-weight: 800;
    letter-spacing: 0.5px;
    border: none;
    outline: none;
    background: #f5f5f5;
    border-radius: 20px;
    cursor: pointer;
    transition: all, 0.7s;
    &:hover {
      opacity: 0.7;
    }
  }
`;

/* ORDERS PAGE STYLES END */
