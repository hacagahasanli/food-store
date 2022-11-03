import React from "react";
import { WishListsItemImageContainer } from "../../../../../../Home/index";

const ItemWishListsImageContainer = ({
  binded,
  useRemoveFromWishlist,
  src,
  alt,
}) => {
  return (
    <WishListsItemImageContainer>
      <span
        onClick={useRemoveFromWishlist.bind(null, binded)}
        className="material-symbols-outlined"
      >
        delete
      </span>
      <img src={src} alt={alt} />
    </WishListsItemImageContainer>
  );
};

export default ItemWishListsImageContainer;
