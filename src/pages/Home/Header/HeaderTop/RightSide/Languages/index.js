import {
  RightSideLanguage,
  LanguageFlag,
  LanguageWord,
  ArrowDown,
  LanguageLists,
  LanguageListElement,
  LanguageListAnchor,
  Usa,
} from "../../../../index";

const Languages = () => {
  return (
    <RightSideLanguage>
      <LanguageFlag src={Usa} alt="Sebirli olaq" />
      <LanguageWord>English</LanguageWord>
      <ArrowDown className="arrow__carrot-down">&#8964;</ArrowDown>
      <LanguageLists>
        <LanguageListElement>
          <LanguageListAnchor href="/#">Azerbaijan</LanguageListAnchor>
        </LanguageListElement>
        <LanguageListElement>
          <LanguageListAnchor href="/#">English</LanguageListAnchor>
        </LanguageListElement>
      </LanguageLists>
    </RightSideLanguage>
  );
};

export default Languages;
