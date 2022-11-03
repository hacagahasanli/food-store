import React from "react";
import { WishListItemContainer } from "../../../../../Home/index";
import ItemWishListsImageContainer from "./ItemWishListsImageContainer";
import ItemWishListInfos from "./ItemWishListInfos";
import ButtonWishListContainer from "./ButtonWishListContainer";

const ItemWishListContainer = ({
  id,
  useRemoveFromWishlist,
  src,
  alt,
  infoTwo,
  infoThree,
  useAddToCart,
  binded,
}) => {
  return (
    <WishListItemContainer key={id}>
      <ItemWishListsImageContainer
        useRemoveFromWishlist={useRemoveFromWishlist}
        binded={binded}
        src={src}
        alt={alt}
      />
      <ItemWishListInfos infoThree={infoThree} infoTwo={infoTwo} />
      <ButtonWishListContainer useAddToCart={useAddToCart} binded={binded} />
    </WishListItemContainer>
  );
};

export default ItemWishListContainer;
