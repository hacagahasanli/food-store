import {
  HeroSearch,
  HeroSearchFormContainer,
  HeroSearchForm,
  HeroSearchCategories,
  HeroInput,
  HeroFormButton,
  HeroSearchPhoneContainer,
  HeroSearchPhoneIcon,
  HeroSearchPhoneText,
  PhoneTextNumber,
  PhoneNumberTime,
} from "../../../index";

const Search = () => {
  return (
    <HeroSearch>
      <HeroSearchFormContainer>
        <HeroSearchForm>
          <HeroSearchCategories>
            All Categories
            <ion-icon name="chevron-down-outline"></ion-icon>
          </HeroSearchCategories>
          <HeroInput type="text" placeholder="What do you need?" />
          <HeroFormButton type="submit">SEARCH</HeroFormButton>
        </HeroSearchForm>
      </HeroSearchFormContainer>
      <HeroSearchPhoneContainer>
        <HeroSearchPhoneIcon>
          <ion-icon name="call"></ion-icon>
        </HeroSearchPhoneIcon>
        <HeroSearchPhoneText>
          <PhoneTextNumber>+994 11.188.888</PhoneTextNumber>
          <PhoneNumberTime>support 24/7 time</PhoneNumberTime>
        </HeroSearchPhoneText>
      </HeroSearchPhoneContainer>
    </HeroSearch>
  );
};

export default Search;
