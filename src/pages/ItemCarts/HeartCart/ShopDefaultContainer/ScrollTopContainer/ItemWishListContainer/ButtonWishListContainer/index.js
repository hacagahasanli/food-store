import React from "react";
import { WishListButtonContainer } from "../../../../../../Home/index";

const ButtonWishListContainer = ({ useAddToCart, binded }) => {
  return (
    <WishListButtonContainer>
      <button onClick={useAddToCart.bind(null, binded)}>Add to cart</button>
    </WishListButtonContainer>
  );
};

export default ButtonWishListContainer;
