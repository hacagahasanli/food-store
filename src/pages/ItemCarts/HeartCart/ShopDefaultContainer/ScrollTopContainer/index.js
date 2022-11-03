import React from "react";
import { TopScrollContainer, CartEmpty, v4 } from "../../../../Home/index";
import ColumnWishListName from "./ColumnWishListName";
import ItemWishListContainer from "./ItemWishListContainer";

const ScrollTopContainer = ({
  showScroll,
  wishLists,
  useRemoveFromWishlist,
  useAddToCart,
}) => {
  return (
    <TopScrollContainer showScroll={showScroll}>
      <ColumnWishListName />
      {wishLists.length === 0 ? (
        <CartEmpty>You have no item in your wishlist!</CartEmpty>
      ) : (
        wishLists.map((list) => (
          <ItemWishListContainer
            key={list[4] + v4()}
            id={list[4] + v4()}
            useRemoveFromWishlist={useRemoveFromWishlist}
            src={list[1]}
            alt={list[4]}
            infoTwo={list[2]}
            infoThree={list[3]}
            useAddToCart={useAddToCart}
            binded={list[5]}
          />
        ))
      )}
    </TopScrollContainer>
  );
};

export default ScrollTopContainer;
