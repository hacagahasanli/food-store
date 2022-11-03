import React from "react";
import {
  WishListItemInfos,
  WishListItemInfo,
} from "../../../../../../Home/index";

const ItemWishListInfos = ({ infoThree, infoTwo }) => {
  return (
    <WishListItemInfos>
      <WishListItemInfo pl>{infoTwo}</WishListItemInfo>
      <WishListItemInfo pr>{infoThree}</WishListItemInfo>
    </WishListItemInfos>
  );
};

export default ItemWishListInfos;
