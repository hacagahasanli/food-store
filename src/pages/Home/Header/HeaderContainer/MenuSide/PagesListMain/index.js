import {
  MenuList,
  MenuListItem,
  PagesList,
  PagesListElement,
  PagesListAnchor,
} from "../../../../index";

const PagesListMain = () => {
  return (
    <MenuList>
      <MenuListItem href="/#">Pages</MenuListItem>
      <PagesList>
        <PagesListElement>
          <PagesListAnchor href="/#">Shop Details</PagesListAnchor>
        </PagesListElement>
        <PagesListElement>
          <PagesListAnchor href="/#">Shopping Cart</PagesListAnchor>
        </PagesListElement>
        <PagesListElement>
          <PagesListAnchor href="/#">Check Out</PagesListAnchor>
        </PagesListElement>
        <PagesListElement>
          <PagesListAnchor href="/#">Blog Details</PagesListAnchor>
        </PagesListElement>
      </PagesList>
    </MenuList>
  );
};

export default PagesListMain ;
